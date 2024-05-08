import axios from "axios";

//un objeto con meodos de objetos, los nombres de los metodos no tienen nada que ver con los controladores
const citiesActions = {
    getCities: ()=>{
        return async (dispatch, getState) => { //retorna una funcion que recibe dos parametros, el dispatch desde el front, que es un hook, lo recibe como parametro cuando ejecutas el metodo desde el front (no se puede importar el hook desde aca porquer los hooks estan diseñados para ser llamados dentro de componentes funcionales) por mas que nunca llames al getState, dispatch no puede estar solo por cuestion de sintaxis
            const res = await axios.get("https://mytinerary-back-plrr.onrender.com/api/cities")// hacemos la peticion al back (entra a la ruta, segun el metodo entra al controlador y todo esos pasos)
            dispatch({type:"GETCITIES", payload:res.data.response.cities}) //despachas los datos con un tipo (lo que llamas en reducers) y le pasas el payload (que entran con el parametro action en el reducer), los datos despachados van a mainreducers, busca los reducers que tengan el tipo, y hace lo que tiene que hacer el reducer. res.data es de axios, despues response(response como la pse desde el controlador).cities(nombre de la variable que pase dese el controlador)
        }
    },
    getOneCity: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-back-plrr.onrender.com/api/cities/${id}`)
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