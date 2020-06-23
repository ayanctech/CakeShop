import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import cakeReducer from "../cake/CakeReducer";
import iceCreamReducer from "../icecream/IceCreamReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from "../user/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({cakes: cakeReducer, iceCreams: iceCreamReducer, users: userReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store