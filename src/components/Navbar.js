import React, { useState } from "react";
import companyCoverPhoto from "../images/mv.png";
import companyLogo from "../images/logo.png";
import emailLogo from "../images/mail.png";
import tel from "../images/tel.png";
import "../scss/main.scss";

function Navbar() {
  const [foldNavbar, setFoldNavbar] = useState(true);
  return (
    <div className="navbarContainer">
      <div className="navbarLarge">
        <div className="bgImage">
          <img src={companyCoverPhoto} alt="company cover" />
        </div>
        <div className="navbarTags">
          <img src={companyLogo} alt="logo" className="logo" />
          <div></div>
          <a href="#aboutus" className="tab">
            ABOUT US
          </a>
          <a href="#field" className="tab">
            FIELD
          </a>
          <a href="#price" className="tab">
            PRICE
          </a>
          <a href="#blog" className="tab">
            BLOG
          </a>
          <div className="emailLogo">
            <img src={emailLogo} alt="email" />
          </div>
          <div className="tel">
            <span>03-6416-1606</span>
          </div>
        </div>
      </div>

      <div className="navbarSmall">
        <div className="logoButton">
          <img src={companyLogo} alt="logo" className="logo" />
          <button
            className="threeLines"
            onClick={() => setFoldNavbar(!foldNavbar)}
          >
            {`///`}
          </button>
        </div>

        {foldNavbar && (
          <div className="mobileBGImage">
            <img src={companyCoverPhoto} alt="company cover" />
          </div>
        )}

        {!foldNavbar && (
          <div className="dropDown">
            <a href="#aboutus" className="aboutUs">
              ABOUT US
            </a>
            <a href="#field" className="field">
              FIELD
            </a>
            <a href="#price" className="price">
              PRICE
            </a>
            <a href="#blog" className="blog">
              BLOG
            </a>
            <div className="emailLogo">
              <img src={emailLogo} alt="email" />
            </div>
            <div className="telLogo">
              <img src={tel} alt="tel" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
