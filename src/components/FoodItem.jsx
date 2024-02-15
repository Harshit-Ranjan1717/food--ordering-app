import { IMG_CDN_URL } from "./constants"

export const FoodItem=({name,category,imageId,price})=>{
 
    return(
      <div className="  ml-10 mt-5 mb-7 w-[250px] h-[350px]  shadow-xl bg-purple-300 rounded-xl overflow-hidden">
        <div>
          <div className="h-[200px] overflow-hidden bg-cover">
           <img src={IMG_CDN_URL+ imageId} alt="" className="w-[280px] h-[180px]"/>
          </div>
          <div>
            <h2 className="font-bold text-xl m-2 ">{name}</h2>
            <div className="flex flex-wrap justify-between">
            <h4 className="m-2">{category} </h4>
            <h4 className="m-2">Price: {(price)/100}</h4>
            </div>
          </div>
        </div>
       
      </div>
    )
  }