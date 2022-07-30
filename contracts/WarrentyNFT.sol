// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract WarrentyNFT is ERC721, ERC721URIStorage, Ownable{
    address contract_owner;
    struct Attr{
        string _name;
        string  _product;
        string _serial;
        uint _date;
        uint _repairs;
        uint _months;
    }
    mapping (uint => Attr) attribute;

    constructor() ERC721("Warrenty", "WRTY") {
        contract_owner = owner();
    }

     function generateCharacter(uint tokenId) public view returns (string memory) {
        bytes memory svg = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: coral; font-family: serif; font-size: 14px; }</style>',
            '<rect width="100%" height="100%" fill="black" />',
            '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',"Warrenty Card",'</text>',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">', attribute[tokenId]._product,'</text>',
            '</svg>'
        );
        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )
        );
    }

    function getTokenUri(uint tokenId) private view returns(string memory){
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Warrenty Owner :', attribute[tokenId]._name, '",',
                '"description": "This is your warrenty card !!",',
                '"image": "', generateCharacter(tokenId), '",',
                '"attributes" : [',
                    '{',
                        '"trait_type" : "Serial",',
                        '"value" : "',attribute[tokenId]._serial,'"',
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

    function mint(string memory _name, string memory _product, string memory _serial,address cust,uint _month) public {
        uint256 unique_id = block.timestamp;
        attribute[unique_id] = Attr(_name,_product,_serial,block.timestamp,0,_month);
        _safeMint(msg.sender,unique_id);
        _setTokenURI(unique_id,getTokenUri(unique_id));
        transferFrom(msg.sender,cust,unique_id);
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
    function setRepairs(uint256 tokenId) public {

        attribute[tokenId]._repairs++;
        _setTokenURI(tokenId,getTokenUri(tokenId));
    }
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner nor approved");

        _transfer(from, to, tokenId);
    }
    function ItemType(uint tokenId) public view returns(string memory){
        return attribute[tokenId]._product;
    }
    function DateOfPurchase(uint tokenId) public view returns(uint256 ){
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner nor approved");
        return attribute[tokenId]._date;
    }
    function monthOfExpiry(uint tokenId) public view returns(uint256 ){
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner nor approved");
        return attribute[tokenId]._months;
    }
    function Repairs(uint tokenId) public view returns(uint256){
        return attribute[tokenId]._repairs;
    }
    function Burn(uint tokenId) public payable returns(string memory){
        if(keccak256(abi.encodePacked((IsExpire(tokenId)))) == keccak256(abi.encodePacked(("Expired")))){
        _burn(tokenId);
        return "Success";
        }
        else{
            return "Not Expired";
        }
    }
    function IsExpire(uint tokenId) public view returns(string memory){
        if(attribute[tokenId]._months == 6){
            if(block.timestamp > attribute[tokenId]._date + 182 days){
                return "Expired";
            }
            else{
                return "Not Expired";
            }
        }
        else{
            if(block.timestamp > attribute[tokenId]._date + 365 days){
                return "Expired";
            }
            else{
                return "Not Expired";
            }
        }
    }
}