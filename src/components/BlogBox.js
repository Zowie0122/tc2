import React, { useEffect } from "react";
import "../scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function BlogBox({ tag, date, imgSrc, title, text }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="BlogBox" data-aos="zoom-in">
      <div className="blogTagDate">
        <div>{tag}</div>
        <p>{date}</p>
      </div>
      <img src={require(`../images/${imgSrc}.png`)} className="BlogImage" />
      <h3>{title}</h3>
      <p>{text}</p>
      <button>MORE</button>
    </div>
  );
}

export default BlogBox;
