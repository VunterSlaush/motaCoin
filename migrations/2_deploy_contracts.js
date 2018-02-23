var MotaCoin = artifacts.require("./MotaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(MotaCoin);
};
