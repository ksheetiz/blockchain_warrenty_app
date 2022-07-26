import "../css/team.css";
import f1 from "../assets/1.jpg";
import f2 from "../assets/2.jpg";
import f3 from "../assets/3.jpg";

const Team = () => {
  return (
    <>
      {/* Work Here */}
      <div className="team-name">
        <h1>TEAM SYNDICATE</h1>
      </div>
      <div class="main">

         <div class="profile-card">
           <div class="img">
              <img src= {f3}/>
           </div>
           <div class="caption">
              <h3>Ksheetiz Agrahari</h3>
              <p>Team Leader</p>
           </div>
           {/* <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
           </div> */}
         </div>


         <div class="profile-card">
            <div class="img">
               <img src= {f1}/>
            </div>
            <div class="caption">
              <h3>Tushar Srivastav</h3>
              <p>Team Member</p>
            </div>
            {/* <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div> */}
          </div> 

          <div class="profile-card">
            <div class="img">
               <img src= {f2}/>
            </div>
            <div class="caption">
              <h3>Hridayansh Sah</h3>
              <p>Team Member</p>
            </div>
            {/* <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div> */}
          </div> 

      </div>
      
      {/* Don't Touch This part */}
      <div className="team-background"></div>
    </>
  );
};

export default Team;
