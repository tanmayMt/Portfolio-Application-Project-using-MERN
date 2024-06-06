import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://th.bing.com/th/id/OIP.l7wFjokaGcB5GQ8TkV-hlwHaHK?w=221&h=213&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              My name is Tanmay Samanta. I am from Kolkata in West Bengal. I did my graduation in BCA from Burdwan University. Currently I am persuming my master's in MCA from makaut University. My short term goal is improve my technical skill and knowledge from my MCA course. My long term goal is to get a job in a reputed organisation where get a chance to use my knowledge and skill to continue in the progress of organisation as well as myself.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;