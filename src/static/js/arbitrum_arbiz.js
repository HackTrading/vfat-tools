$(function () {
    consoleInit(main)
});

const ARBIZ_CHEF_ABI = [{
    "inputs": [{
        "internalType": "contract FarmToken",
        "name": "_token",
        "type": "address"
    }, {"internalType": "uint256", "name": "_startBlock", "type": "uint256"}, {
        "internalType": "address",
        "name": "_devAddress",
        "type": "address"
    }, {"internalType": "address", "name": "_feeAddress", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "EmergencyWithdraw",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
    }],
    "name": "SetDevAddress",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
    }],
    "name": "SetFeeAddress",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
    }],
    "name": "SetVaultAddress",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "TokenPerBlock",
        "type": "uint256"
    }],
    "name": "UpdateEmissionRate",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Withdraw",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_allocPoint",
        "type": "uint256"
    }, {"internalType": "contract IERC20", "name": "_lpToken", "type": "address"}, {
        "internalType": "uint16",
        "name": "_depositFeeBP",
        "type": "uint16"
    }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_pid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "devAddress",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_pid", "type": "uint256"}],
    "name": "emergencyWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "feeAddress",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_from", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_to",
        "type": "uint256"
    }],
    "name": "getMultiplier",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [],
    "name": "massUpdatePools",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_pid", "type": "uint256"}, {
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "pendingToken",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "contract IERC20", "name": "", "type": "address"}],
    "name": "poolExistence",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "poolInfo",
    "outputs": [{"internalType": "contract IERC20", "name": "lpToken", "type": "address"}, {
        "internalType": "uint256",
        "name": "allocPoint",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "lastRewardBlock", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "accTokenPerShare",
        "type": "uint256"
    }, {"internalType": "uint16", "name": "depositFeeBP", "type": "uint16"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "poolLength",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_pid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_allocPoint",
        "type": "uint256"
    }, {"internalType": "uint16", "name": "_depositFeeBP", "type": "uint16"}],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_devAddress", "type": "address"}],
    "name": "setDevAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_feeAddress", "type": "address"}],
    "name": "setFeeAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "startBlock",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "token",
    "outputs": [{"internalType": "contract FarmToken", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "tokenPerBlock",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalAllocPoint",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_tokenPerBlock", "type": "uint256"}],
    "name": "updateEmissionRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_pid", "type": "uint256"}],
    "name": "updatePool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "userInfo",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "rewardDebt",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_pid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}]

async function main() {
    window.loadTracker = LoadHelper.initLoadTracker();
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

    const ARBIZ_CHEF_ADDR = "0x042F9dd4d1419224EF009C39b01b2A3AbD34e29C";
    const rewardTokenTicker = "ARBIZ";
    const ARBIZ_CHEF = new ethers.Contract(ARBIZ_CHEF_ADDR, ARBIZ_CHEF_ABI, App.provider);

    const currentBlock = await App.provider.getBlockNumber();

    const multiplier = await ARBIZ_CHEF.getMultiplier(currentBlock, currentBlock + 1);

    const rewardsPerWeek = await ARBIZ_CHEF.tokenPerBlock() / 1e18
        * 604800 * multiplier / 13.5;

    const tokens = {};
    const prices = await getArbitrumPrices();

    await loadArbitrumChefContract(App, tokens, prices, ARBIZ_CHEF, ARBIZ_CHEF_ADDR, ARBIZ_CHEF_ABI, rewardTokenTicker,
        "token", null, rewardsPerWeek, "pendingToken");

    hideLoading();
    await window.loadTracker.completeLoad();
}
