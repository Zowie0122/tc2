import React, { useEffect } from "react";
import "../scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function BlogBox({ tag, date, imgSrc, title, text }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="blogBox" data-aos="zoom-in">
      <div className="blogTagDate">
        <div className="tag">{tag}</div>
        <p className="date">{date}</p>
      </div>
      <img
        src={require(`../images/${imgSrc}.png`)}
        className="blogImage"
        alt="blogImage"
      />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#blog" className="blogButton">
        MORE
      </a>
    </div>
  );
}

export default BlogBox;
