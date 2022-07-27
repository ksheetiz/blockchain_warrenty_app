// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract WarrentyNFT is ERC721, ERC721URIStorage{

    constructor() ERC721("Warrenty", "WRTY") {}

    function generateCharacter() public pure returns (string memory) {
        bytes memory svg = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: coral; font-family: serif; font-size: 14px; }</style>',
            '<rect width="100%" height="100%" fill="black" />',
            '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',"Warrenty Minter",'</text>',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">', "Description Here!",'</text>',
            '</svg>'
        );
        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )
        );
    }

    function getTokenUri(string memory _name, string memory _serial) private view returns(string memory){
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Warrenty Owner :', _name, '",',
                '"description": "This is your warrenty card !!",',
                '"image": "', generateCharacter(), '",',
                '"attributes" : [',
                    '{',
                        '"trait_type" : "Date of Purchase",',
                        '"value" : "',block.timestamp,'"',
                    '}',
                    '{',
                        '"trait_type" : "Serial Number",',
                        '"value" : "',_serial,'"',
                    '}',
                ']',
            '}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }

    function mint(string memory _name, string memory _serial) public {
        uint256 unique_id = block.timestamp;
        _safeMint(msg.sender,unique_id);
        _setTokenURI(unique_id,getTokenUri(_name,_serial));
    }












    //TODO Ignore This part for now implement functionality in future
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    

}