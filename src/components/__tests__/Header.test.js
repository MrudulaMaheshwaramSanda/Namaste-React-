import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import "@testing-library/jest-dom";


it("Should load header component with login button", ()=>{
    render( //as header component uses redux and testing library does not know react redux so provide redux store to the component
        //As header uses link component and it is associated to react router dom provide browser router to header component
    <BrowserRouter>   
        
    <Provider store={appStore}> 
        <Header />
    </Provider>
    </BrowserRouter>   
);

const button = screen.getByRole("button"); //good way

//const loginbutton = screen.getByRole("button", {name: LogIn}); //if we have multiple buttons


//  const button = screen.getByText("LogIn"); //Not a good way

expect(button).toBeInTheDocument();


})

it("Should render header component with cart items - 0", () => {
    render(
    <BrowserRouter>   
        
    <Provider store={appStore}> 
        <Header />
    </Provider>
    </BrowserRouter> );

    const cartItems = screen.getByText("Cart-0 items"); //text has to be matched exactly

    expect(cartItems).toBeInTheDocument();
    
})

it("Should render header component with cart ", () => {
    render(
    <BrowserRouter>   
        
    <Provider store={appStore}> 
        <Header />
    </Provider>
    </BrowserRouter> );

    const cartItems = screen.getByText(/Cart/); //as we are giving regex it should not be exact text
    
    expect(cartItems).toBeInTheDocument();
    
})

it("Should change login to logout on click ", () => {
    render(
    <BrowserRouter>   
    <Provider store={appStore}> 
        <Header />
    </Provider>
    </BrowserRouter> );

    const loginbutton = screen.getByRole("button", {name: "LogIn"}); // we found the login button

    fireEvent.click(loginbutton); //we clicked the button

    const logoutbutton = screen.getByRole("button", {name: "LogOut"}); //we get the logout button
    
    expect(logoutbutton).toBeInTheDocument(); //check logout button presence
    
})



