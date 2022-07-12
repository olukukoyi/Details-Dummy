import React from "react";
import { useNavigate } from "react-router-dom";

export const PlanetItem = ({ name, id }) => {
  const navigate = useNavigate();
  console.log(location);
  return (
    <div
      onClick={() => {
        navigate("/details/" + id);
      }}
    >
      {name}
    </div>
  );
};
