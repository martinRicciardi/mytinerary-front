const initialState = { 
    cities: [],
    city: [],
    filterCity: []
}

const citiesReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'GETCITIES':
            return {
                ...state,
                cities: action.payload
            }
        case "FILTER_CITIES":
                let filter = state.cities.filter(city => city.cityname.toLowerCase().startsWith(action.payload.toLocaleLowerCase().trim()));
                return{
                    ...state,
                    filterCity: filter
                }
        case 'GETONECITY':
            return{
                ...state,
                city: action.payload
            }
        default:
            return state
    }
}
export default citiesReducers