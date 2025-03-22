import { LOGO_URL } from "../utils/constants"; //importing named export
import { useState } from "react";
import {Link} from "react-router-dom"; //link will not refresh the whole page only body will change
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [buttonName, setButtonName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    //useEffect(()=>{}, []);
//if no dependency useEffect will be called after every render of component
// if there is dependency useEffect will be called only on initial render of component
// 
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>Online Status :{onlineStatus ? "Online": " Offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
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
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;