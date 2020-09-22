import React, { useEffect } from "react";
import bookmark from "../images/sozai01.png";
import "../scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="aboutUsContainer">
      <img src={bookmark} alt="bookmark" data-aos="fade-up" />
      <div>
        <h2 data-aos="fade-up">T2C.inc FOR EXCEED</h2>
        <p data-aos="fade-up">
          {
            "ティーツーシー税務会計事務所は\n「お客様と共に成長する事務所」を目指しています。"
          }
        </p>
      </div>
      <a href="#aboutus" className="button" data-aos="fade-up">
        ABOUT US
      </a>
    </div>
  );
}

export default AboutUs;
