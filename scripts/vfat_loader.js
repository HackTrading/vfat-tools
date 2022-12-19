import * as dotenv from 'dotenv';
import * as fs from 'node:fs';
const concurrently = require('concurrently');
const puppeteer = require('puppeteer');
const { ArgumentParser } = require('argparse');
const { PrismaClient } = require('@prisma/client');
const waitOn = require('wait-on');


dotenv.config();

const VFAT_URI = `http://localhost:${process.env.VFAT_PORT}`;
const PROTOCOLS = [
    'sushiv2',
    'alcx',
];

const argParser = new ArgumentParser();
const prisma = new PrismaClient();

argParser.add_argument('-t', '--test', { action: 'store_true', default: false, help: 'run in test mode, batch id is set to -1' });
argParser.add_argument('-p', '--protocols', { default: null, help: `comma separated list of protocols from: ${PROTOCOLS.join(',')}`, type: 'str'});

(async function main(){
    let args = argParser.parse_args();
    let batch_id;
    const isTest = args.test;
    let selectedProtocols = PROTOCOLS;
    if (args.protocols) {
        selectedProtocols = args.protocols.split(',');
    }
    
    if (!isTest) {
        try {
            const createBatch = await prisma.vfat_batches.create({ data: {} });
            batch_id = createBatch.batch_id;
            console.log(`Running in production mode, new batch created with id: ${batch_id}`);
        } catch (error) {
            console.error(`Failed to create vfat_batch instance with error: ${error}`);
            throw error;
        }
    } else {
        console.log(`Running in test mode, no batch created using batch_id: -1`);
        batch_id = -1;
    }

    const buildCommand = concurrently(
        [{ command: 'npm run quick-build', name: 'build' }],
        {outputStream: fs.createWriteStream('/dev/null')},
    );
    
    console.log('Building...');
    try {
        const closeEvents = await buildCommand.result;
        console.log(`Build completed in ${closeEvents[0].timings.durationSeconds.toFixed(2)} seconds`);
    } catch (closeEvents) {
        console.error(`Build failed`);
        process.exit(1);
    }
 
    const serverCommands = concurrently(
        [
            { command: `npm run start -- --no-ui --port=${process.env.VFAT_PORT}`, name: 'vfat' },
            { command: `npm run prisma-server --  --port=${process.env.LOADER_PORT} --batch=${batch_id}`, name: 'prisma-server' },
        ],
        { killOthers: ['success', 'failure'], outputStream: fs.createWriteStream('/dev/null') }
    );
    
    try {
        console.log('Waiting for servers to launch...');
        await waitOn({ resources: [`http://localhost:${process.env.VFAT_PORT}`, `http://localhost:${process.env.LOADER_PORT}`], timeout: 3000 });
    } catch (err) {
        console.error('Servers failed to start');
        console.error(err);
        process.exit(1);
    }
    
    serverCommands.result.then(closeEvents => {
        console.error(`Process ${closeEvents[0].command.name} unexpectedly terminated`);
        throw `${closeEvents[0].command.name} unexpectedly completed`;
    }, closeEvents => {
        for (const closeEvent of closeEvents) {
            if (closeEvent.killed) {
                console.log(`Process ${closeEvent.command.name} stopped`);
            } else {
                console.error(`Process ${closeEvent.command.name} failed`);
                throw `${closeEvents[0].command.name} unexpectedly failed`;
            }
        }
    });
    
    let browserOptions = { headless: !isTest };
    if (process.env.VFAT_PORT === 'DOCKER') {
        browserOptions.executablePath = 'google-chrome-stable';
    }
    const browser = await puppeteer.launch(browserOptions);
    const page = await browser.newPage();

    for (const protocol of selectedProtocols) {
        try {
            console.log(`Loading protocol page ${protocol}`);
            const url = `${VFAT_URI}/${protocol}`;
            await page.goto(url, {waitUntil: 'load', timeout: 60000});
            try {
                await page.waitForFunction('window.hasOwnProperty(\'loadTracker\') === true', {timeout: 5000});
            } catch (e) {
                console.log(`Protocol '${protocol}' not initialized correctly, skipping to next`);
                continue;
            }
            await page.waitForFunction('window.loadTracker.loadCompleted === true', {timeout: 60000});
            const successCount = await page.evaluate('window.loadTracker.successCount');
            const attemptCount = await page.evaluate('window.loadTracker.attemptCount');
            console.log(`Successfully loaded ${protocol}, ${successCount} / ${attemptCount} objects loaded`);
        } catch (error) {
            console.error(error);
        }
    }
    console.log('Completed loading')
    await browser.close();
    
    for (const command of serverCommands.commands) {
        command.kill('SIGINT');
    }
})();
