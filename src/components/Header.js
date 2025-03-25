import { LOGO_URL } from "../utils/constants"; //importing named export
import { useState, useContext} from "react";
import {Link} from "react-router-dom"; //link will not refresh the whole page only body will change
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [buttonName, setButtonName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} =useContext(UserContext); //refers to a global object
    //useEffect(()=>{}, []);
//if no dependency useEffect will be called after every render of component
// if there is dependency useEffect will be called only on initial render of component
// 
    //Selector 

    const cart = useSelector((store) => store.cart.items); //this hook gives use access to the store (Subscribing to the store using the selector)
    return (
        <div className="flex justify-between bg-green-100">
            <div className="w-40">
                <img className="logo w-40" src = {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li>Online Status :{onlineStatus ? "Online": " Offline"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart-{cart.length} items</Link></li>
                    <button className="Login" onClick = {
                        () => {
                        if(buttonName === "LogIn"){
                            setButtonName("LogOut"); //When button which is a state variable is changed  whole header component is re rednered
                        }
                        else if(buttonName === "LogOut"){
                            setButtonName("LogIn");
                        }
                        
                        }
                    }>{buttonName}</button>
                     <li className="px-4">{loggedInUser}</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;