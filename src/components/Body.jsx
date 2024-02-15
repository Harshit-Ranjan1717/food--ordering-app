import { useState,useEffect } from "react";
import { restrauntList } from "./constants";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";





const Body=()=>{

    const[allRestaurants,setAllRestaurants]=useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState();

  
      const [latitude, setLatitude] = useState(25.610102);
      const [longitude, setLongitude] = useState(85.108383);
   
    
      useEffect(() => {
        // Check if geolocation is supported
        if ("geolocation" in navigator) {
          // Get current position
          navigator.geolocation.getCurrentPosition(
            function (position) {
              // Access the latitude and longitude
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
              getRestaurants(position.coords.latitude,position.coords.longitude);
            },
            
          );
        } 
      }, []);

    useEffect(()=>{
      getRestaurants(latitude,longitude);
    },[]); 
    // 28.6008686 77.0982081

  
//     async function getRestaurants(latitude,longitude){
//     // async function getRestaurants(){
//       const url=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
//       // console.log("This is  "+url);
//       // console.log(url);
//       const data=await fetch(url) //auto
// // 
//      // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.610102&lng=85.108383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") //patna
//       // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1557428&lng=85.90761239999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") //darbhanga
    
//       const json=await data.json();
//       console.log("Patna"+json);
    
//       setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);  
//       setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); 
//     }

    async function getRestaurants(latitude, longitude) {
      const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
  
      try {
        const response = await fetch(corsAnywhereUrl + apiUrl);
        const data = await response.json();
        setAllRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);  
        setFilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); 
      } catch (error) {
        console.error(error);
      }
    }

    const online=useOnline();

    if(!online){
      return  <h1> 🔴Offline,Please check your internet connection 😢</h1>
    }


   
    if(!allRestaurants) return (<Shimmer></Shimmer> ) 
  

    return allRestaurants.length===0?(<Shimmer></Shimmer>): (
      <>
      
      <div className="flex justify-around">
        <button className="p-2 m-3 bg-purple-400 hover:bg-purple-700 text-white rounded-md" onClick={()=>{
            getRestaurants(latitude,longitude)
        }}>AUTO</button>
        <button className="p-2 m-3 bg-purple-400 hover:bg-purple-700 text-white rounded-md" onClick={()=>{
           getRestaurants(25.610102,85.108383)
        }}>PATNA</button>
        <button className="p-2 m-3 bg-purple-400 hover:bg-purple-700 text-white rounded-md"  onClick={()=>{
            getRestaurants(26.1557428,85.90761239999999)
        }}>DARBHANGA</button>
      </div>
      
      <div className="p-5 bg-pink-50 my-5">
        <input type="text" className="focus:bg-green-100 p-2 m-2" placeholder="Search for Restaurant" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }} />

        <button className="p-2 m-3 bg-purple-400 hover:bg-purple-700 text-white rounded-md" onClick={()=>{
            const data=filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
        }} >Search</button>
      </div>
      <div className="flex flex-wrap bg-pink-50">
        {
          filteredRestaurants.map(restraunt=>{
            return (
            <Link to={"/restaurant/"+restraunt.info.id} key={restraunt.info.id}>
              <RestrauntCard {...restraunt.info} ></RestrauntCard>
            </Link>
            )
          })
        }
  
      </div>
      </>
    )
  }

  export default Body;