/*global kakao*/

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_MAP_INFO,
  FETCH_CITIES_QUERY,
} from "../../server/query/RentQueries";
import keyIcon from "../../img/rent_marker_1.png";

const trimPos = (pos) => {
  const tempPos = pos.replaceAll("'", "");
  return pos.slice(1, tempPos.length - 1).split(", ");
};

const { kakao } = window;

const MapContent = () => {
  const {
    loading: cacheLoading,
    error: cacheError,
    data: cacheData,
  } = useQuery(GET_MAP_INFO);

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cacheData.mapInfoVar },
  });

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);

    var bounds = new kakao.maps.LatLngBounds();
    var Pos = [];

    var imageSrc = keyIcon, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(29, 35), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    function displayMarker(city, placePos, place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(placePos[0], placePos[1]),
        title: place.name,
        image: markerImage,
        clickable: true,
      });

      var iwContent = `<div style="padding:5px;" class = "map-window"><div class="title">${place.name}</div><div class = "desc"><ul>${place.address}</ul><ul>${place.phone}</ul></div></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(placePos[0], placePos[1]), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성하고 지도에 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      infowindow.close();

      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });
    }

    function setBounds() {
      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
      map.setBounds(bounds);
    }

    if (loading) {
      console.log("this is loading");
    }
    if (cacheData.mapInfoVar && data) {
      data.cities.forEach((city) => {
        city.places.forEach((place) => {
          Pos = trimPos(place.pos[0]);
          displayMarker(city, Pos, place);
          bounds.extend(new kakao.maps.LatLng(Pos[0], Pos[1]));
        });
      });

      setBounds();
    }
  });

  return (
    <div className="map-box">
      <div id="map" style={{ flex: "1", height: "100%" }}></div>
    </div>
  );
};

export default MapContent;
