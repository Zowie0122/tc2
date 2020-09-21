import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/DINCondensed-Bold.ttf";
import "./fonts/A-OTF-GothicMB101Pro-Bold.otf";
import "./fonts/A-OTF-GothicMB101Pro-Light.otf";
import "./fonts/A-OTF-GothicMB101Pro-Reg.otf";
import "./fonts/A-OTF-GothicMB101Pro-Medium.otf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
