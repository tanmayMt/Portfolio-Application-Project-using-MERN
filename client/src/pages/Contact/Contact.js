import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
// import Rotate from "react-reveal/Rotate";
// import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                  initial={{ x: -100, opacity: 0 }} // Start from the left side and invisible
                  animate={{ x: 0, opacity: 1 }} // Move to the normal position and appear
                  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth left-to-right effect
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
<motion.div
  className="card2 d-flex card border-0 px-4 py-5"
  initial={{ rotateY: 180, opacity: 0 }} // Start flipped & invisible
  animate={{ rotateY: 0, opacity: 1 }} // Rotate to normal & visible
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
>
  <div className="row">
    <div className="row">
      <h6>
        Contact With
        <BsLinkedin color="blue" size={30} className="ms-2" />
        <BsGithub color="black" size={30} className="ms-2" />
        <BsFacebook color="blue" size={30} className="ms-2" />
      </h6>
    </div>

    <div className="row px-3 mb-4">
      <div className="line" />
      <small className="or text-center">OR</small>
      <div className="line" />
    </div>
    <div className="row px-3">
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        className="mb-3"
      />
    </div>
    <div className="row px-3">
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email Address"
        className="mb-3"
      />
    </div>
    <div className="row px-3">
      <textarea
        type="text"
        name="msg"
        placeholder="Write your message"
        className="mb-3"
      />
    </div>
    <div className="row px-3">
      <button className="button" type="submit">
        SEND MESSAGE
      </button>
    </div>
  </div>
</motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;