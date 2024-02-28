import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  // const params=useParams();
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id); //custom Hooks


  

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id
  //   );
  //   const json = await data.json();
  //   //(json);
  //   setRestaurant(json.data);
  // }

  // //(restaurant?.cards[0]?.card?.card?.info);

  // if(!restaurant){
  //   return <Shimmer></Shimmer>
  // }

  // const dispatch=useDispatch();

  // const handleAddItems=()=>{
  //   dispatch(addItem("Grapes"))
  // }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer></Shimmer>
  ) : (
    <div>
      <div className="flex justify-between m-5">
        <div>
          <h1 className="text-2xl font-bold">
            {restaurant?.cards[2]?.card?.card?.info?.name}
          </h1>

          <h3>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating} Stars</h3>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div>
          <img
            src={
              IMG_CDN_URL +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
            className="w-36 rounded-md shadow-md"
          />
        </div>
      </div>

      <div>
        {/* {//(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info.name)} */}

        <h1 className="text-3xl  mt-0 ml-[700px] mb-8">Menu</h1>
        <>
          <ul className="flex flex-col bg-purple-100">
            {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (item) => (
                <li
                  className="p-3 flex bg-purple-300 m-5 shadow-lg rounded-lg h-[200px]"
                  key={item?.card?.info?.id}
                >
                  <div className="w-[70%]">
                    <h1 className="text-3xl">{item.card?.info.name}</h1>
                    <br /> Rs.{item?.card?.info?.price / 100}
                    <br />
                    {item?.card?.info?.description}
                    <br />
                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </div>
                  <div className="ml-[100px] px-3 w-[30%]">
                    <img
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      className=" overflow-hidden w-32 h-32 rounded-md shadow-md bg-contain"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => addFoodItem(item?.card?.info)}
                      className="bg-purple-500 rounded-md w-24 h-8 shadow-xl"
                    >
                      Add
                    </button>
                  </div>
                </li>
              )
            )}
          </ul>
        </>
      </div>
    </div>
  );
};

// //(restaurant?.cards[0]?.card?.card?.info?.name);
// //(restaurant?.cards[0]?.card?.card?.info?.areaName);
// //(restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId);

//menu:
// //(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info.name)

export default RestrauntMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5804441&lng=85.0841891&restaurantId=89715&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=89715;  //both works

// json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
