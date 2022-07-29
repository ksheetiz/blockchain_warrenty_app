import "../css/mint.css";
import { ethers } from "ethers";
import warrantyNFT from "../assets/WarrentyNFT.json";
import mistake from "../assets/mistake.png";
import person from "../assets/person.png";
import elec from "../assets/seller_option.gif"
import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";


const Mint = ({ accounts, setAccounts,  token, setToken}) => {
  const WarrantyNFTaddress = "0x437A364Ca4315B230Ac68f24703A20b7D5D4c5Dd";
  const isConnected = Boolean(accounts[0]);

  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [custWall, setCustWall] = useState("");
  const [month, setMonth] = useState(0);

  //state For the First Option
  const [first, setfirst] = useState("");
  const [product, setProduct] = useState("");
  const [option, setOption] = useState("");

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
        const response = await contract.mint(name,product, serial, custWall,month);
        console.log("response : ", response);
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  };
  const handleTransfer = async()=>{
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        WarrantyNFTaddress,
        warrantyNFT.abi,
        signer
      );
      try{
        const response = await contract.transferFrom(accounts[0],walletcust,token);
        console.log("response : ",response);
      }catch(err){
        console.log("Error : ",err);
      }
    }
  }

  const handleburn = ()=>{
    console.log("Burn");
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
                {option === "" ? (
                  <>
                  <img src={person} />
                <p>What do you want to do ?</p>
                <button className="mint option1"onClick={() => {setOption("Mint");}}>Mint</button>
                <button className="mint option1" onClick={() => {setOption("Burn");}}>Burn/Delete Warranty</button>
                  </>
                ) : (
                <>
                {option === "Mint" ? (
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
                    month = {month}
                    setMonth = {setMonth}
                  />
                  )}
                  </>
                  ) : (
                  <Form3 token={token} setToken = {setToken} handleburn = {handleburn}/>
                  )}
                </>
                )}
                </>
              ):(
              <>
                
                    <Form2
                    token = {token}
                    walletcust = {walletcust}
                    handletransfer = {handleTransfer}
                    setToken = {setToken}
                    setWalletcust = {setWalletcust}
                  />
                
              </>
              )}
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


