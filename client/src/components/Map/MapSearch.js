/*global kakao*/
import React, { useEffect, useState, useCallback } from "react";

import * as RiIcons from "react-icons/ri";

import MapTypeData from "./MapTypeData";
import CityResult from "./Rent/CityResult";
import MapChoice from "./MapChoice";

const MapSearch = () => {
  const [searchType, setSearchType] = useState();

  const chooseType = () => {
    switch (searchType) {
      case "rent":
        return <CityResult />;
      case "crime":
        return console.log("crime");
      case "check":
        return console.log("check");
      default:
        return <MapChoice setSearchType={setSearchType} />;
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
        {/* <MapTypeData /> */}
        {!searchType && <MapChoice setSearchType={setSearchType} />}
        {searchType && chooseType()}
      </div>
    </div>
  );
};

export default MapSearch;
