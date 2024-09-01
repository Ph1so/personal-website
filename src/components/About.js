import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = ({ images }) => {
  const [animate, setAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayInterval = 3000; // 3 seconds

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval); // Clear interval when component is not in view or unmounted
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about-container"
    >
      <div className="about-title">About Me</div>
      <div className="about-description">
        I'm currently a student at{" "}
        <span className="red">University of Massachusetts Lowell</span> pursuing
        a B.S. in Computer Science. On weekends I'm a Software Developer Intern
        at the <span className="red">MIT Media Lab</span> where I work on
        PyLabRobot. I'm passionate about software engineering and I enjoy
        learning AI/ML during my free time. <br />
        <br />
        When I'm not coding, I'm a foosball enthusiast and a 3D artist on
        Blender.
      </div>
      <div className="blender-images">
        <img src="./b3.jpg" alt="centrifuge" className="blender-img" />
        <img src="./b5.jpg" alt="lh" className="blender-img" />
      </div>
      {/* <div className="carousel-container">
        <div className="image-wrapper">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button onClick={prevSlide} className="carousel-button left">
          &#10094;
        </button>
        <button onClick={nextSlide} className="carousel-button right">
          &#10095;
        </button> */}
      {/* Remove or comment out this block to hide the indicators */}
      {/* <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
            ></button>
          ))}
        </div> */}
      {/* </div> */}
      <div className="about-description" style={{ marginBottom: "1em" }}>
        Also have to drop the songs I'm listening to.
      </div>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/0Th8tr21b9cQu80rsnKYFs?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </motion.div>
  );
};

export default About;
