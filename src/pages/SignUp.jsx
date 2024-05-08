import React, {useState} from 'react'
import userActions from "../redux/actions/userActions";
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"
import {connect} from 'react-redux'
import GoogleSignUp from '../components/GoogleSignUp';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/signin-up.css'


function SignUp(props) {

    const [fullname,setFullname] = useState("")
    const [photo,setPhoto] = useState("")
    const [country,setCountry] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    var countries = ["","Mexico","U.S.A.","Brazil","Argentina","China","Japan","Spain","England","France","Italy","Belgium"]

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            fullname: fullname,
            photo: photo,
            email: email,
            password: password,
            country: country,
            from: "form-Signup"
        }
        props.signUpUser(userData)
    }

    return (
                    <div className='signin-upbody'>
                        <div className='form-container'>
                        <Typography variant="h3" className='festiveFont violetShadows' sx={{padding: '10px'}}>Register Now!</Typography>
                        <form onSubmit={handleSubmit} className='form'>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',}}>
                                    <TextField label="Full name" variant="filled" color="success" focused type='text' name='Fullname' id='Fullname' placeholder='Fullname' className='input' value={fullname} onChange={e=>setFullname(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '40%',
                                minWidth: '280px',}}>
                                    <TextField label="Photo URL" variant="filled" color="success" focused type='text' name='userPhoto' id='userPhoto' placeholder="Photo URL" className='input' value={photo} onChange={e=>setPhoto(e.target.value)} required />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                width: '100%',
                                minWidth: '280px',}}>
                                    <FormControl fullWidth>
                                    <InputLabel variant="filled">Country</InputLabel>
                                            <Select name="country" id="country"  className='input' onChange={e=>setCountry(e.target.value)} required>
                                                {countries.map( everyCountry => <MenuItem  key={everyCountry} value={everyCountry}><option>{everyCountry}</option></MenuItem>)}
                                            </Select>
                                    </FormControl>
                            </Box>
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
                            <GoogleSignUp className='input'/>
                            <Box sx={{
                                display: 'flex',
                                height: '40px',
                                width: '40%',}}>
                                    <Button variant="contained" color="success" type="submit" value='SignUp!' className='input' required>SignUp!</Button>
                            </Box>
                            <LinkRouter to={'/signIn'} className='input'>You have account? go to SignIn!</LinkRouter>
                        </form>
                        </div>
                    </div>
    )
}
const mapDispatchToProps = {
    signUpUser: userActions.signUpUser
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducers.message
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)