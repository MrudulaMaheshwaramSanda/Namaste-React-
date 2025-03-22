import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {dataObj2} from "../utils/mockData"
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantManu";


const RestaurantMenu = () =>
{
    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    console.log("Folowoung s res info");

    console.log(resInfo);

//      useEffect(() => {
//           fetchMenu();
//       }, []); //Render only once so emply dependency array

//       const fetchMenu = async () => {
//           const data = await fetch(MENU_API_URL+resId);

          
//  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4075124&lng=78.4974931&restaurantId=240185&catalog_qa=undefined&submitAction=ENTER (restaurant id is the only difference)

//           const json = await data.json();

//           //console.log(json);

//           setResInfo(json);      
//       }

       if(resInfo === null) return <Shimmer />

    //const {name, city, locality, areaName, costForTwoMessage, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;

    let {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   if(itemCards === undefined){
      console.log("if entered");
      itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
   }

    console.log(itemCards);

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]);
     
    return (
        <div className="menu">
            <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(" , ")}</h3>
            <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.city}, {resInfo?.data?.cards[2]?.card?.card?.info?.locality}, {resInfo?.data?.cards[2]?.card?.card?.info?.areaName}</h3>
            <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <ul>
                {
                    (itemCards !== undefined )?
                    (itemCards.map((item) => {
                        return <li key={item?.card?.info?.id}> {item?.card?.info?.name} -  {"Rs"} {(item?.card?.info?.
                            defaultPrice || item?.card?.info?.price
                            ) / 100}</li>
                    })):" "
                }   
            </ul>
        </div>
        
        
    );
}

export default RestaurantMenu; //This will be resused and it will display dynamic content based on the restaurant