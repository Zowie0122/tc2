import React, { useEffect } from "react";
import bookmark from "../images/sozai01.png";
import textContent from "../text";
import FieldBox from "./FieldBox";
import "../scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Field() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="fieldContainer" data-aos="fade-up">
      <img src={bookmark} alt="bookmark" data-aos="fade-up" />

      <h2 data-aos="fade-up">{textContent.field.fieldTitle}</h2>
      <p data-aos="fade-up">{textContent.field.fieldIntro}</p>
      <div className="fieldBoxesContainer">
        {" "}
        {textContent.field.fieldBoxs.map((fieldBox) => {
          return (
            <FieldBox
              key={fieldBox.title}
              title={fieldBox.title}
              text={fieldBox.text}
            />
          );
        })}
      </div>
      <a href="#" className="mobileButton" data-aos="fade-up">
        BUSINESS FIELD
      </a>
    </div>
  );
}

export default Field;
