import React, { useEffect, useState } from "react";
export const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      let actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div>
        <h1>{data.recovered}</h1>
      </div>
      <br />
      <div>
        <h1>{data.lastupdatedtime}</h1>
      </div>
    </>
  );
};
