//Creating custom hook for fetching tha data based on restaurant

import {useEffect, useState} from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) =>{
    //fetch the data

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;

}

export default useRestaurantMenu;