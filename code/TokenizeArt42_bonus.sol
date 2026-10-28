// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TokenizeArt42 is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("TokenizeArt42", "TKA42") Ownable(msg.sender) {}

    // Cette fonction permet de minter avec une image sur IPFS
    function mintNFT(address recipient, string memory __tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        require(recipient != address(0), "Invalid recipient");
        require(bytes(__tokenURI).length > 0, "Empty metadata URI");

        uint256 newTokenId = _nextTokenId;
        _nextTokenId++;

        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, __tokenURI);

        return newTokenId;
    }

    // Cette fonction permet de minter on-chain
    function mintOnChain(address recipient)
        public
        onlyOwner
        returns (uint256) 
    {
        uint256 newTokenId = _nextTokenId;
        _nextTokenId++;
        _safeMint(recipient, newTokenId);

        return newTokenId;
    }

    // Ici on surcharge la fonction tokenURI pour qu'on puisse
    // gerér les deux cas on-chain et off-chain
    function tokenURI(uint256 tokenId) 
        public
        view
        override
        returns (string memory)
    {
        _requireOwned(tokenId);

        if (tokenId == 1) {
            string memory svgPart1 = string(
                abi.encodePacked(
                    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' width='100%' height='100%'>",
                    "<defs><radialGradient id='bgGrad' cx='50%' cy='50%' r='70%'>",
                    "<stop offset='0%' stop-color='#141e2e'/><stop offset='60%' stop-color='#090d16'/><stop offset='100%' stop-color='#030508'/></radialGradient>",
                    "<linearGradient id='chromeLight' x1='0%' y1='0%' x2='0%' y2='100%'>",
                    "<stop offset='0%' stop-color='#ffffff'/><stop offset='35%' stop-color='#e2e8f0'/><stop offset='70%' stop-color='#94a3b8'/><stop offset='100%' stop-color='#475569'/></linearGradient>",
                    "<linearGradient id='cyanNeon' x1='0%' y1='0%' x2='100%' y2='100%'>",
                    "<stop offset='0%' stop-color='#00f2fe'/><stop offset='100%' stop-color='#4facfe'/></linearGradient>",
                    "<filter id='neonGlow' x='-30%' y='-30%' width='160%' height='160%'><feGaussianBlur stdDeviation='12' result='blur'/><feMerge><feMergeNode in='blur'/><feMergeNode in='SourceGraphic'/></feMerge></filter>",
                    "<filter id='subtleGlow' x='-20%' y='-20%' width='140%' height='140%'><feGaussianBlur stdDeviation='6' result='blur'/><feMerge><feMergeNode in='blur'/><feMergeNode in='SourceGraphic'/></feMerge></filter>",
                    "<style>.circuit-line {stroke:#00f2fe;stroke-width:2;opacity:0.4;fill:none;stroke-dasharray:6 3;}.circuit-node {fill:#00f2fe;opacity:0.7;}.nft-title {font-family: 'Arial Black', 'Impact', sans-serif;font-weight:900;}</style>",
                    "</defs>"
                )
            );

            string memory svgPart2 = string(
                abi.encodePacked(
                    "<rect width='1000' height='1000' fill='url(#bgGrad)'/>",
                    "<g opacity='0.15' fill='#00f2fe'>",
                    "<polygon points='0,0 300,0 200,400 0,250'/><polygon points='1000,0 700,0 800,400 1000,250'/>",
                    "<polygon points='0,1000 350,1000 250,650 0,750'/><polygon points='1000,1000 650,1000 750,650 1000,750'/>",
                    "</g>",
                    "<g filter='url(#subtleGlow)'>",
                    "<path d='M 100,500 L 320,500 L 380,420 L 620,420 L 680,500 L 900,500' class='circuit-line'/>",
                    "<path d='M 150,300 L 300,300 L 380,220 L 620,220 L 700,300 L 850,300' class='circuit-line'/>",
                    "<path d='M 150,700 L 300,700 L 380,780 L 620,780 L 700,700 L 850,700' class='circuit-line'/>",
                    "<circle cx='100' cy='500' r='5' class='circuit-node'/><circle cx='900' cy='504' r='5' class='circuit-node'/>",
                    "<circle cx='150' cy='300' r='5' class='circuit-node'/><circle cx='850' cy='300' r='5' class='circuit-node'/>",
                    "<circle cx='150' cy='700' r='5' class='circuit-node'/><circle cx='850' cy='700' r='5' class='circuit-node'/>",
                    "</g>"
                )
            );

            string memory svgPart3 = string(
                abi.encodePacked(
                    "<g transform='translate(500, 500)' filter='url(#neonGlow)'>",
                    "<polygon points='0,-360 280,-180 280,180 0,360 -280,180 -280,-180' fill='none' stroke='#00f2fe' stroke-width='3' opacity='0.6'/>",
                    "<polygon points='0,-330 250,-165 250,165 0,330 -250,165 -250,-165' fill='#0b121e' opacity='0.9' stroke='url(#chromeLight)' stroke-width='2'/>",
                    "</g>",
                    "<line x1='320' y1='500' x2='680' y2='500' stroke='url(#cyanNeon)' stroke-width='4' filter='url(#neonGlow)'/>",
                    "<circle cx='500' cy='500' r='12' fill='#00f2fe' filter='url(#neonGlow)'/>",
                    "<circle cx='500' cy='500' r='5' fill='#ffffff'/>"
                )
            );

            string memory svgPart4 = string(
                abi.encodePacked(
                    "<g filter='url(#neonGlow)'>",
                    "<text x='500' y='410' text-anchor='middle' class='nft-title' font-size='140' fill='none' stroke='#00f2fe' stroke-width='12' opacity='0.8' letter-spacing='6'>1337</text>",
                    "<text x='500' y='410' text-anchor='middle' class='nft-title' font-size='140' fill='#090d16' stroke='#ffffff' stroke-width='4' letter-spacing='6'>1337</text>",
                    "<text x='500' y='410' text-anchor='middle' class='nft-title' font-size='140' fill='url(#chromeLight)' letter-spacing='6'>1337</text>",
                    "</g>",
                    "<g filter='url(#neonGlow)'>",
                    "<text x='500' y='680' text-anchor='middle' class='nft-title' font-size='180' fill='none' stroke='#00f2fe' stroke-width='14' opacity='0.8'>42</text>",
                    "<text x='500' y='680' text-anchor='middle' class='nft-title' font-size='180' fill='#090d16' stroke='#ffffff' stroke-width='5'>42</text>",
                    "<text x='500' y='680' text-anchor='middle' class='nft-title' font-size='180' fill='url(#chromeLight)'>42</text>",
                    "</g>",
                    "<rect x='25' y='25' width='950' height='950' fill='none' stroke='url(#cyanNeon)' stroke-width='3' rx='20' opacity='0.5'/>",
                    "<path d='M 25,100 L 100,25 M 975,100 L 900,25 M 25,900 L 100,975 M 975,900 L 900,975' stroke='#00f2fe' stroke-width='4' filter='url(#subtleGlow)'/>",
                    "</svg>"
                )
            );

            string memory fullSvg = string(
                abi.encodePacked(svgPart1, svgPart2, svgPart3, svgPart4)
            );

            string memory json = string(
                abi.encodePacked(
                    '{"name":"TokenizeArt 42-1337: OnChain Demo",',
                    '"description":"Fully on-chain SVG NFT",',
                    '"image":"data:image/svg+xml;base64,',
                    Base64.encode(bytes(fullSvg)),
                    '"artist":"ziloughm",',
                    '"attributes":[',
                    '{"trait_type":"Artist","value":"ziloughm"},'
                    "]}"
                )
            );

            return
                string(
                    abi.encodePacked(
                        "data:application/json;base64,",
                        Base64.encode(bytes(json))
                    )
                );
        }

        return super.tokenURI(tokenId);
    }
}
