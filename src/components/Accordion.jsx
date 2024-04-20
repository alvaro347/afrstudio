import React, { useState, useRef } from "react";
import "../css/Accordion.scss";
import headerImg from "../img/headerImg.png";
import image1 from "../img/image1.png";

function Accordion() {
  const accordionData = [
    {
      title: "Web-Development",
      description: "Crafting responsive and user-friendly websites that leave a lasting impression.",
      image: headerImg,
    },
    {
      title: "Concept Art",
      description: "Transforming ideas into visually stunning and captivating designs.",
      image: image1,
    },
    {
      title: "3D Design",
      description: "Creating realistic and immersive 3D models for various industries.",
      image: headerImg,
    },
    {
      title: "Art Direction",
      description:
        "Description of skill 2 goes here. Description of skill 2 goes here.Description of skill 2 goes here.Description of skill 2 goes here.",
      image: image1,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0); // Initially set the first item as active

  const toggleAccordion = (index) => {
    // Toggle active state of the clicked skill
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const contentHeight = useRef(activeIndex);

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          className={`accordion-item ${activeIndex === index ? "active no-cursor" : ""}`}
          key={index}
          onClick={() => activeIndex !== index && toggleAccordion(index)}
        >
          <h2 className="accordion-header">{item.title}</h2>

          <div
            ref={contentHeight}
            className="answer-container"
            style={activeIndex === index ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}
          >
            <div className="accordion-item-content">
              <p className="answer-content">{item.description}</p>
            </div>
            {/* <div className="accordion-image-container">
              <img src={item.image} className="accordion-image" alt="" />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
