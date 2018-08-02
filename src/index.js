import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./app/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/reducers";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
