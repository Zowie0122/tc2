import React, { useEffect } from "react";
import bookmark from "../images/sozai01.png";
import textContent from "../text";
import BlogBox from "./BlogBox";
import "../scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="BlogContainer" data-aos="fade-up">
      <img
        src={bookmark}
        alt="bookmark"
        data-aos="fade-up"
        className="GapImage"
      />
      <h2 data-aos="fade-up">BLOG</h2>
      <div className="BlogBoxesContainer">
        {" "}
        {textContent.blogs.map((blog) => {
          return (
            <BlogBox
              tag={blog.tag}
              date={blog.date}
              imgSrc={blog.imgSrc}
              title={blog.title}
              text={blog.text}
            />
          );
        })}
      </div>
      <button className="MobileButton" data-aos="fade-up">
        BLOG
      </button>
    </div>
  );
}

export default Blog;
