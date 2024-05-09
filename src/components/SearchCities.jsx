import React, {useState} from "react";
import CardsCities from "./CardsCities";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";
import "../styles/searchCities.css"

import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";


export default function SearchCities() {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getCities()) //llamas a la accion que queres ejecutar, cuando ejecutas el metodo disopatch, es lo que se envia para que despues lo llamas por paarametros en las actions
    }, [dispatch])

    const citiesRedux = useSelector(store => store.citiesReducers.cities) //entras al store, el nombre de la variable es el que definis en initialState en el reducer (store = mainReducers, lo que declaramos en el index.js)

    return (
    <div className="body-cities">
        <div>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Search cities!" variant="outlined" type={"text"} onKeyUp={(evento) => { setInputValue(evento.target.value) }} />
            </Box>
        </div>
        <div>
            <CardsCities input={inputValue} cities={citiesRedux}/>
            {/* {city.length > 0 ? (<CardsCities cardFilter={citiesRedux} />) : <p className="error">NOT FOUND!</p>} */}
        </div>
    </div>
    );
}