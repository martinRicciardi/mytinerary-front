import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'

function GoogleSignUp() {
    const dispatch = useDispatch()

    async function handleCallback(res){
        const userObject = jwt_decode(res.credential)
        dispatch(userActions.signUpUser({
            fullname: userObject.name,
            email: userObject.email,
            password: userObject.sub,
            country: "Argentina",
            photo: userObject.picture,
            from: "Google Sign Up"
        }))
    }
    useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
        client_id: "661563449445-sngehoe8ps1e2u3me7ivljeeh5m1ej1b.apps.googleusercontent.com",
        callback: handleCallback
    })
    google.accounts.id.renderButton(
        document.getElementById("gButton"),
        { theme: "outline", size: "medium" }
    )
    })
    return(
        <div>
            <div id='gButton'></div>
        </div>
    )
}
export default GoogleSignUp