import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
// import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <motion.div
            initial={{ x: 50, opacity: 0 }} // Start slightly to the right and invisible
            animate={{ x: 0, opacity: 1 }} // Move to normal position and become visible
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Compuer Science Student",
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React native developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Start slightly below and hidden
            animate={{ y: 0, opacity: 1 }} // Move to normal position and become visible
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8768006557"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;