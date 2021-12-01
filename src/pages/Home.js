import React from "react";
import { Link } from "react-router-dom";
import Courosel from "../components/Courosel";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />

      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up" className="ms-2">JAYDIP DEY</h1>

          <div className="intro-content d-flex justify-content-between">
            <p className="ms-2">
              JUCSE'23 <br /> Incoming SDE Intern @Optum 2022
            </p>

            <button className="primary-button font-bold">
              <a
                href="https://pdfhost.io/v/3WmdqASst_JaydipDeyResume"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>

      <Courosel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,224L21.8,197.3C43.6,171,87,117,131,101.3C174.5,85,218,107,262,144C305.5,181,349,235,393,240C436.4,245,480,203,524,160C567.3,117,611,75,655,64C698.2,53,742,75,785,96C829.1,117,873,139,916,176C960,213,1004,267,1047,240C1090.9,213,1135,107,1178,85.3C1221.8,64,1265,128,1309,176C1352.7,224,1396,256,1418,272L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="why-jd-parent" style={{cursor: "pointer"}} >
        <div className="why-jd n-box1 flex-with-center" >
          <h1 className="text-center">Who is Jaydip?</h1>
          <div className="why-jd-content">
            <p>&#10627;</p>

            <p>"Name" : "Jaydip Dey"</p>

            <p>"College" : "Jadavpur University"</p>

            <p>"Batch" : "2019-23"</p>

            <p>"Branch" : "CSE"</p>
            <p>&#10628;</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-right">
              <h2>About myself</h2>
              <p>
                An aspiring Software Development Engineer with the ability to
                solve problems and think outside the box. I am enthusiastic
                about exploring new technologies which have potential to enhance
                user experience. I am also familiar to DSA, CP and Open Source
                contribution.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-2 mb-2">
            <div>
              <img
                src="https://cdn.dribbble.com/users/1068771/screenshots/14225432/media/0da8c461ba3920a8c827d864a6e051ed.jpg?compress=1&resize=400x300"
                alt=""
                height="350"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-left">
              <h2>My hobbies</h2>
              <p>
                My hobbies include listening to music,reading articles, playing
                piano and exploring new tune in it. Moreover I also love to take
                part in various technical and non-technical events and love to
                interact with people to share knowledge, thoughts and  ideas
                with them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="devstack container my-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">My Developement Stack</h3>

          <hr />

          <img
            src="./developer.svg"
            alt=""
            height="200"
            width="200"
            className="text-center"
          />
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="font-bold text-center">
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>ReactDOM</p>
              <p>Redux</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="font-bold text-center">
              <h3 className="font-bold">Language</h3>
              <hr />
              <p>C</p>
              <p>C++</p>
              <p>Java</p>
              <p>Python</p>
              <p>Kotlin</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="font-bold text-center">
              <h3 className="font-bold">Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>SQL</p>
              <p>Mongo DB</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="font-bold text-center">
              <h3 className="font-bold">Other</h3>
              <hr />
              <p>DSA</p>
              <p>Competitive programming</p>
              <p>Open source contribution</p>
              <p>Android</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
