import React, { useEffect } from "react";
import styles from "./index.module.css"
// import cities from "../../constants/cities";
const CitySelector = ({ cities, selectedCity, setSelectedCity }) => {
  //   const [citites, setCities] = useState(cities);
  //   const [selectedCity, setSelectedCity] = useState();
  
  const handleChange = (e) => {
    console.log(selectedCity);
    let obj=JSON.parse(e.target.value);
    console.log(obj.name);
    setSelectedCity({name:obj.name,plate:obj.plate});
  };
  return (
    <>
      <select className={styles.minimal} defaultValue={selectedCity} onChange={handleChange}>
        {cities.map((city) => (
          <option key={city.plate} value={JSON.stringify(city)}>
            {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
};

export default CitySelector;
