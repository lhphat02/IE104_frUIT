// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    //Using counter library to track token id
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    Counters.Counter private _itemSold;

    //Listing fee on marketplace
    uint listingPrice = 0.25 ether;
    address payable owner;

    mapping(uint => MarketItem) private idToMarketItem;

    struct MarketItem {
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    event MarketItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    constructor() ERC721("frUIT Tokens", "UIT") {
        owner = payable(msg.sender);
    }

    //Update Listing Price
    function updateListingPrice(uint _listingPrice) public payable {
        require(
            owner == msg.sender,
            "Require market's owner to change listing price !"
        );
        listingPrice = _listingPrice;
    }

    //Get Listing Price
    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    //Mint Token
    function createToken(
        string memory tokenURL,
        uint inputPrice
    ) public payable returns (uint) {
        _tokenId.increment();
        uint newTokenId = _tokenId.current();

        //Mint token and set URI for token
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURL);
        createMarketItem(newTokenId, inputPrice);
        return newTokenId;
    }

    //Create Market Item
    function createMarketItem(uint tokenId, uint price) private {
        require(price > 0, "Price must be higher than 0");
        require(
            msg.value == listingPrice,
            "Must have enough token to pay listing price"
        );

        //Put NFT on market
        idToMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        //Tranfer NFT to marketplace
        _transfer(msg.sender, address(this), tokenId);
        emit MarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    //Buy NFT
    function buyMarketItem(uint tokenId) public payable {
        uint price = idToMarketItem[tokenId].price;
        require(
            price == msg.value,
            "Must have enough tokens to be able to buy this NFT"
        );

        //Transfer ownership
        idToMarketItem[tokenId].owner = payable(address(msg.sender));
        idToMarketItem[tokenId].sold = true;
        _itemSold.increment();
        _transfer(address(this), msg.sender, tokenId);

        //Transaction: signer to marketplace (listing fee), sender to seller (nft price)
        payable(owner).transfer(listingPrice);
        payable(idToMarketItem[tokenId].seller).transfer(msg.value);
    }

    //Resell NFT after purchased
    function resellItem(uint tokenId, uint price) public payable {
        require(price > 0, "Price must be higher than 0");
        require(
            msg.value == listingPrice,
            "Must have enough token to pay listing price"
        );
        require(
            msg.sender == idToMarketItem[tokenId].owner,
            "Only owner can do this action"
        );
        idToMarketItem[tokenId].owner = payable(address(this));
        idToMarketItem[tokenId].seller = payable(address(msg.sender));
        idToMarketItem[tokenId].price = price;
        idToMarketItem[tokenId].sold = false;
        _itemSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    //Fetch MarketItem NFT
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint itemCount = _tokenId.current();
        uint unsoldItemCount = itemCount - _itemSold.current();
        uint index = 0;

        //create new array, length = unsold items on market
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for (uint i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(this)) {
                uint currentId = i + 1;

                MarketItem memory currentItem = idToMarketItem[currentId];

                items[index] = currentItem;
                index++;
            }
        }

        return items;
    }

    //Fetch owned NFTs
    function fetchCollectionItem() public view returns (MarketItem[] memory) {
        uint totalIemCount = _tokenId.current();
        uint index = 0;
        uint itemCount = 0;

        for (uint i = 0; i < totalIemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount++;
            }
        }

        //create new array, length = owned items
        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < totalIemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint currentId = i + 1;

                MarketItem memory currentItem = idToMarketItem[currentId];

                items[index] = currentItem;
                index++;
            }
        }

        return items;
    }

    //Fetch Listing NFT
    function fetchListingItem() public view returns (MarketItem[] memory) {
        uint totalIemCount = _tokenId.current();
        uint index = 0;
        uint itemCount = 0;

        for (uint i = 0; i < totalIemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemCount++;
            }
        }

        //create new array, length = listing items
        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < totalIemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint currentId = i + 1;

                MarketItem memory currentItem = idToMarketItem[currentId];

                items[index] = currentItem;
                index++;
            }
        }

        return items;
    }
}
