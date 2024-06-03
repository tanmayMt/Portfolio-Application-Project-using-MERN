import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://th.bing.com/th/id/OIP.l7wFjokaGcB5GQ8TkV-hlwHaHK?w=221&h=213&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experince
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout />
              </div>
              <div className="nav-link">
                <FcPortraitMode />
              </div>
              <div className="nav-link">
                <FcBiotech />
              </div>
              <div className="nav-link">
                <FcReadingEbook />
              </div>
              <div className="nav-link">
                <FcVideoProjector />
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
              </div>
              <div className="nav-link">
                <FcBusinessContact />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;