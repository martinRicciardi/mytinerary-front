import { combineReducers } from "redux";
import citiesReducers from "./citiesReducers"
import itinerariesReducers from "./itinerariesReducers";
import userReducers from "./userReducers"

const mainReducer = combineReducers({
    citiesReducers,
    itinerariesReducers,
    userReducers
})

export default mainReducer