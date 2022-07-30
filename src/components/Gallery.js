import "../css/about.css";
import { useEffect,useState } from "react";
import Card from "./Card";


const Gallery = ({accounts,setToken}) => {
  

  const [Data, setData] = useState([]);
 
  const updateNFTs = async () =>{
    var requestOptions = {
      method: 'GET'
    };
    const baseURL = "https://polygon-mumbai.g.alchemy.com/v2/SiyPDVAw_PWOPJ3r6rteWZHKPmI8jd3p/getNFTs/";
    const ownerAddr = accounts[0];
    const contractAddr = "0x7F26B383CF7Ca700c9aD43b1b76f8d3AAC147433";
    const fetchURL = `${baseURL}?owner=${ownerAddr}&contractAddresses[]=${contractAddr}`;
    let nfts= await fetch(fetchURL, requestOptions).then(data => data.json());
    if (nfts) {
      console.log("nfts:", nfts)
      setData(nfts.ownedNfts)
    }  
  }

  useEffect(() =>{
    updateNFTs();
  },[])

  

  return (
    <> 
      <h1>WARRANTY CARDS</h1>
      <div className="row">
        {Data.length == 0 ? (<p className="bod">Let's mint some NFT's</p>):(<></>)}
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
