import { combineReducers } from "redux";
import citiesReducers from "./citiesReducers"
import itinerariesReducers from "./itinerariesReducers";
import userReducers from "./userReducers"

//este compopnente es nuestro store
//cuando lo declaras en el index, ahi ya se crean los reducers que tenes aca adentro

const mainReducer = combineReducers({
    citiesReducers,
    itinerariesReducers,
    userReducers
})

export default mainReducer