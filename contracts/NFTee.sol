pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GameItem is ERC721 {

    constructor () ERC721("GameItem", "ITM"){
        _mint(msg.sender, 1);
    }
}