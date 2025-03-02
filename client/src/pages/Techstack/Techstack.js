import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
// import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";
import { TechstackList } from "../../utils/TechstackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.div
        initial={{ scale: 0.8 }} // Starts slightly smaller
        animate={{ scale: 1.1 }} // Expands slightly
        transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        repeat: Infinity, // Keeps repeating
        repeatType: "reverse", // Expands and contracts
        }}      
        >
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming Languages, frameworks, databses, front-end
          and back-end tools, and APIs
        </p>
        </motion.div>
        <div className="row">
          {TechstackList.map((tech) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Starts faded out and shifted left
            animate={{ opacity: 1, x: 0 }} // Becomes fully visible and moves to position
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition            
            key={tech._id} 
            className="col-md-3"
          >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;