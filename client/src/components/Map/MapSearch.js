/*global kakao*/
import React, { useState } from "react";

import * as RiIcons from "react-icons/ri";

import CityResult from "./Rent/CityResult";
import MapChoice from "./MapChoice";

const MapSearch = () => {
  const [searchMapType, setSearchMapType] = useState();

  const chooseMapType = () => {
    switch (searchMapType) {
      case "rent":
        return <CityResult />;
      case "crime":
        return console.log("crime");
      case "check":
        return console.log("check");
      default:
        return <MapChoice setSearchType={setSearchMapType} />;
    }
  };

  return (
    <div className="search-bar">
      <div className="logo-box">
        <p className="service-name">여기없지?</p>
        <div className="around-box">
          <p>내 주변 위치 검색</p>
          <RiIcons.RiFocus3Line />
        </div>
      </div>

      <div className="search-result-box">
        {!searchMapType && <MapChoice setSearchType={setSearchMapType} />}
        {searchMapType && chooseMapType()}
      </div>
    </div>
  );
};

export default MapSearch;
