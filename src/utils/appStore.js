import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: { //reducer for app that contains multiple small reducers
        cart: cartReducer,  //each slice will have diff reducer
    },
}
); //Redux store for application that takes slices as parameter

export default appStore;