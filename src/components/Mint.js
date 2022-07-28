import "../css/mint.css";
import { ethers } from "ethers";
import warrantyNFT from "../assets/WarrentyNFT.json";
import mistake from "../assets/mistake.png";
import person from "../assets/person.png";
import elec from "../assets/seller_option.gif"
import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";


const Mint = ({ accounts, setAccounts }) => {
  const WarrantyNFTaddress = "0xFEDBBD3F65aD232EBDf2eeB708a25547683279Fb";
  const isConnected = Boolean(accounts[0]);

  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [custWall, setCustWall] = useState("");

  //state For the First Option
  const [first, setfirst] = useState("");
  const [product, setProduct] = useState("");

  const [token, setToken] = useState("");
  const [walletcust, setWalletcust] = useState("");

  const handleMint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        WarrantyNFTaddress,
        warrantyNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(name, serial);
        console.log("response : ", response);
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  };
  const handleTransfer = ()=>{
    console.log("handletransfer !!");
  }

  return (
    <>
      {/* Work Here */}
      <div className="container">
        {!isConnected ? (
          <p className="check">
            You must be Connected to Mint !<br />
            <img src={mistake} />
          </p>
        ) : (
          <div className="form">
            {first.length === 0 ? (
              <>
                <img src={person} />
                <p>Who Are You ?</p>
                <button className="mint option1"onClick={() => {setfirst("seller");}}>Seller</button>
                <button className="mint option1" onClick={() => {setfirst("cust");}}>Owner/Customer</button>
              </>
            ) : (
              <>
                {first === "seller" ? (
                <>
                {product === "" ? (<><img src= {elec}/>
                <p>Select Your Product ?</p>
                  <button className="mint option1" onClick={()=>{setProduct("laptop")}}>PC/Laptop</button>
                  <button className="mint option1" onClick={()=>{setProduct("clothes")}}>Clothes</button>
                  <button className="mint option1" onClick={()=>{setProduct("smartphone")}}>Smartphone</button></>
                  ):(
                    <Form1
                    handleMint={handleMint}
                    name={name}
                    serial={serial}
                    custWall={custWall}
                    setName={setName}
                    setSerial={setSerial}
                    setCustWall={setCustWall}
                  />
                  )}
                </>
                ) : (<>
                    <Form2
                    token = {token}
                    walletcust = {walletcust}
                    handletransfer = {handleTransfer}
                    setToken = {setToken}
                    setWalletcust = {setWalletcust}
                  />
                </>)}
              </>
            )}
          </div>
        )}
      </div>
      {/* Don't Touch This part */}
      <div className="mint-background"></div>
    </>
  );
};

export default Mint;
