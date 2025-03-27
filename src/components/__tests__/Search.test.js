import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockRestaurantListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA); //MOCK_DATA will be same as data we get from API
        },
    }
    );
}); //this will give a mock fetch function
it("Should render the body component with burger as search input", async () => {
    await act(async () => { 
            render(<BrowserRouter>
                <Body/>
            </BrowserRouter>
            );
        
    }) //when we use fetch methods or state update we need to wrap the render method with act function which returns a promise
    const searchbtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput"); //we have added data-testis attribute to input and the used it here

    fireEvent.change(searchInput, { target: {value: "pizza"}}); //set the value of input to pizza

    fireEvent.click(searchbtn); //click the search button

    //screen shoudl load 4 cards
    const cards = screen.getAllByTestId("resCard"); //get all elemenets with test id as resCard

    expect(cards.length).toBe(1);


}
);


it("Should render the body component with top rated restaurats", async () => {
    await act(async () => { 
            render(<BrowserRouter>
                <Body/>
            </BrowserRouter>
            );
        
    }) //when we use fetch methods or state update we need to wrap the render method with act function which returns a promise
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedRestaurants = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedRestaurants);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(6);

}
);
