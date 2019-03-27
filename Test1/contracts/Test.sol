pragma solidity >=0.4.21 <0.6.0;

contract Test {
  uint myVariable;
  uint abc = 123;
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function set(uint x) public {
      myVariable = x;
  }

  function get() public view returns (uint) {
      return myVariable;
  }

  function getData() public view returns (uint) {
      return abc;
  }

}
