import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},// nested element
        [React.createElement("h1", {}, "Hello React new"), React.createElement("h2", {}, "Welcome")]
))
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)