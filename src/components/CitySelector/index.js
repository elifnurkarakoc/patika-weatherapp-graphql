import React from "react";
import styles from "./index.module.css";

const CitySelector = ({ cities, selectedCity, setSelectedCity }) => {
  const handleChange = (e) => {
    let obj = JSON.parse(e.target.value);
    setSelectedCity({ name: obj.name, plate: obj.plate });
  };
  return (
    <select
      className={styles.minimal}
      defaultValue={selectedCity}
      onChange={handleChange}
    >
      {cities.map((city) => (
        <option key={city.plate} value={JSON.stringify(city)}>
          {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
