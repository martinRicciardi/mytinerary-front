import React, { useState } from "react";
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"
import GoogleSignIn from "../components/GoogleSignIn";
import Button from '@mui/material/Button';
import '../styles/signin-up.css'

function SignIn(props) {
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const logedUser = {
            email: email,
            password: password,
            from: "form-Signin",
        }
        await props.signInUser(logedUser)
    }

    return ( 
                    <div className="signin-upbody">
                        <div className="form-container">
                        <Typography variant="h2" className='input' sx={{padding: '10px'}}>Enter and discover!!</Typography>
                        <form onSubmit={handleSubmit} className='form'>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',}}>
                                    <TextField label="Email" variant="filled" color="success" focused type='email' name='email' id='email' placeholder='Email' className='input' value={email} onChange={e=>setEmail(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',}}>
                                    <TextField label="Password" variant="filled" color="success" focused type='password' name='password' id='password' placeholder='Password' className='input' value={password} onChange={e=>setPassword(e.target.value)} required/>
                            </Box>
                            <GoogleSignIn className='input'/>
                            <Box sx={{
                                display: 'flex',
                                height: '40px',
                                width: '40%',}}>
                                <Button variant="contained" color="success" type="submit" value='SignUp!' className='input' required>SignIn!</Button>
                            </Box>
                            <LinkRouter to={'/signup'} className='input'>Don't have an account yet? go to SignUp!</LinkRouter>
                        </form>
                        </div>
                    </div>
        )
}
const mapDispatchToProps = {
    signInUser: userActions.signInUser
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducers.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)