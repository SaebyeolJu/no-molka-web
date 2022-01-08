import React from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";

const TypeData = [
  {
    name: "화장실",
    icon: <FaIcon.FaRestroom />,
    color: "#4BA67A",
  },
  {
    name: "탈의실",
    icon: <AiIcon.AiFillSkin />,
    color: "#FFD464",
  },
  {
    name: "숙박시설",
    icon: <FaIcon.FaBed />,
    color: "#3FB2F2",
  },
];

const MapTypeData = () => {
  return (
    <div className="type-box" style={{ justifyContent: "space-evenly" }}>
      {TypeData.map((item, index) => {
        return (
          <div key={index} className="type-icon-box">
            <div className="type-icon" style={{ backgroundColor: item.color }}>
              <span className="type-title">{item.icon}</span>
            </div>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MapTypeData;
