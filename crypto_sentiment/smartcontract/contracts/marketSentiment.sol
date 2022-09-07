// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract marketSentiment{
    address public owner;
    string[] public tickersArray;

    constructor() {
        owner = msg.sender;
    }

    struct ticker {
        bool exists;
        uint256 up;
        uint256 down; 
        mapping(address => bool) Voters;
    }

     event tickerupdated (
        uint256 up,
        uint256 down,
        address voter, 
        string ticker
     );

     
    
}

