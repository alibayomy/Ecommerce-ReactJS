import { combineReducers, createStore } from "redux";
import reducers from './Reducers/CombineReducer'
import { composeWithDevTools } from "redux-devtools-extension";


const changeStore = createStore(reducers, composeWithDevTools())


export default changeStore