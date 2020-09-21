import React, { useEffect } from "react";
import logo from "../images/logo.png";
import textContent from "../text";
import "../scss/main.scss";

function Footer() {
  return (
    <div className="Footer">
      <p className="Privacy">プライバシーポリシー</p>
      <img src={logo} />
      <p className="Address">{textContent.footer.address}</p>
      <p className="CopyRight">{textContent.footer.copyRight}</p>
    </div>
  );
}

export default Footer;
