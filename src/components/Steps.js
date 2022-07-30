import "../css/steps.css";
import party from "../assets/839511eba392bca.png";

const Steps = () =>{
    return(<>
        <div className="steps-container">
            <div className="steps-col">
            <h2>How Does It Works</h2>
            <div className="step-body">
                <p className="steps-text">
                1. Click on Connect Button On Top Right<br/>
                2. Now to Mint click on the Mint Button on the Top Bar and follow the respective Steps<br/>
                3. Now to Check all the Warrenty NFT's that you have click on the Gallery Option on the Top<br/>
                4. Now to Check number of Repairs done on the Product Click on the Repairs button<br/>
                5. To Transfer the Warrenty NFT Go in the Mint Menu and Select The Owner option and input the Respective Wallet address to transfer or you can directly click on the Transfer button on the Card in gallery to transfer the NFT<br></br>
                </p>
                <img src={party} className = "party"/>
            </div>
            </div>
        </div>
        <div className="about-background"></div>
        </>
    )
}

export default Steps;