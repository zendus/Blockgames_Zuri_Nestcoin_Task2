//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
    uint256 public num = 0;
    address public contractOwner;

    constructor() {
        console.log("Hello World");
        contractOwner = msg.sender;
    }

    function inc() public  returns (bool) {
        num += 1;
        console.log("Num has been increased");
        return true;
    }

    function dec() public returns (bool) {
        num -= 1;
        console.log("Num has been decreased");
        return true;
    }

    function getNum() public view returns (uint) {
        require(msg.sender == contractOwner, "Only contract owner can call this function");
        return num;
    }
}
