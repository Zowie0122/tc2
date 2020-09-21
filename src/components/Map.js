import React from "react";

import "../scss/main.scss";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import icon from "../images/icon.png";

const Map = withScriptjs(
  withGoogleMap(() => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 35.6618614, lng: 139.6967675 }}
      >
        <Marker
          icon={{
            url: icon,
          }}
          position={{ lat: 35.6618614, lng: 139.6967675 }}
        />
      </GoogleMap>
    );
  })
);

export default Map;
