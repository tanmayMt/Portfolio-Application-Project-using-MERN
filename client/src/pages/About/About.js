import React from "react";
import "./About.css";
import myImage from '../../assets/myImge.jpg';
import { motion } from "framer-motion";
import { Apps } from "../../utils/Apps";
const About = () => {
  return (
    <>
<motion.div
  initial={{ y: -20 }} // Start slightly above
  animate={{ y: 0 }} // Move to normal position
  transition={{ type: "spring", stiffness: 150 }} // Bouncy effect
>
  <div className="about" id="about">
    <div className="row">
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
        <img src={myImage} alt="profile_pic" />
      </div>
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
        <h1>About me</h1>
        <p>
          My name is Tanmay Samanta. I am from Kolkata, West Bengal. I completed my BCA from Burdwan University and am currently pursuing my MCA from MAKAUT University. My short-term goal is to improve my technical skills and knowledge through my MCA course. My long-term goal is to secure a job in a reputed organization where I can utilize my knowledge and skills to contribute to the progress of the organization as well as myself.
        </p>
        {Apps.map((app) => (
          <a href={app.link} key={app._id}>
            <div className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
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
</motion.div>
    </>
  );
};

export default About;