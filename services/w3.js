const Web3 = require("web3");
const abi = require("../build/contracts/MotaCoin.json");
const contract = require("truffle-contract");
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

const MotaCoinContract = contract(abi);
MotaCoinContract.setProvider(web3.currentProvider);

const MotaCoinInstance = () => {
  return MotaCoinContract.deployed();
};

module.exports = { MotaCoinInstance, web3 };
