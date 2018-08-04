import { createStore, combineReducers } from "redux";
import pikkaReducer from "../reducers/pikka";
import rootReducer from "../reducers/reducers";

export default () => {
  return createStore(
    combineReducers({
      pikka: pikkaReducer,
      root: rootReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
