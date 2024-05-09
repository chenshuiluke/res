import StandaloneResource from "./standalone_resource";
import React from "react";
import ReactDOM from "react-dom";
const e = React.createElement;

const component = <StandaloneResource contentType={"blog"} />;
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(component));
