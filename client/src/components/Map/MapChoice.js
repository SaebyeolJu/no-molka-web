import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function MapChoice({ setSearchType }) {
  const clickTypeHandler = (type, e) => {
    e.preventDefault();
    setSearchType(type);
  };

  return (
    <>
      <div
        className="map-type-box"
        style={{ borderColor: "#EAD83A" }}
        onClick={(e) => {
          clickTypeHandler("rent", e);
        }}
      >
        <div
          className="type-title-box"
          style={{
            backgroundColor: "#EAD83A",
            color: "white",
          }}
        >
          <p className="type-title">탐지기 대여 장소</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "left",
            marginTop: "15px",
          }}
        >
          <p className="type-disc" style={{ whiteSpace: "pre-wrap" }}>
            무료{"\n"}불법촬영 탐지기{"\n"}대여장소를{"\n"}검색해보세요
          </p>
          <GiIcons.GiHouseKeys />
        </div>
      </div>
      <div
        className="map-type-box"
        style={{ borderColor: "#5FBEF4" }}
        onClick={(e) => {
          clickTypeHandler("check", e);
        }}
      >
        <div
          className="type-title-box"
          style={{
            backgroundColor: "#5FBEF4",
          }}
        >
          <p className="type-title">공중 화장실 점검 정보 </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <FaIcons.FaSearchLocation style={{ paddingTop: "8px" }} />
          <p style={{ paddingTop: "5px" }}>점검된 시설을 검색해보세요</p>
        </div>
      </div>
      <div
        className="map-type-box"
        id="crime"
        style={{ borderColor: "#B11414" }}
        onClick={(e) => {
          clickTypeHandler("crime", e);
        }}
      >
        <div
          className="type-title-box"
          style={{
            backgroundColor: "#B11414",
          }}
        >
          <p className="type-title">불법 촬영 적발 장소 </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "left",
            marginTop: "15px",
          }}
        >
          <AiIcons.AiFillAlert />
          <p className="type-disc" style={{ whiteSpace: "pre-wrap" }}>
            불법 촬영{"\n"}적발 장소를{"\n"}검색해보세요
          </p>
        </div>
      </div>
    </>
  );
}

export default MapChoice;
