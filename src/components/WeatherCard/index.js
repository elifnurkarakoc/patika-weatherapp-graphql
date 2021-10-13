import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CITY_BY_NAME } from "../../queries/queries";
import styles from "./index.module.css";

import { ChoiceIcon } from "../../utils";
const WeatherCard = ({ selectedCity }) => {
  //   console.log(selectedCity);
  const { loading, error, data } = useQuery(GET_CITY_BY_NAME, {
    variables: { name: selectedCity.name },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ data });
  //const weather = data.getCityByName;
  const { id, name, country, coord, weather } = data.getCityByName;
  // console.log(id, name, country, coord, weather);
  const celsius = (weather.temperature.actual - 273).toFixed(2); //kelvin to celsius
  return (
    <div className={styles.weather_card}>
      <div className={styles.icon}>
        {/* <SunnyIcon />  */}
        {ChoiceIcon(weather.summary.icon)}
      </div>
      <div className={styles.weather_info}>
        <p className={styles.celsius}>{celsius} °C</p>
        <p className={styles.text}>
          {name.replace(" Province", "")}, {country}
        </p>
        <p className={styles.description}>
          {weather.summary.description.charAt(0).toUpperCase() +
            weather.summary.description.slice(1)}
        </p>
        <hr />
        <p>Humidity {weather.clouds.humidity}%</p>
        <p>Wind {weather.wind.speed}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
