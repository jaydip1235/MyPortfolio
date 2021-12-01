import React from "react";
import Header from "../components/Header";
import achievementslist from "./achievementsdata";
function Achievements() {
  return (
    <div>
      <Header />
      <div
        className="achievements-intro"
        style={{ backgroundImage: `url('./achievements.svg')` }}
      >
        <div className="achievements-intro-content">
          <h1>MY ACHIEVEMENTS</h1>

          <div>
            <p>
            A dream becomes a goal when action is taken toward its achievement.
            </p>
            <h5>-Bo Bennett</h5>
            <button className="primary-button"><a href="#achievements-list">GET STARTED</a></button>
          </div>
        </div>
      </div>


      <div className="container achievements-list mb-5 mt-4" id='achievements-list'>
        <h3 className="font-bold">Some of my Achievements</h3>
        <h5>To see more click <a href = "https://drive.google.com/drive/u/0/folders/1a3WOnKpL0INtFs27_IKlvrbNJTW0xCjs" target="_blank" style={{textDecoration: 'none'}}>here</a></h5>
        <hr />

        <div className="row mt-5">
          {achievementslist.map((achievement) => {
            return (
              <div className="col-md-4">
                <div className="position-relative achievement">
                  <img src={achievement.image} alt="" className='w-100'/>
                  <div className="achievement-content w-100">
                    <h3>{achievement.title}</h3>
                    <hr />
                    <p>{achievement.description}</p>
                    <button className='primary-button'><a href={achievement.link} target='_blank'>VIEW</a></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
