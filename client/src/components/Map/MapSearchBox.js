import React, { useEffect, useState, useCallback } from "react";
import * as AiIcons from "react-icons/ai";
import { mapInfoVar } from "../../server/cache";

export const MapSearchBox = () => {
  const [searchText, setSearchText] = useState();
  const [searchType, setSearchType] = useState();

  const [cityName, setCityName] = useState();

  useEffect(() => setSearchType(searchType), [searchType]);
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

  const handleChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
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
  );
};

export default MapSearchBox;
