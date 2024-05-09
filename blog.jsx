import StandaloneResource from "./standalone_resource";
import ReactDOM from "react-dom";

const component = <StandaloneResource contentType={"blog"} />;
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(component));
