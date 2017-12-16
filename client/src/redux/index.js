import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import jobs from "./Job";

const rootReducer = combineReducers({
  jobs
})

export default createStore(rootReducer, applyMiddleware(thunk));
