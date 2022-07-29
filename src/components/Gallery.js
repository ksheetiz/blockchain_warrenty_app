import "../css/about.css";
import { useEffect,useState } from "react";
import Card from "./Card";


const Gallery = ({accounts,setToken}) => {
  
  useEffect(() =>{
    updateNFTs();
  },[])

  const [Data, setData] = useState([]);
 
  const updateNFTs = async () =>{
    var requestOptions = {
      method: 'GET'
    };
    const baseURL = "https://polygon-mumbai.g.alchemy.com/v2/SiyPDVAw_PWOPJ3r6rteWZHKPmI8jd3p/getNFTs/";
    const ownerAddr = accounts[0];
    const contractAddr = "0x437A364Ca4315B230Ac68f24703A20b7D5D4c5Dd";
    const fetchURL = `${baseURL}?owner=${ownerAddr}&contractAddresses[]=${contractAddr}`;
    let nfts= await fetch(fetchURL, requestOptions).then(data => data.json());
    if (nfts) {
      console.log("nfts:", nfts)
      setData(nfts.ownedNfts)
    }  
  }

  
  

  return (
    <> 
      <h1>WARRANTY CARDS</h1>
      <div className="row">
        {Data.length!==0 && Data.map(nft => {
          return(
            <Card nft = {nft} setToken = {setToken}/>
          )
        })}
      </div>
      {/* Don't Touch This part */}
      <div className="about-background"></div>
    </>
  );
};

export default Gallery;
