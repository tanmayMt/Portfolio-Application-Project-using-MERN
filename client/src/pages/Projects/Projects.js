import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
I have worked on many important projects throughout my career. What’s really crucial for me when starting one is to get very clear on the goals right at the start and then create a plan with milestones. I also like dealing with the most difficult parts of the projects early on—that way in case there are any significant issues, I’ll still have a nice amount of time to complete before the deadline. I also typically break down large tasks into smaller chunks, so that it is easier to know where to start. Detailed planning is very important to ensure an important project goes smoothly. 
        </p>
        {/* card design */}
        <div className="row" id="ads">

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://th.bing.com/th/id/OIP.qSIY-u4KwSfS42DWKmM4RgAAAA?w=266&h=177&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    Tour Booking Website
                  </h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/tanmayMt/Tour-Booking-Project-using-MERN"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://th.bing.com/th/id/OIP.jC32b8XWLW4RG-ym_XvtfgHaDt?w=350&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
Medicine Store Project</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/tanmayMt/Medicine-Store-Project-Using-MERN"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <motion.div
             initial={{ rotate: 0, opacity: 0 }} // Starts with no rotation and invisible
             animate={{ rotate: 360, opacity: 1 }} // Spins to 360 degrees and becomes visible
             transition={{ duration: 1, ease: "easeInOut" }} // Smooth rotation effect
             className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://th.bing.com/th/id/OIP.xlUTvMK_gVj_mCk595520QHaFj?w=280&h=210&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Portfolio Application</h6>
                </div>
                <a className="ad-btn" href="https://github.com/tanmayMt/Portfolio-Application-Project-using-MERN">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;