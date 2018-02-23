const { MotaCoinInstance, web3 } = require("../services/w3");
const ApiError = require("../utils/ApiError");

async function transfer(transferBody) {
  //console.log("T B", transferBody);
  const instance = await MotaCoinInstance();
  console.log("instance", instance.transfer);
  /*
  const params = {
    from: transferBody.sender,
    _to: transferBody.receiver,
    _value: transferBody.amount
  };
  try {
    return instance.transfer(
      transferBody.sender,
      transferBody.receiver,
      transferBody.amount
    );
  } catch (e) {
    console.log("E", e);
    throw new ApiError("Account doesnt exist", 404);
  }*/
}

async function balanceOf(_owner) {
  const instance = await MotaCoinInstance();
  console.log("I", instance.balanceOf);
  /*const from = { from: web3.eth.accounts[0] };
  try {
    return instance.balanceOf(_owner, from);
  } catch (e) {
    console.log("E", e);
    throw new ApiError("Account doesnt exist", 404);
  }*/
}

async function mining() {
  const instance = await MotaCoinInstance();
  console.log("I", instance.rewardMathGeniuses);
}

module.exports = { transfer, mining, balanceOf };
