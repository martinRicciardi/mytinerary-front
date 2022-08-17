import axios from "axios";

const itinerariesActions = {
    getItineraries: ()=>{
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-ricciardi-back.herokuapp.com/api/itineraries")
            dispatch({type:"GETITINERARIES", payload: res.data.response.itineraries})
        }
    },
    getOneItinerary: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-ricciardi-back.herokuapp.com/api/itineraries/${id}`)
            dispatch({type:"GETONEITINERARY", payload: res.data.response.itinerary})
        }
    },
    findTinFromCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-ricciardi-back.herokuapp.com/api/itineraries/cities/${id}`)
            dispatch({ type: 'FIND_ITINERARY_FROM_CITY', payload: res.data.response.itineraries})
        }
    },
    like: (id) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const res = await axios.put(`https://mytinerary-ricciardi-back.herokuapp.com/api/itineraries/like/${id}`, {}, {headers: {Authorization: "Bearer "+token}})
                return res
            }catch (err) {
                console.log(err)
            }
        }
    }
}
export default itinerariesActions