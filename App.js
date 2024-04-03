import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namste React");

const jsxHeading = <h1 id="jsxHeading" >Namste React</h1>;

console.log(heading, "react element using core React.js");
console.log(jsxHeading, "react element using JSX");

const root = createRoot(document.getElementById("root"));

root.render(heading);