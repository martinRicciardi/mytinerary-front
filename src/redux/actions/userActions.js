import axios from 'axios'

const userActions = {
    signUpUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post("https://mytinerary-ricciardi.herokuapp.com/api/signUp", {userData})
            console.log(res);
            dispatch({type: "MESSAGE", payload:{
                view: true,
                message: res.data.message,
                success: res.data.success
            }})
        }
    },
    signInUser: (logedUser) => {
        try{
        return async (dispatch, getState) => {
            const res = await axios.post("https://mytinerary-ricciardi.herokuapp.com/api/signIn", {logedUser})
            // dispatch({type: "MESSAGE", payload: console.log(res)})
            if(res.data.success) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({
                    type: "USER",
                    payload: res.data.response.userData,
                    message: "Welcome again"
                })
            }else{
                dispatch({
                    type: "MESSAGE",
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
            return res
        }}catch (error){
            console.log(error)
        }
    },
    signOutUser: (email) => {
        return async (dispatch, getState) => {
            const user = await axios.post("https://mytinerary-ricciardi.herokuapp.com/api/signOut", {email})
            localStorage.removeItem("token")
            dispatch({type: "USER",
                message: user.data.message,
                payload: null})

        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get("https://mytinerary-ricciardi.herokuapp.com/api/signInToken", {
                headers: {'Authorization': 'Bearer ' + token}})
                .then(user => {if (user.data.success) {
                    dispatch({ type: "USER", payload: user.data.response});
                    dispatch({ type: "MESSAGE",
                            payload: {view: true,
                            message: user.data.message,
                            success: user.data.success}
                        });
                }else {localStorage.removeItem('token')}
            }
            ).catch(error => {
                if (error.response.status === 401)
                dispatch({type: "MESSAGE",
                        payload: {view: true,
                                success: false}})
                localStorage.removeItem('token')
            })
        }
    }
}
export default userActions