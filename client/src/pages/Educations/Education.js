import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { motion } from "framer-motion";
// import Fade from "react-reveal/Fade";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
         <motion.div
           initial={{ x: -50, opacity: 0 }} // Starts from the left and is hidden
           animate={{ x: 0, opacity: 1 }} // Moves to normal position and becomes visible
           transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
         >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - Present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MAKAUT, WB, INDIA
            </h4>
          </VerticalTimelineElement>
         </motion.div>
         <motion.div
           initial={{ x: 50, opacity: 0 }} // Starts from the right and is hidden
           animate={{ x: 0, opacity: 1 }} // Moves to normal position and becomes visible
           transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
         >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Burdwan University, WB, INDIA
            </h4>
          </VerticalTimelineElement>
         </motion.div>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;