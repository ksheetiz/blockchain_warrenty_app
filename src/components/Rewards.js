import "../css/rewards.css";
import { useState, useEffect } from "react";

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
                    <p>
                      This is your Lucky Day Show this and ask seller to
                      increase your Warrenty Duration
                    </p>
                  ) : (
                    <p>Maybe Next Time !</p>
                  )}
                </>
              ) : (
                <>
                  {num > 50 ? (
                    <p>
                      This is your Lucky Day Show this and ask seller to
                      increase your Warrenty Duration
                    </p>
                  ) : (
                    <p>Maybe Next Time !</p>
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

// (<>{userGuess === "More" && num > 50 ? (<p>This is your Lucky Day Show this and ask seller to increase your Warrenty Duration</p>):(<p>Maybe Next Time !</p>)}</>)
// :(<>{userGuess === "Less" && num <= 50 ? (<p>This is your Lucky Day Show this and ask seller to increase your Warrenty Duration</p>):(<p>Maybe Next Time !</p>)}</>)}
