import StandaloneResource from "./standalone_resource.jsx";
import React from "react";
import ReactDOM from "react-dom";
const e = React.createElement;

const App = () => {
  return <StandaloneResource contentType={"ebook"} />;
};
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
