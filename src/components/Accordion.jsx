import React, { useState, useRef, useEffect } from "react";
import "../css/Accordion.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

function Accordion({ item, isOpen, onClick, activeImg }) {
  const contentHeight = useRef(0);
  const contentHeight2 = useRef(0);
  const [isFull, setIsFull] = useState(window.innerWidth > 1070);

  // const MOBILE_WIDTH = 1070;
  // const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);
  // const prevWidth = useRef(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => {
  //     const currWidth = window.innerWidth;
  //     if (currWidth < MOBILE_WIDTH && prevWidth.current >= MOBILE_WIDTH) {

  //       setIsMobile(true);
  //     } else if (currWidth > MOBILE_WIDTH && prevWidth.current < MOBILE_WIDTH) {

  //       setIsMobile(false);
  //     }
  //     prevWidth.current = currWidth;
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsFull(window.innerWidth > 1070);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [isFull]);

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
          style={isOpen && isFull ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}
        >
          <div className="accordion-item-content">
            <p className="accordion-description">{item.description}</p>
          </div>
        </div>

        <div
          ref={contentHeight2}
          className="accordion-description-container"
          style={isOpen && !isFull ? { height: contentHeight2.current.scrollHeight } : { height: "0px" }}
        >
          <div>
            <div className="accordion-item-content">
              <p className="accordion-description">{item.description}</p>
            </div>
            <div className="accordion-image-container-extra">
              <img
                src={activeImg}
                className={`accordion-image-extra ${isOpen ? "a-img-active" : ""}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
