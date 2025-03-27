//Unit Testing - testing isolated components

import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {  //Grouping the test cases
beforeAll(()=>{
    console.log("Run Before all the test cases");
});

beforeEach(()=>{
    console.log("Run After All Test Cases");
});

afterEach(()=>{
    console.log("After each test case");
})

afterAll(()=>{
    console.log("After all test cases");
})

it("Should load contact us component", ()=>
{
    render(<Contact />)  //Contact component will be rendered onto js dom

    const heading = screen.getByRole("heading"); //the rendered component can be accessed by screen and we can check if heading is present on the page or not

    expect(heading).toBeInTheDocument();//this function will find whether the heading was present in the document or not

});


test("Should load button inside contact component", ()=>
    {
        render(<Contact />)  //Contact component will be rendered onto js dom
    
        //const button = screen.getByRole("button"); //the rendered component can be accessed by screen and we can check if heading is present on the page or not

        const button = screen.getByText("Submit") //checks for submit text
    
        expect(button).toBeInTheDocument();//this function will find whether the heading was present in the document or not
    
    });

test("Should load input name inside contact component", ()=>
        {
            render(<Contact />)  //Contact component will be rendered onto js dom
        
            //const button = screen.getByRole("button"); //the rendered component can be accessed by screen and we can check if heading is present on the page or not
    
            const input = screen.getByPlaceholderText("name") //checks for name placeholder
        
            expect(input).toBeInTheDocument();//this function will find whether this was present in the document or not
        
        });

test("Should load 2 input boxes on the Contact Component", ()=>{
    //render - step-1
    render(<Contact/>);
    //const inputBoxes = screen.getByRole("input"); //gives all input boxes, this will not work

    //Querying - getting react elements/jsx/js objects  - step 2
    const inputBoxes = screen.getAllByRole("textbox"); //gives all input boxes, this will work, getAll can be used when we have multiple elements

    console.log(inputBoxes); //prints react element
    console.log(inputBoxes.length) //input boxes is an array so it will return legth of array which is no of input boxes
    
    //Assert - step -3
    expect(inputBoxes.length).toBe(3);

    expect(inputBoxes.length).not.toBe(2); //inverse 

})

});

