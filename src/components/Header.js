import { LOGO_URL } from "../utils/constants"; //importing named export
import { useState } from "react";
const Header = () => {

    const [buttonName, setButtonName] = useState("LogIn");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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