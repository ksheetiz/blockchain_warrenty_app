import Top_photo from "../assets/Shiba_Inu-removebg-preview.png";

const Form4 = ({token,settoken,handleChange,Repairs}) =>{
    return(<>
        <img src={Top_photo}/>
        <input type="text" id="serial" placeholder="Token Number" value={token} onChange = {(e) => {
          settoken(e.target.value);
        }}/>
        <button className="mint" onClick={handleChange}>Repair Now !</button>
        {Repairs != -1 ? (<p>Repairs Done = {Repairs}</p>):(<></>)}
        </>)
}
export default Form4;