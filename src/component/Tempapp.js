import React, { useEffect, useState } from "react";
import "./css/style.css";
export const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f8a19e1460389d93b4c7c684cb05415a`;
      const res = await fetch(url);
      const resJson = await res.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="container">Not data found</p>
        ) : (
          <div className="container">
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"> {search}</i>
              </h2>
              <h1 className="temp">{city.temp}℃</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}℃ | Max:{city.temp_max}℃
              </h3>
            </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
          </div>
        )}
      </div>
    </>
  );
};
