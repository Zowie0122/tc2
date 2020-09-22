import React, { useEffect } from "react";
import "../scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function FieldBox({ title, text }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="fieldBox" data-aos="zoom-in">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" className="button">
        詳しくはこちら →
      </a>
    </div>
  );
}

export default FieldBox;
