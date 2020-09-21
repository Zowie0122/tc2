import React from "react";
import logo from "../images/logo.png";
import textContent from "../text";
import "../scss/main.scss";

function Footer() {
  return (
    <div className="Footer">
      <p className="Privacy">プライバシーポリシー</p>
      <button className="BackTop">↑</button>
      <img src={logo} alt="company logo" />
      <p className="Address">{textContent.footer.address}</p>
      <p className="CopyRight">{textContent.footer.copyRight}</p>
    </div>
  );
}

export default Footer;
