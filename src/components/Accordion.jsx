import React, { useState, useRef } from "react";
import "../css/Accordion.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

function Accordion({ item, isOpen, onClick }) {
  const contentHeight = useRef(0);

  return (
    <div
      className={`accordion-item ${isOpen ? "active no-cursor" : ""}`}
      onClick={onClick}
      // onClick={() => activeIndex !== index && toggleAccordion(index)}
    >
      <div>

      <div className="accordion-main">
        <h3 className="accordion-header">{item.title}</h3>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </div>
      <div
        ref={contentHeight}
        className="accordion-description-container"
        style={isOpen ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}
      >
        <div className="accordion-item-content">
          <p className="accordion-description">{item.description}</p>
        </div>
      </div>
      </div>
      {/* <div className="accordion-image-container">
        <img src={item.image} className={`accordion-image ${isOpen ? "active" : "hidden"}`} alt="" />
      </div> */}
    </div>
  );
}

export default Accordion;
