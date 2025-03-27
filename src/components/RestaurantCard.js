import { useContext } from "react";
import { RES_LOGO_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;

    console.log(resData);
    
    const {loggedInUser} = useContext(UserContext); //access data from anywhere using react context
    return (
        <div className="m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200 rounded-lg text-center" >
            <img className=" rounded-lg m-5 mb-5 items-center w-[200px]" src={RES_LOGO_URL + resData.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-1 text-xl">{resData.info.name}</h3>
                <h4>📍 {resData.info.location} {resData.info.areaName}</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{(resData.info.cuisines).join(' , ')}</h4>
                <h4>{resData.info.avgRating + "⭐"} ({resData.info.totalRatingsString})</h4>
                <h4>{resData.slaString}</h4>
                <h4>User Name: {loggedInUser}</h4>         
        </div>
    )
};

//Higher Order component that iwll take restaurnt card as input and gives enhanced restaurant card
export const withPromotedLabel = (RestraurantCard) => {
    return (props)=> {
        return (
            <div>
                <label className= "absolute rounded-lg p-2 bg-black text-white">{props.resData.info.aggregatedDiscountInfoV3.header} {props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                
                <RestaurantCard {...props} />
            </div>
        );
    }
} 


export default RestaurantCard;