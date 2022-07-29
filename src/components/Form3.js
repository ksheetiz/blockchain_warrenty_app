import Top_photo from "../assets/Shiba_Inu-removebg-preview.png";

const Form3 = ({handleburn,setToken,token}) =>{
    return(
        <>
        <img src={Top_photo}/>
        <input type="text" id="serial" placeholder="Token Number" value={token} onChange = {(e) => {
          setToken(e.target.value);
        }}/>
        <button className="mint" onClick={handleburn}>Burn Now !</button>
        </>
    );
}
export default Form3;