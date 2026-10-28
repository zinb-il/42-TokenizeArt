// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenizeArt42 is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("TokenizeArt42", "TKA42") Ownable(msg.sender) {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        require(recipient != address(0), "Invalid recipient");
        require(bytes(tokenURI).length > 0, "Empty metadata URI");

        uint256 newTokenId = _nextTokenId;
        _nextTokenId++;

        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        
        return newTokenId;
    }
}