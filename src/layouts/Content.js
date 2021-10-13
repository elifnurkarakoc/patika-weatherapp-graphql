import React from "react";
import styles from "../App.module.css";
import { CitySelector, WeatherCard } from "../components";
import { useState } from "react";

import allCities from "../constants/cities";

const Content = () => {
  
  //cities are kept constant.
  const [cities, setCities] = useState(allCities);
  const [selectedCity, setSelectedCity] = useState(allCities[0]);

  //There is a drop down menu in the citySelector component.
  //WeatherCard component contains weather information.
  return (
    <div className={styles.content}>
      <CitySelector
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <WeatherCard selectedCity={selectedCity} />
    </div>
  );
};

export default Content;
