import React from "react";
import "./About.css";
import myImage from '../../assets/myImge.jpg';
import Jump from "react-reveal/Jump";
import { Apps } from "../../utils/Apps";
const About = () => {
  return (
    <>
     <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={myImage}
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              My name is Tanmay Samanta. I am from Kolkata in West Bengal. I did my graduation in BCA from Burdwan University. Currently I am persuming my master's in MCA from makaut University. My short term goal is improve my technical skill and knowledge from my MCA course. My long term goal is to get a job in a reputed organisation where get a chance to use my knowledge and skill to continue in the progress of organisation as well as myself.
            </p>
            {/* <a  className="ad-btn" href="https://github.com/tanmayMt/Portfolio-Application-Project-using-MERN">
                My Linkin Profile
            </a>
            <a className="ad-btn" href="https://github.com/tanmayMt/Portfolio-Application-Project-using-MERN">
                My GitHub
            </a> */}
            {Apps.map((app)=>(
              <a href={app.link}>
                <div key={app._id} className="col-md-3">
                  <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="alig-self-center">
                            <app.icon className="tech-icon" />
                          </div>
                        <div className="media-body">
                          <h5>{app.name}</h5>
                        </div>
                        </div>
                      </div>
                  </div>
                 </div>
               </div>
              </a>
            ))}
          </div>
        </div>
      </div>
     </Jump>
    </>
  );
};

export default About;