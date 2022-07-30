import Top_photo from "../assets/Shiba_Inu-removebg-preview.png";

const Form5 = ({token,settoken,handleShow,Repairs}) =>{
    return(<>
        <img src={Top_photo}/>
        <input type="text" id="serial" placeholder="Token Number" value={token} onChange = {(e) => {
          settoken(e.target.value);
        }}/>
        <button className="mint" onClick={handleShow}>Show Repairs !</button>
        {Repairs != -1 ? (<p>Repairs Done = {Repairs}</p>):(<></>)}
        </>)
}
export default Form5;