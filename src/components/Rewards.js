import "../css/rewards.css";
import { useState, useEffect } from "react";
import f3 from "../assets/better_luck_next_time_rubber_stamp_over_white_background_88415080.jpg";
import f2 from "../assets/istockphoto-1218623917-612x612.jpg";

const Rewards = () => {
  const [userGuess, setuserGuess] = useState("");
  const [num, setNum] = useState(0);
  const generateRand = () => {
    let x = Math.random() * 100;
    setNum(x);
  };
  useEffect(() => {
    generateRand();
  }, []);

  return (
    <>
      <div className="steps-container">
        <div className="rewards-body">
          <div className="text-body">
            <h1>Rewards</h1>
            <h3>Are you Feeling Lucky Today ?</h3>
            <h4>Guess The Number!!</h4>
          </div>
          <div className="buttons">
            <button
              className="rewards-button"
              onClick={() => {
                setuserGuess("Less");
              }}
            >
              Less Than 50
            </button>
            <button
              className="rewards-button"
              onClick={() => {
                setuserGuess("More");
              }}
            >
              Greater Than 50
            </button>
          </div>
          <br />
          {userGuess.length > 0 ? (
            <>
              {userGuess === "Less" ? (
                <>
                  {num <= 50 ? (
                    <div className="image">
                    <img src= {f3}/>
                    </div>
                  ) : (
                    <div className="image">
                    <img src= {f2}/>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {num > 50 ? (
                    <div className="image">
                    <img src= {f3}/>
                    </div>
                  ) : (
                    <div className="image">
                    <img src= {f2}/>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="about-background"></div>
    </>
  );
};

export default Rewards;
