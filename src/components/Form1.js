import Top_photo from "../assets/mint_page-removebg-preview.png";

const Form1 = ({handleMint,name,serial,custWall,setName,setSerial,setCustWall,month,setMonth,resMint}) =>{
    return(
        <>
        <img src={Top_photo}/>
        <input type="text" id="name" placeholder="Name" value={name} onChange = {(e) => {
          setName(e.target.value);
        }}/>
        <input type="text" id="serial" placeholder="Serial Number" value={serial} onChange = {(e) => {
          setSerial(e.target.value);
        }}/>
        <input type="text" id="add" placeholder="Customer Wallet Address" value={custWall} onChange = {(e) => {
          setCustWall(e.target.value);
        }}/>
        {month === 0 ? (<><button className="month" onClick={()=>{setMonth(6);}}>6 months</button><button className="month"onClick={()=>{setMonth(6);}}>12 months</button></>):(<></>)}
        
        <button className="mint" onClick={handleMint}>Mint Now !</button>
        </>
    );
}
export default Form1;