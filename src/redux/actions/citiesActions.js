import axios from "axios";

const citiesActions = {
    getCities: ()=>{
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-ricciardi-back.herokuapp.com/api/cities")
            dispatch({type:"GETCITIES", payload:res.data.response.cities})
        }
    },
    getOneCity: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-ricciardi-back.herokuapp.com/api/cities/${id}`)
            dispatch({type:"GETONECITY", payload:res.data.response.city})
        }
    },
    filterCities: (inputValue) => {
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_CITIES', payload:inputValue})
        }
    },
}
export default citiesActions