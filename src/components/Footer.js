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
    <div className="footer">
      <p className="privacy">プライバシーポリシー</p>
      <button className="backTop" onClick={() => scrollToTop()}>
        ↑
      </button>
      <img src={logo} alt="company logo" />
      <p className="address">{textContent.footer.address}</p>
      <p className="copyRight">{textContent.footer.copyRight}</p>
    </div>
  );
}

export default Footer;
