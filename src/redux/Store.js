import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [reduxThunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
