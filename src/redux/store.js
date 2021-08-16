import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReader from "./root-reducer";


const middleware = [thunk];

if (process.eventNames.NODE_ENV == "development") {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
