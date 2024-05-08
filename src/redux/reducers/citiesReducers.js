const initialState = { 
    cities: [],
    city: [],
    filterCity: []
} //declaro un estado inicial, variables que voy a usar dentro del contexto, luego esto valores son los que se guardan en el store (los nombres no tienen nada que ver con el back)

const citiesReducers = (state = initialState, action) => { //declaro reducer, tiene initialState como estado inicial y va a recibir action (type y payload, action es el dispatch que haces desde actions, se vincula solamente porque redux es maravilloso)
    switch(action.type) { //evaluo tipo de action, dependiendo el tipo, entra en cada caso
        case 'GETCITIES': // el caso es el type que envias desde el dispatch de las acciones 
            return {
                ...state, //desestructuro state para acceder a los valores de initialState y modifico los siguientes valores, payload es el valor de carga, se denomina por convencion asi, podes poner otro nombre 
                cities: action.payload //payload son los valores
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