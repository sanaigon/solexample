// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RealEstate {
    struct Buyer{
        address buyerAddress;
        string name;
        uint age;
    }

    mapping(uint => Buyer) public buyerInfo;

    address payable public owner;
    address[10] public buyers;

    //Event
    event LogBuyRealEstate(
        address _buyer,
        uint _id
    );

    constructor() public {
        owner = payable(msg.sender);
    }

    function buyRealEstate(uint _id, string memory _name, uint _age) public payable{
        require(_id >=0 && _id <= 9);
        buyers[_id] = msg.sender;
        buyerInfo[_id] = Buyer(msg.sender, _name, _age);
        
        owner.transfer(msg.value);
        emit LogBuyRealEstate(msg.sender, _id);
    }

    function getBuyerInfo(uint _id) public view returns (address, string memory, uint){
        Buyer memory buyer = buyerInfo[_id];
        return (buyer.buyerAddress, buyer.name, buyer.age);
    }

    function getAllBuyers() public view returns(address[10] memory){
        return buyers;
    }
}
