import Top_photo from "../assets/mint_page-removebg-preview.png";

const Form1 = ({handleMint,name,serial,custWall,setName,setSerial,setCustWall}) =>{
    return(
        <>
        <img src={Top_photo}/>
        <input type="text" id="name" placeholder="Name" value={name} onChange = {(e) => {
          setName(e.target.value);
        }}/>
        <input type="text" id="serial" placeholder="Serial Number" value={serial} onChange = {(e) => {
          setSerial(e.target.value);
        }}/>
        <input type="text" id="cust" placeholder="Customer Wallet Address" value={custWall} onChange = {(e) => {
          setCustWall(e.target.value);
        }}/>
        <button className="mint" onClick={handleMint}>Mint Now !</button>
        </>
    );
}
export default Form1;