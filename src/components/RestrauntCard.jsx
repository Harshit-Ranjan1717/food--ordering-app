import { IMG_CDN_URL } from "./constants"

export const RestrauntCard=({name,cuisines,cloudinaryImageId,avgRating,costForTwo,sla})=>{
 
    return(
      <div className="  ml-10 mt-5 mb-7 w-[250px] h-[400px]  shadow-xl bg-purple-300 rounded-xl overflow-hidden">
        <div>
          <div className="h-[200px] overflow-hidden bg-cover">
           <img src={IMG_CDN_URL+ cloudinaryImageId} alt="" className="w-[280px] h-[180px]"/>
          </div>
          <div>
            <h2 className="font-bold text-xl m-2 ">{name}</h2>
            <div className="flex flex-wrap justify-between">
            <h4 className="m-2">{avgRating} ⭐ </h4>
            <h4 className="m-2">{costForTwo}</h4>
            <h4 className="m-2">{sla.lastMileTravelString}</h4>
            </div>
            <h3 className="m-2  text-purple-700 text-lg">{cuisines.join(" , ")}</h3>
          </div>
        </div>
       
      </div>
    )
  }