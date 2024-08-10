import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Percentage of the component that needs to be visible
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false); // Optional: Reset animation when out of view
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animation based on state
      transition={{ duration: 0.6, ease: "easeOut" }} // Transition properties
      className="about-container"
    >
      <div className="about-title">About Me</div>
      <div className="about-description">
        I'm currently a student at{" "}
        <span className="red">University of Massachusetts Lowell</span> pursuing
        a B.S. in Computer Science. On weekends I'm a Software Developer Intern
        at the <span className="red">MIT Media Lab</span> where I work on
        PyLabRobot. I'm passionate about software engineering and I enjoy
        learning AI/ML during my free-time. <br />
        <br />
        When I'm not coding, I'm a foosball enthusiast and a 3D artist on
        Blender.
      </div>
    </motion.div>
  );
};

export default About;
