import "../css/card.css";
import mistake from "../assets/card_back.jpg";
import { useNavigate } from "react-router-dom";
import warrantyNFT from "../assets/WarrentyNFT.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import month1 from "../assets/6_month.jpg";
import month2 from "../assets/12_month.jpg";

const Card = ({nft,setToken}) =>{

  const WarrantyNFTaddress = "0x437A364Ca4315B230Ac68f24703A20b7D5D4c5Dd";
  let navigate = useNavigate();
  const handleClick = () =>{
    setToken(nft.id.tokenId);
    navigate(`/mint`);
  }
  const [humanTime, sethumanTime] = useState("");
  const [Item, setItem] = useState("");
  const [Date, setDate] = useState(0);
  const [Month, setMonth] = useState(0);
  const handleItem = async () =>{
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        WarrantyNFTaddress,
        warrantyNFT.abi,
        signer
      );
      try {
        const response = await contract.ItemType(nft.id.tokenId);
        setItem(response);
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  }
  const handleDate = async () =>{
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        WarrantyNFTaddress,
        warrantyNFT.abi,
        signer
      );
      try {
        const response = await contract.DateOfPurchase(nft.id.tokenId);
        setDate(ethers.BigNumber.from(response).toNumber());
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  }
  const handleMonth = async () =>{
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        WarrantyNFTaddress,
        warrantyNFT.abi,
        signer
      );
      try {
        const response = await contract.monthOfExpiry(nft.id.tokenId);
        setMonth(ethers.BigNumber.from(response).toNumber());
        var date = new Date(Month);
        console.log(date)
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  }
  useEffect(() =>{
    handleItem();
    handleDate();
    handleMonth();
  },[])

    return(
        <div id="container-card">

    <div className="card">
      {Month == 6 ?(<img src={month1}/>):(<img src={month2}/>)}

      <div className="card__details">
        <span className="tag">{nft.metadata.attributes[0].value}</span>
        <span className="tag">{Item}</span>

        <div className="name">{nft.title}</div>

        <p>{nft.description}</p>
        {/* <p>{Date}</p> */}

        <button onClick = {handleClick}>Transfer</button>
      </div>


    </div>
  </div>
    );
}
export default Card;