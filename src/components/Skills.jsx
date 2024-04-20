import React, { useState } from "react";
// import image1 from "../img/image1.png";
import "../css/Skills.scss";
import www from "../img/www.png";
import light from "../img/light.png";
import box from "../img/box.png";
import Accordion from './Accordion'

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const activeSkillHandle = (index) => {

    setActiveSkill(index);
  };
  const handleMouseLeave = () => {

    setActiveSkill(null);
  };
  return (
    <section id="skills">
      <div className="section-container dotted-background">
        <div className="section-title-container">
          <p className="section-title-small blue-text">Professional Services</p>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-description">
          <h3 className="skills-description-title">
            Unlocking Creativity Through Web Development and Design
          </h3>
          <p className="skills-description-text">
            Welcome to my personal portfolio! I specialize in web development, concept art, and 3D modelling.
            With a passion for creativity and innovation, I strive to bring unique and engaging experiences to
            life.
          </p>
        </div>
        <div className="skills-container">
          <div className="skill" onMouseEnter={() => activeSkillHandle(0)} onMouseLeave={handleMouseLeave}>
            <p className="skill-number">_01</p>
            <img src={www} alt="" className="skill-img" />
            <h4 className="skill-title">Web-Development</h4>
            <p className="skill-text">
              Crafting responsive and user-friendly websites that leave a lasting impression.
            </p>
          </div>
          <div className="skill" onMouseEnter={() => activeSkillHandle(1)} onMouseLeave={handleMouseLeave}>
            <p className="skill-number">_02</p>
            <img src={light} alt="" className="skill-img" />
            <h4 className="skill-title">Concept Art</h4>
            <p className="skill-text">Transforming ideas into visually stunning and captivating designs.</p>
          </div>
          <div className="skill" onMouseEnter={() => activeSkillHandle(1)} onMouseLeave={handleMouseLeave}>
            <p className="skill-number">_03</p>

            <img src={box} alt="" className="skill-img" />
            <h4 className="skill-title">3D Design</h4>
            <p className="skill-text">Creating realistic and immersive 3D models for various industries.</p>
          </div>
        </div>
      </div>
      <Accordion />
    </section>
  );
};

export default Skills;
