import React from "react";

import MapContent from "../components/Map/MapContent";
import MapSearch from "../components/Map/MapSearch";

import "../css/Map.css";

function Map() {
  return (
    <div className="map">
      <main>
        <MapSearch />
        <MapContent />
      </main>
    </div>
  );
}

export default Map;
