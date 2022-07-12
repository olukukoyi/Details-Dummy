import React, { useEffect, useState } from "react";
import { PlanetItem } from "./PlanetItem";

export const PlanetList = () => {
  const [plants, setPlanets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setPlanets(data);
    };
    fetchData();
  }, []);
  console.log(plants);
  return (
    <div>
      <h1>Planets</h1>
      {plants.map((item) => (
        <PlanetItem name={item.name} id={item.id} />
      ))}
    </div>
  );
};
