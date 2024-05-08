import React from "react";
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import logo from "../images/Logo.svg.svg"
import { Link as LinkRouter } from 'react-router-dom';

function Footer(){
    return(
        <div className="Footer">
            <div className="logo-container">
                <img className="logo-footer" src={logo} alt="logo" />
            </div>
            <div className="social-networks">
                <p className="footer-title">Social Networks</p> 
                <InstagramIcon fontSize="large" />
                <FacebookIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
            </div>
            <div>
            <LinkRouter to="/">
                <HomeIcon className="nav-icons" fontSize="large" />
            </LinkRouter>
            <LinkRouter to="/cities">
                <FlightIcon className="nav-icons" fontSize="large" />
            </LinkRouter>
            </div>
        </div>
    )
}
export default Footer;