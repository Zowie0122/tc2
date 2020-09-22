import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Field from "./components/Field";
import Blog from "./components/Blog";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <Field data-aos="fade-up" />
      <Blog />
      <hr />
      <span>トップページ</span>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ width: `100%` }} />}
        containerElement={
          <div
            style={{
              marginTop: "20px",
              height: `600px`,
              width: `100%`,
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Footer data-aos="fade-up" />
    </div>
  );
}

export default App;
