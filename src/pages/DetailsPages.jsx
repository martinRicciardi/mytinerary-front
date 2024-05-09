import React from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios"
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom" 
import "../styles/detailPages.css"
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions"
import Itineraries from "../components/itineraries"
import Button from '@mui/material/Button';


function DetailsPages(){    
    const { id } = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
    }, [dispatch, id])

    const card = useSelector(store => store.citiesReducers.city)
    
    return(
        <div className="body-details">
            <div className="detail-card-container">
                <div className="detail-card">
                    <div className="detail-image">
                    <img className="detail-image-card" src= {card.image} alt="cities" />
                    </div>
                    <div>
                        <h1>{card.cityname}</h1>
                        <h2>{card.country}</h2>
                        <p>{card.description}</p>
                        <LinkRouter to={"/cities"}>
                        <Button className='button-style' variant="contained" size="large">Go back!</Button>
                        </LinkRouter>
                    </div>
                </div>
            </div>
        <Itineraries cityid={id}/>
        </div>
    );
}
export default DetailsPages