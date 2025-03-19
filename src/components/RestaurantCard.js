const RestaurantCard = (props) => {
    const {resData} = props;

    const {text} = resData?.title; //Can also be written in thsi way 
    return (
        <div className="res-card" style={
            {backgroundColor: "#f0f0f0"}
        }>
            <img className="res-logo" src={resData.image.items[0].url}></img>
            <h3>{text}</h3>
            <h4>{resData?.rating?.text + "⭐"} ({resData?.rating?.accessibilityText})</h4>
            <h4>{resData?.meta[0]?.text}</h4>
            <h4>{resData?.meta[1]?.text}</h4>
            <p>📍 Location: {resData?.mapMarker?.latitude}, {resData?.mapMarker?.longitude}</p>
            <p>{resData?.signposts?.[0]?.text || "No special offers"}</p>
        </div>
    )
}

export default RestaurantCard;