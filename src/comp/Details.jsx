import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const Details = () => {
  const [currItem, setCurrItem] = useState({});
  const location = useLocation();
  const id = location.pathname.slice(-2);

  useEffect(() => {
    const fetchSingleUser = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      const data = await res.json();
      setCurrItem(data);
    };
    fetchSingleUser();
  }, []);

  return (
    <div>
      <div>Details</div>
      <div>Name: {currItem.name} </div>
      <div>User Name: {currItem.username}</div>
      <div>Email: {currItem.email}</div>
    </div>
  );
};
