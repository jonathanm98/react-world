import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="countries">
      <h2>Countries</h2>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country.translations.fra.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
