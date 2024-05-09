import React, { useEffect } from "react";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import CardItinerary from './CardItinerary'
import '../styles/detailPages.css'


function Itineraries({cityid}){

    const {id}= useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(itinerariesActions.findTinFromCity(id))
    })
    
    const itinerary = useSelector(store=>store.itinerariesReducers.itinerary)

    return(
            <div className="itineraries-container">
                {itinerary?.length > 0 ?
                    itinerary.map(itinerary=>(
                    <CardItinerary key={itinerary._id} cityid={cityid} itinerary={itinerary}/>
                )) : <h1 className="error-tineraries">There are no itineraries here! come back later.</h1>}
            </div>
    )
}
export default Itineraries