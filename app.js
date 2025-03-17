import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id: "Heading"
}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child"}, 
            [ React.createElement("h1", {}, "Hi Hello Bye bye"), 
                React.createElement("h2", {}, "Hello") ] 
        ),
        React.createElement(
            "div", 
            {id: "child2"}, 
            [ React.createElement("h1", {}, "Hi"), 
                React.createElement("h2", {}, "Hello") ] 
        )
    ]
)

root.render(parent);
