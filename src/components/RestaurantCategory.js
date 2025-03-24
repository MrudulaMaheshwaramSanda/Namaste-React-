import { ItemList } from "./ItemList";
import { useState } from "react";

export const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    // const [showItems,setShowItems] = useState(false); //we do not want RestaurantCategory to have its own state - make it controlled compoment by its parent which is Restaurant Menu

    const handleClick = () => {
        setShowIndex(); //Buildling own Accordian
    };

    return ((data.title && data.itemCards)?(
        <div>
            {/* Accordian header */}
            <div className="bg-gray-100 w-11/12 shadow-lg p-4 my-4 mx-auto ">
            <div className="flex justify-between cursor-pointer font-bold" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            
            {/* Accordian Body */}
            </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div> 
            
        </div>
    ): ""
    )


}
