import React, { useState } from "react";
import companyCoverPhoto from "../images/mv.png";
import companyLogo from "../images/logo.png";
import emailLogo from "../images/mail.png";
import tel from "../images/tel.png";
import "../scss/main.scss";

function Navbar() {
  const [foldNavbar, setFoldNavbar] = useState(true);
  return (
    <div className="NavbarContainer">
      <div className="NavbarLarge">
        <div className="BGImage">
          <img src={companyCoverPhoto} alt="company cover" />
        </div>
        <div className="NavbarTags">
          <img src={companyLogo} alt="logo" className="Logo" />
          <div></div>
          <div className="Tab">ABOUT US</div>
          <div className="Tab">FIELD</div>
          <div className="Tab">PRICE</div>
          <div className="Tab">BLOG</div>
          <div className="emailLogo">
            <img src={emailLogo} alt="email" />
          </div>
          <div className="Tel">
            <span>03-6416-1606</span>
          </div>
        </div>
      </div>

      <div className="NavbarSmall">
        <div className="LogoButton">
          <img src={companyLogo} alt="logo" className="Logo" />
          <button
            className="ThreeLines"
            onClick={() => {
              setFoldNavbar(!foldNavbar);
            }}
          >
            ///
          </button>
        </div>

        {foldNavbar && (
          <div className="MobileBGImage">
            <img src={companyCoverPhoto} alt="company cover" />
          </div>
        )}

        {!foldNavbar && (
          <div className="DropDown">
            <div className="AboutUs">ABOUT US</div>
            <div className="Field">FIELD</div>
            <div className="Price">PRICE</div>
            <div className="Blog">BLOG</div>
            <div className="EmailLogo">
              <img src={emailLogo} alt="email" />
            </div>
            <div className="TelLogo">
              <img src={tel} alt="tel" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
