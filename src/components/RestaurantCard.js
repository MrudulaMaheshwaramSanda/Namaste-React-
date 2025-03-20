import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={
            {backgroundColor: "#f0f0f0"}
        }>
            <img className="res-logo" src={RES_LOGO_URL + resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>📍 {resData.info.location} {resData.info.areaName}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{(resData.info.cuisines).join(' , ')}</h4>
            <h4>{resData.info.avgRating + "⭐"} ({resData.info.totalRatingsString})</h4>
            <h4>{resData.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;