import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "../styles/buttom.css";

export default function Buttom() {
return (
    <Box className='buttom-container' sx={{ '& button': { m: 1 } }}>
    <div >
        <p className='text'>Find your ideal trip!</p>
        <LinkRouter to={"/cities"}>
        <Button className='button-style' variant="contained" size="large">
        Start!
        </Button>
        </LinkRouter>
    </div>
    </Box>
);
}
