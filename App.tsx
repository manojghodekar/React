import React from "react";
import ReactDOM from "react-dom/client";
// Core React Syntax
const element = React.createElement("h1", {"id":"heading"}, "Hello, Welcome to react")
const root = ReactDOM.createRoot(document.getElementById("root"))

//JSX Syntax
//JSX => React.createElement (Babel)=> javsScript Object => HtmL (render)
const jsxHeading = (<h1 className="heading">
    Hello React</h1>)
root.render(jsxHeading)