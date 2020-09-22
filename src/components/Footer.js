import React from "react";
import logo from "../images/logo.png";
import textContent from "../text";
import "../scss/main.scss";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className="Footer">
      <p className="Privacy">プライバシーポリシー</p>
      <button className="BackTop" onClick={() => scrollToTop()}>
        ↑
      </button>
      <img src={logo} alt="company logo" />
      <p className="Address">{textContent.footer.address}</p>
      <p className="CopyRight">{textContent.footer.copyRight}</p>
    </div>
  );
}

export default Footer;
