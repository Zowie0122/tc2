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
    <div className="blogContainer" data-aos="fade-up">
      <img
        src={bookmark}
        alt="bookmark"
        data-aos="fade-up"
        className="gapImage"
      />
      <h2 data-aos="fade-up">BLOG</h2>
      <div className="blogBoxesContainer">
        {" "}
        {textContent.blogs.map((blog) => {
          return (
            <BlogBox
              key={blog.title}
              tag={blog.tag}
              date={blog.date}
              imgSrc={blog.imgSrc}
              title={blog.title}
              text={blog.text}
            />
          );
        })}
      </div>
      <a href="#blog" className="mobileButton" data-aos="fade-up">
        BLOG
      </a>
    </div>
  );
}

export default Blog;
