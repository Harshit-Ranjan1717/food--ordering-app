import { useState, useEffect } from "react";
import { FETCH_MENU } from "../components/constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    // const data = await fetch(corsAnywhereUrl+FETCH_MENU + id);
    const data = await fetch(FETCH_MENU + id);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;

//get data from api and return it
