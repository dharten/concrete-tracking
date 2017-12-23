import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import jobs from "./Job";
import samples from "./Sample";

const rootReducer = combineReducers({
  jobs,
  samples
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
