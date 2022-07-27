import Top_photo from "../assets/Shiba_Inu-removebg-preview.png";

const Form2 = ({handletransfer,setToken,setWalletcust,walletcust,token}) =>{
    return(
        <>
        <img src={Top_photo}/>
        <input type="text" id="name" placeholder="Reciever Wallet Address" value={walletcust} onChange = {(e) => {
          setWalletcust(e.target.value);
        }}/>
        <input type="text" id="serial" placeholder="Token Number" value={token} onChange = {(e) => {
          setToken(e.target.value);
        }}/>
        <button className="mint" onClick={handletransfer}>Send Now !</button>
        </>
    );
}
export default Form2;