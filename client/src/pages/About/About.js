import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
     <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
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
     </Jump>
    </>
  );
};

export default About;