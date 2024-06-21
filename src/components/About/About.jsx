import React from "react";
import "./About.css";
import Accessibility from "../../assets/About.jpeg";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-text-content">
        <p className="about-description">
          By combining the <b>Accessibility</b> and feel of a small-town lawyer with the <b>breadth</b> and <b>power of modern technology</b>, we can provide <b>expertly crafted legal solutions</b> and <b>expertly crafted legal solutions</b> at <b>lower prices</b>.
        </p>
      </div>
      <div className="about-image-content">
        <img src={Accessibility} className="about-image1" alt="About" />
      </div>
    </div>
  );
}

export default About;
