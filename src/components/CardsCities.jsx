import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom" 
import citiesActions from "../redux/actions/citiesActions";
import "../styles/cardsCities.css"
import { useSelector } from "react-redux";

export default function CardsCities(props) {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(citiesActions.filterCities(props.input))
    },[props.input])

    const filterRedux = useSelector(store => store.citiesReducers.filterCity)

    let data = props.input ? filterRedux : props.cities

    return(
        <div className="card-container">
        {data.length > 0 ?
        data.map(city => 
                <div className="card" key={city._id}>
                    <div className="image">
                    <img className="image-card" src= {city.image} alt="cities" />
                    </div>
                    <div>
                        <h2>{city.cityname}</h2>
                        <h3>{city.country}</h3>
                        <LinkRouter to={`/cities/${city._id}`}>
                            See more
                        </LinkRouter>
                    </div>
                </div>
        ) : <h1 className="error">Not found!</h1>}
        </div>
    )
}