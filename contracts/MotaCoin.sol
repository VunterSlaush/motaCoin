pragma solidity ^0.4.4;

import 'zeppelin-solidity/contracts/math/SafeMath.sol';

contract MotaCoin {

  using SafeMath for uint;

  event Transfer(
      address indexed _from,
      address indexed _to,
      uint256 _value
  );

  string public symbol;
  string public name;
  uint8 public decimals;
  uint currentChallenge = 1;
  address public minter;
  mapping(address => uint) balances;
  /**
   * Constructs the Token contract and gives all of the supply to the address
   *     that deployed it. The fixed supply is 9 billion tokens with up to 18
   *     decimal places.
   */
  function MotaCoin() public {
      symbol = 'MTC';
      name = 'MotaCoin';
      decimals = 10;
      minter = msg.sender;
      /*totalSupply = 9000000000 * 10**uint(decimals);
      balances[msg.sender] = totalSupply;
      Transfer(address(0), msg.sender, totalSupply);*/
  }

  /**
   * @dev Fallback function
   */
  function() public payable { revert(); }

  /**
   * Gets the token balance of any wallet.
   * @param _owner Wallet address of the returned token balance.
   * @return The balance of tokens in the wallet.
   */
  function balanceOf(address _owner)
      public
      constant
      returns (uint balance)
  {
      return balances[_owner];
  }

  /**
   * Transfers tokens from the sender's wallet to the specified `_to` wallet.
   * @param _to Address of the transfer's recipient.
   * @param _value Number of tokens to transfer.
   * @return True if the transfer succeeded, false if not.
   */
  function transfer(address _to, uint _value) public returns (bool success) {
      balances[msg.sender] = balances[msg.sender].sub(_value);
      balances[_to] = balances[_to].add(_value);
      Transfer(msg.sender, _to, _value);
      return true;
  }

  /**
   * Transfer tokens from any wallet to the `_to` wallet. This only works if
   *     the `_from` wallet has already allocated tokens for the caller keyset
   *     using `approve`. From wallet must have sufficient balance to
   *     transfer. Caller must have sufficient allowance to transfer.
   * @param _from Wallet address that tokens are withdrawn from.
   * @param _to Wallet address that tokens are deposited to.
   * @param _value Number of tokens transacted.
   * @return True if the transfer succeeded, false if not.
   */
  function transferFrom(address _from, address _to, uint _value)
      public
      returns (bool success)
  {
      balances[_from] = balances[_from].sub(_value);

      balances[_to] = balances[_to].add(_value);
      Transfer(_from, _to, _value);
      return true;
  }


  function rewardMathGeniuses(uint answerToCurrentReward, uint nextChallenge) public {
      require(answerToCurrentReward**3 == currentChallenge); // If answer is wrong do not continue
      balances[msg.sender] += 1; // Reward the player
      currentChallenge = nextChallenge; // Set the next challenge
  }

}
