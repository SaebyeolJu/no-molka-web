/** @format */

/*global kakao*/
import React, { useEffect, useState, useCallback } from "react";

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

import MapTypeData from "./MapTypeData";
import CityResult from "./Rent/CityResult";
import MapChoice from "./MapChoice";

import { mapInfoVar } from "../../server/cache";

const MapSearch = () => {
  const [searchText, setSearchText] = useState();
  const [searchType, setSearchType] = useState();

  const [cityName, setCityName] = useState();

  useEffect(() => setSearchType(searchType), [searchType]);

  const chooseType = () => {
    switch (searchType) {
      case "rent":
        return <CityResult cityName={cityName} />;
      case "crime":
        return console.log("crime");
      case "check":
        return console.log("check");
      default:
        return <MapChoice setSearchType={setSearchType} />;
    }
  };

  const handleChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(searchText);
    mapInfoVar(searchText);
    setSearchText("");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
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
      <div className="search-box">
        <div className="search-area">
          <input
            className="search-input"
            type="text"
            placeholder="지역명을 입력해주세요."
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyPress={handleKeypress}
            value={searchText || ""}
          />
          <button className="search-btn" type="submit" onClick={handleSubmit}>
            <AiIcons.AiOutlineSearch />
          </button>
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
