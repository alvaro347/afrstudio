import React, { useState } from "react";
// import image1 from "../img/image1.png";
import "../css/Skills.scss";

import headerImg from "../img/headerImg.png";
import conceptIcon from '../img/skills/conceptIcon2.png';
import modellingIcon from '../img/skills/3dIcon2.png';
import programmingIcon from '../img/skills/programmingIcon2.png';

const accordionData = [
  {
    title: "Web-Development",
    description:
      "Crafting responsive and user-friendly websites that leave a lasting impression.Crafting responsive and user-friendly websites that leave a lasting impression.",
    image: headerImg,
  },
  {
    title: "Art Direction",
    description: " goes here. Description of skill 2 goes here.Description of skill 2 goes here.",
    // image: image1,
  },
  {
    title: "Concept Art",
    description: "Transforming ideas into visually stunning and captivating designs.",
    // image: headerImg,
  },
  {
    title: "3D Design",
    description: "Creating realistic and immersive 3D models for various industries.",
    // image: image1,
  },
];

const Skills = () => {
  // Sets which skill is chosen, the first one is pre-selected.
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id="skills" >
      <div className="dotted-background section-container" >
        <div className="section-title-container">
          <p className="text-highlighted">_Professional Services</p>
          <h2 className="section-title">Services <span className="text-highlighted">*</span> Areas</h2>
        </div>
        <div className="skills-description">
          <h3 className="skills-description-title text-primary">
            Unlocking Creativity Through Web Development and Design
          </h3>
          <p className="text-secondary">
            Welcome to my personal portfolio! I specialize in web development, concept art, and 3D modelling.
            With a passion for creativity and innovation, I strive to bring unique and engaging experiences to
            life.
          </p>
        </div>
        <div className="skills-container">
          <a href="https://github.com/alvaro347">
            <div className="skill">
              <p className="skill-number">#01</p>
              <img src={programmingIcon} alt="" className="skill-img" />
              <h4 className="skill-title">Software Development</h4>
              <p className="skill-text">
                Crafting responsive and user-friendly websites that leave a lasting impression.
              </p>
            </div>
          </a>
          <a href="https://www.artstation.com/alvaro347">
            <div className="skill">
              <p className="skill-number">#02</p>
              <img src={conceptIcon} alt="" className="skill-img" />
              <h4 className="skill-title">Concept Design</h4>
              <p className="skill-text">Transforming ideas into visually stunning and captivating designs. Specialized in web design and game concept art</p>
            </div>
          </a>
          <a href="https://www.artstation.com/alvaro347">
            <div className="skill">
              <p className="skill-number">#03</p>
              <img src={modellingIcon} alt="" className="skill-img" />
              <h4 className="skill-title">3D Design</h4>
              <p className="skill-text">Creating realistic and immersive 3D models for various industries. Props, products and sceneries.</p>
            </div>
          </a>
        </div>
      </div>
      {/* <div id="accordion">
        <div id="accordion-menu">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              item={item}
              activeImg={item.image}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
        <div className="accordion-image-container">
          <img src={accordionData[activeIndex].image} className="accordion-image" alt="" />
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
