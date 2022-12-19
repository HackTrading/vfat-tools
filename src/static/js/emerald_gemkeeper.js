
$(function() {
    consoleInit(main)
      });
  
    const GEM_KEEPER_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_bling","internalType":"contract Bling"},{"type":"address","name":"_devaddr","internalType":"address"},{"type":"uint256","name":"_blingPerBlock","internalType":"uint256"},{"type":"uint256","name":"_startBlock","internalType":"uint256"},{"type":"uint256","name":"_bonusEndBlock","internalType":"uint256"},{"type":"uint256","name":"_tokenLaunch","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract Bling"}],"name":"bling","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"blingOfEachPhase","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"blingPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"blockNumberOfEachPhase","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"bonusEndBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"currentBlingPhase","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"dev","inputs":[{"type":"address","name":"_devaddr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devaddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"launch","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingBling","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accBlingPerShare","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenLaunchTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"tokenLaunched","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateBlingPerBlock","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"unclaimedReward","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}];
    const xBLING_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_bling","internalType":"contract PenguinToken"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"LOCK_PERIOD","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MAX_EARLY_WITHDRAW_FEE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"earlyWithdrawalFee","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enter","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"leave","inputs":[{"type":"uint256","name":"_share","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract PenguinToken"}],"name":"bling","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setEarlyWithdrawalFee","inputs":[{"type":"uint256","name":"_earlyWithdrawalFee","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"unlockDate","inputs":[]}]
    const BLING_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_minterAddress","internalType":"address"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"DelegateChanged","inputs":[{"type":"address","name":"delegator","internalType":"address","indexed":true},{"type":"address","name":"fromDelegate","internalType":"address","indexed":true},{"type":"address","name":"toDelegate","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"DelegateVotesChanged","inputs":[{"type":"address","name":"delegate","internalType":"address","indexed":true},{"type":"uint256","name":"previousBalance","internalType":"uint256","indexed":false},{"type":"uint256","name":"newBalance","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DELEGATION_TYPEHASH","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DOMAIN_TYPEHASH","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burnOwnTokens","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint32","name":"fromBlock","internalType":"uint32"},{"type":"uint256","name":"votes","internalType":"uint256"}],"name":"checkpoints","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"uint32","name":"","internalType":"uint32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"delegate","inputs":[{"type":"address","name":"delegatee","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"delegateBySig","inputs":[{"type":"address","name":"delegatee","internalType":"address"},{"type":"uint256","name":"nonce","internalType":"uint256"},{"type":"uint256","name":"expiry","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"delegates","inputs":[{"type":"address","name":"delegator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getCurrentVotes","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getPriorVotes","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"blockNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"mint","inputs":[{"type":"address","name":"_to","internalType":"address"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nonces","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint32","name":"","internalType":"uint32"}],"name":"numCheckpoints","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMinter","inputs":[{"type":"address","name":"_minterAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]}]

    async function main() {
        const App = await init_ethers();
  
        _print(`Connected to ${App.YOUR_ADDRESS}\n`);
        _print("Reading smart contracts states...\n");
  
       const GEM_KEEPER_CHEF_ADDR = "0x05243Bd7778a9D5556AFC98Ae9D222Cdf5E7C704";
  
       const rewardTokenTicker = "BLING";
       const GEM_KEEPER_CHEF = new ethers.Contract(GEM_KEEPER_CHEF_ADDR, GEM_KEEPER_CHEF_ABI, App.provider);
       const currentBlock = await App.provider.getBlockNumber();
       const startBlock = await GEM_KEEPER_CHEF.startBlock();
       let rewardsPerWeek = 0
       const multiplier = 1;
  
       const blocksPerSeconds = await getAverageBlockTime(App);
  
       if(currentBlock < startBlock){
        _print(`Rewards start at block ${startBlock}\n`);
       }else{
        rewardsPerWeek = await GEM_KEEPER_CHEF.blingPerBlock() /1e18 * multiplier * 604800 / blocksPerSeconds;
       }
  
       const tokens = [
        { "id": "tether", "symbol": "USDT", "contract": "0xdC19A122e268128B5eE20366299fc7b5b199C8e3"},
        { "id": "usd-coin", "symbol": "USDC", "contract": "0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD"},
        { "id": "oasis-network", "symbol": "ROSE", "contract": "0x5C78A65AD6D0eC6618788b6E8e211F31729111Ca"},
        { "id": "weth", "symbol": "WETH", "contract": "0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F"},
        { "id": "wrapped-bitcoin", "symbol": "WBTC", "contract": "0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb"},
        { "id": "oasis-network", "symbol": "WROSE", "contract": "0x21c718c22d52d0f3a789b752d4c2fd5908a8a733"},
        { "id": "usd-coin", "symbol": "USDC", "contract": "0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844"},
        { "id": "binance-usd", "symbol": "BUSD", "contract": "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C"},
        { "id": "chainlink", "symbol": "LINK", "contract": "0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055"},
        { "id": "bnb", "symbol": "BNB", "contract": "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D"},
        { "id": "bling", "symbol": "BLING", "contract": "0x72Ad551af3c884d02e864B182aD9A34EE414C36C"},
      ];
        
        const prices = await getEmeraldAndBlingPrices(tokens);
        await loadGeneralEthcallChefContract(App, tokens, prices, GEM_KEEPER_CHEF, GEM_KEEPER_CHEF_ADDR, GEM_KEEPER_CHEF_ABI, rewardTokenTicker,
          "bling", null, rewardsPerWeek, "pendingBling", [7], "emerald");

        await loadXBling(App, prices);
  
        hideLoading();
      }
      async function getEmeraldAndBlingPrices(tokens) {
        const idPrices = await lookUpPrices(tokens.map(x => x.id).filter(id => id !== "bling"));
        const prices = {}
        for (const bt of tokens)
            if (idPrices[bt.id])
                prices[bt.contract] = idPrices[bt.id];
        return prices;
    }

async function loadXBling(App, prices){
  const xBLING_ADDR = "0x25070fA2244b41EA39B964DBFA9E0ab70A886e72";
  const BLING_ADDR = "0x72Ad551af3c884d02e864B182aD9A34EE414C36C";
  const xBLING_CONTRACT = new ethers.Contract(xBLING_ADDR, xBLING_ABI, App.provider);
  const BLING_CONTRACT = new ethers.Contract(BLING_ADDR, BLING_ABI, App.provider);
  const totalDepositedBlings = await BLING_CONTRACT.balanceOf(xBLING_ADDR) / 1e18;
  const totalXblingTokens = await xBLING_CONTRACT.totalSupply() / 1e18;
  const virtualPrice = totalDepositedBlings / totalXblingTokens;
  const blingPrice = getParameterCaseInsensitive(prices, BLING_ADDR).usd;
  const xBlingPrice = blingPrice * virtualPrice;
  const rewardTicker = await xBLING_CONTRACT.symbol();
  const stakeTicker = await BLING_CONTRACT.symbol();
  const totalOwnedXBling = await xBLING_CONTRACT.balanceOf(App.YOUR_ADDRESS) / 1e18;
  const totalOwnedXBlingToUnstake = await xBLING_CONTRACT.balanceOf(App.YOUR_ADDRESS);
  const totalOwnedBling = totalOwnedXBling * virtualPrice;
  const tvl = totalDepositedBlings * blingPrice
  const usersPercentage = totalOwnedXBling / totalXblingTokens * 100;
  const usersXBlingUsd = totalOwnedXBling * blingPrice;
  _print(`\n${rewardTicker} Price: $${toFixed(xBlingPrice, 7)} Total Supply: ${toFixed(totalXblingTokens, 4)} TVL: $${formatMoney(tvl)}`);
  _print(`${stakeTicker} Price: $${toFixed(blingPrice, 7)}`);
  _print(`There is a total of ${toFixed(totalDepositedBlings, 2)} BLING staked in xBLING`);
  _print(`Your balance is ${totalOwnedXBling.toFixed(2)} ${rewardTicker} (${totalOwnedBling.toFixed(2)} ${stakeTicker}), $${formatMoney(usersXBlingUsd)}, ${usersPercentage.toFixed(2)}% of the pool`);
  const unstake = async function() {
    return contract_bling_unstake(xBLING_ABI, xBLING_ADDR, totalOwnedXBlingToUnstake, App)
  }
  _print_link(`Unstake ${totalOwnedXBling.toFixed(2)} ${rewardTicker}`, unstake)
}

const contract_bling_unstake = async function(abi, contractAddress, stakedAmount, App) {
  const signer = App.provider.getSigner()
  const xBLING_WRITE_CONTRACT = new ethers.Contract(contractAddress, abi, signer)
  showLoading()
  xBLING_WRITE_CONTRACT.leave(stakedAmount, {gasLimit: 500000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
}