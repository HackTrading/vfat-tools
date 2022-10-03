
$(function() {
    consoleInit(main)
      });
    
    const PANDORA_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_pandora","internalType":"contract IPandoraToken"},{"type":"uint256","name":"_pandoraPerBlock","internalType":"uint256"},{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"DisableWhitelist","inputs":[],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EnableWhitelist","inputs":[],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"ReferralCommissionPaid","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"referrer","internalType":"address","indexed":true},{"type":"uint256","name":"commissionAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pandoraPerBlock","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateNFTBoostRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"controller","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateNFTController","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"controller","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"Whitelisted","inputs":[{"type":"address","name":"_address","internalType":"address","indexed":true},{"type":"bool","name":"whitelist","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"MAXIMUM_REFERRAL_COMMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IBEP20"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract NFTController"}],"name":"controller","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_referrer","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"depositNFT","inputs":[{"type":"address","name":"_nft","internalType":"address"},{"type":"uint256","name":"_tokenId","internalType":"uint256"},{"type":"uint256","name":"_slot","internalType":"uint256"},{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"disableWhitelist","inputs":[{"type":"bool","name":"disable","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"flipWhitelistAll","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getBoost","inputs":[{"type":"address","name":"_account","internalType":"address"},{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}],"name":"getSlots","inputs":[{"type":"address","name":"_account","internalType":"address"},{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"getTokenIds","inputs":[{"type":"address","name":"_account","internalType":"address"},{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isWhitelist","inputs":[{"type":"address","name":"_address","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nftBoostRate","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IPandoraToken"}],"name":"pandora","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pandoraPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IpandoraReferral"}],"name":"pandoraReferral","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingpandora","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IBEP20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IBEP20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accPandoraPerShare","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract Proxypandora"}],"name":"proxy","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"referralCommissionRate","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNftBoostRate","inputs":[{"type":"uint256","name":"_rate","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNftController","inputs":[{"type":"address","name":"_controller","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setReferralCommissionRate","inputs":[{"type":"uint16","name":"_referralCommissionRate","internalType":"uint16"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setWhitelist","inputs":[{"type":"address","name":"_address","internalType":"address"},{"type":"bool","name":"_on","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setpandoraReferral","inputs":[{"type":"address","name":"_pandoraReferral","internalType":"contract IpandoraReferral"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_pandoraPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"whitelistAll","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdrawNFT","inputs":[{"type":"uint256","name":"_slot","internalType":"uint256"},{"type":"uint256","name":"_pid","internalType":"uint256"}]}]

    async function main() {
        const App = await init_ethers();
    
        _print(`Initialized ${App.YOUR_ADDRESS}\n`);
        _print("Reading smart contracts...\n");
    
       const PANDORA_CHEF_ADDR = "0x894d03D77b42bBeC83CEe221596ba17a83b995eC";
       const rewardTokenTicker = "PANDORA";
       const PANDORA_CHEF = new ethers.Contract(PANDORA_CHEF_ADDR, PANDORA_CHEF_ABI, App.provider);
       const blocksPerSeconds = await getAverageBlockTime(App);
       
       const rewardsPerWeek = await PANDORA_CHEF.pandoraPerBlock() /1e18 * 604800 / blocksPerSeconds;
        const tokens = {};
        const prices = await getAstarPrices();
     
        await loadGeneralChefContract(App, tokens, prices, PANDORA_CHEF, PANDORA_CHEF_ADDR, PANDORA_CHEF_ABI, rewardTokenTicker,
            "pandora", null, rewardsPerWeek, "pendingpandora", [1], "astar");
        hideLoading();
      }
    
    