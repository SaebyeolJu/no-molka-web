import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CITIES_QUERY } from "../../../server/query/RentQueries";
import PlaceResult from "./PlaceResult";

const conditionCheck = (condition) => {
  if (condition.includes("C")) {
    return <li>관리자, 일반 시민 대상</li>;
  } else {
    return <li>건물 / 시설물 관리자, 소유자 대상</li>;
  }
};

const CityResult = (props) => {
  const [placeId, setPlaceId] = useState();
  const [openedPlaceId, setOpenedPlaceId] = useState(undefined);
  const cityName = props.cityName;

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cityName },
  });

  const showPlaceInfo = (placeId, e) => {
    e.preventDefault();
    setPlaceId(placeId);
    setOpenedPlaceId(placeId);
  };

  return (
    <div>
      {loading && "loading"}
      {error && "검색을 다시 해주세요."}
      {data &&
        data.cities.map((city) => {
          return (
            <div className="city-box">
              <div className="city-info-box" key={city.id}>
                <li className="city-name">{city.name}</li>
                <li className="city-count">{city.places.length}곳</li>
              </div>
              {city.places.map((place) => {
                return (
                  <div
                    className="place-box"
                    key={place.id}
                    onClick={(e) => {
                      showPlaceInfo(place.id, e);
                    }}
                  >
                    <li className="place-name">{place.name}</li>
                    {openedPlaceId === place.id && (
                      <PlaceResult className="place-indiv" placeId={placeId} />
                    )}
                    {!(openedPlaceId === place.id) && (
                      <div className="place-info-box">
                        <li>{place.address}</li>
                        {conditionCheck(city.condition)}
                        <li>{place.phone}</li>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default CityResult;
