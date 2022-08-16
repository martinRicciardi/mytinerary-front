import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'

function GoogleSignIn() {
    const dispatch = useDispatch()

    async function handleCallback(res){
        const userObject = jwt_decode(res.credential)
        dispatch(userActions.signInUser({
            email: userObject.email,
            password: userObject.sub,
            from: "Google Sign In"
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
export default GoogleSignIn