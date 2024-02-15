import { useState, useEffect } from "react";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(//);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const online = useOnline();

  useEffect(() => {
    // Fetch current location dynamically
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          getRestaurants(position.coords.latitude, position.coords.longitude);
        },
        function (error) {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  }, []);

  async function getRestaurants(latitude, longitude) {
    try {
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const response = await fetch(url);
      const data = await response.json();
      setAllRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  if (!online) {
    return <h1> 🔴 Offline, Please check your internet connection 😢</h1>;
  }

  if (!allRestaurants.length) {
    return <Shimmer />;
  }

  return (
    <>
      {latitude && longitude && `${latitude}, ${longitude}`}
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Search for Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-3 bg-purple-400 hover:bg-purple-700 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap bg-pink-50">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestrauntCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
