import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import {fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
        })
});

it("Should load restaurant menu component", async ()=>{

    await act(async () => render(
        <BrowserRouter>
     <Provider Store={appStore}>
        <Header />
    <RestaurantMenu/>
    <Cart />
    </Provider>
    </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Pasta (10)");

    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("fooditems");

    expect(foodItems.length).toBe(10);

    const addBtns = screen.getAllByRole("button", {name: "Add"})

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart-1 items")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(11); //10+1

    fireEvent.click(screen.getAllByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("fooditems").length).toBe(10);

    expect(screen.getByText("Your cart is Empty"));



}) 