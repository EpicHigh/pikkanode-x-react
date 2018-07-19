import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
registerServiceWorker();