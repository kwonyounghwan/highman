pragma solidity >=0.5.0 < 0.6.0;

contract BlbToken{

    address public owner;
    string public name; // 토큰 이름
    string public symbol; // 토큰 단위
    uint8 public decimals; // 소수점 이하 자릿수
    uint public totalSupply; // 토큰 총 발행량

    mapping(address => uint) public balanceOf; // 각 주소의 잔고
    mapping(address => int8) public blackList; // 블랙리스트

    event Transfer(address indexed from, address indexed to, uint value);
    event Blacklisted(address indexed target);
    event DeleteFromBlacklist(address indexed target);
    event RejectedPaymentToBlacklistedAddr(address indexed from, address indexed to, uint value);
    event RejectedPaymentFromBlacklistedAddr(address indexed from, address indexed to, uint value);

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }

    function createToken(uint _supply, string memory _name, string memory _symbol, uint8 _decimals) public onlyOwner {
        balanceOf[msg.sender] = _supply;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _supply;
    }

    function blacklisting(address _addr) public onlyOwner {
        blackList[_addr] = 1;
        emit Blacklisted(_addr);
    }

    function deleteFromBlacklist(address _addr) public onlyOwner {
        blackList[_addr] = 0;
        emit DeleteFromBlacklist(_addr);
    }

    /**
    * Withdraw the requested amount to an address
    */
    function withdrawToAddress(address payable destinationAddress,uint256 amount) public {
        /*
        require(address(this).balance>=amount);
        require(balance[msg.sender]>=amount,"Insufficient balance");
        balance[msg.sender] = sub(balance[msg.sender],amount);
        destinationAddress.transfer(amount);
        emit transfer(msg.sender,amount,false);
        */
        destinationAddress.transfer(amount);
    }

    function transferEth() public payable {

        //require(address(_to).balance >= _value);

        //_to.transfer(_value);
        //address(uint160(_to)).transfer(1 ether);
    }

    function transferEth2(address payable _to, uint256 _value) public payable {

        //require(address(_to).balance >= _value);

        _to.transfer(_value);
        //address(uint160(_to)).transfer(1 ether);
    }

    function totalBalance() public view returns(uint){
        return address(this).balance;
    }

     function transferToken(address payable _to, uint _value) public {
        require(balanceOf[msg.sender] >= _value);
        require(balanceOf[_to] + _value >= balanceOf[_to]);

        if(blackList[msg.sender] == 1) {
          emit RejectedPaymentFromBlacklistedAddr(msg.sender, _to, _value);
        } else if(blackList[_to] == 1) {
          emit RejectedPaymentToBlacklistedAddr(msg.sender, _to, _value);
        } else {
          balanceOf[msg.sender] -= _value;
          balanceOf[_to] += _value;
          emit Transfer(msg.sender, _to, _value);
        }
    }

    function getContractEth() public view returns (uint) {
        return address(msg.sender).balance;
    }

    function getUserEth(address _addr) public view returns (uint) {
        return address(_addr).balance;
    }

    function getUserToken(address _addr) public view returns (uint) {
        return balanceOf[_addr];
    }

}
