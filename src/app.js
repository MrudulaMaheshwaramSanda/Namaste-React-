import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"

// const heading = React.createElement("h1", {
//     id: "heading",
// }, "Namaste React"); //React Element, it will return an object, when we render this element on to dom then it becomes a html element

// const jsxHeading = <h1 className="heading">Namaste React from JSX</h1> //h1 in jsx format that will converted into react element in babel

// //react component
// //React Functional Component
// const HeadingComponent = () => {
//     return <h1> Namaste React </h1>;
// }

// // render one componeny into another - component composition

// const number = 1000; //js variable

// //ELement inside element
// const elem = <span>React Element</span>

// const title =(
//     <h2>
//         {elem} 
//         Namaste Element 
//     </h2>
    
// )

// const HeadingComponent1  = () => (
//     <div id="container">
//         {/* //Below 2 are same */}
//         <HeadingComponent />
//         <HeadingComponent></HeadingComponent>
//         {HeadingComponent()}
//         {/* //element inside component */}
//         {title} 
//         <h2>{
//             number+100  //This is a js code - 1100 will be displayed as h2 tag

//         }
//         </h2>     
//         <h1 className="heading"> Namaste React Functional component</h1>
//     </div>

// );


// const root = ReactDOM.createRoot(document.getElementById("root")); //html element with id as root will become the root element

// root.render(<HeadingComponent1 />); //rendering react element on the dom, jsd heading is a react element




//styling using js format
// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }
const AppLayout = () => {
    return (
        <div className="app">
            {Header()}
            {Body()}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)



