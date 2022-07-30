import "../css/mint.css";
import { useState } from "react";
import Form4 from "./Form4";
import Form5 from "./Form5";
import mistake from "../assets/mistake.png";
import person from "../assets/person.png";
import { ethers } from "ethers";
import warrantyNFT from "../assets/WarrentyNFT.json";

const Repairs = ({ accounts,token,setToken }) => {
const WarrantyNFTaddress = "0x437A364Ca4315B230Ac68f24703A20b7D5D4c5Dd";
  const isConnected = Boolean(accounts[0]);
  const [who, setWho] = useState("");
  const [Repairs, setRepairs] = useState(-1);

  const handleShow = async() => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          WarrantyNFTaddress,
          warrantyNFT.abi,
          signer
        );
        try {
          const response = await contract.Repairs(token);
          setRepairs(ethers.BigNumber.from(response).toNumber());
        } catch (err) {
          console.log("Error : ", err);
        }
      }
  };

  const handleChange = async() => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          WarrantyNFTaddress,
          warrantyNFT.abi,
          signer
        );
        try {
          const response = await contract.setRepairs(token);
        } catch (err) {
          console.log("Error : ", err);
        }
      }
  };

  return (
    <>
      <div className="container">
        {!isConnected ? (
          <p className="check">
            You must be Connected to Check !<br />
            <img src={mistake} />
          </p>
        ) : (
          <div className="form">
            {who.length === 0 ? (
              <>
                <img src={person} />
                <p>Who Are You ?</p>
                <button
                  className="mint option1"
                  onClick={() => {
                    setWho("seller");
                  }}
                >
                  Seller
                </button>
                <button
                  className="mint option1"
                  onClick={() => {
                    setWho("cust");
                  }}
                >
                  Owner/Customer
                </button>
              </>
            ) : (
              <>
                {who === "seller" ? (
                  <>
                    <Form4
                      token={token}
                      settoken={setToken}
                      handleChange={handleChange}
                      Repairs= {Repairs}
                    />
                  </>
                ) : (
                  <>
                    <Form5
                      token={token}
                      settoken={setToken}
                      handleShow={handleShow}
                      Repairs= {Repairs}
                    />
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div className="mint-background"></div>
    </>
  );
};

export default Repairs;
