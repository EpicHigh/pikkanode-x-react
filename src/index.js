import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./app/App";
import { Provider } from "react-redux";
import configureStore from "./store/configure";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
