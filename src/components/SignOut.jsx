import React from 'react'
import Typography from '@mui/material/Typography'
import {Link as LinkRouter} from "react-router-dom"

import {useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions'

function SignOut() {
    const dispatch = useDispatch()
    function signOut() {
		dispatch(userActions.signOutUser())
	}
    return ( 
            <LinkRouter to={'/'}>
                <Typography onClick={signOut} className='fredokaFont' sx={{color: 'black'}}>SignOut</Typography>
            </LinkRouter>
    )
}


export default SignOut