import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../images/Logo.svg.svg"
import "../styles/navbar.css";
import {connect} from 'react-redux'
import SignOut from './SignOut';


const settings = ['SignUp', 'SignIn'];

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='nav' position="static" sx={{backgroundColor: "#449c86"}}>
      <Container  maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <img src={logo} alt="logo" style={{height: "11vh"}}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <LinkRouter to={"/home"}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
              </LinkRouter>
              <LinkRouter to={"/cities"}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Cities</Typography>
                  </MenuItem>
              </LinkRouter>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width:"100vw", justifyContent:"center" }}>
            <img src={logo} alt="logo" style={{height: "11vh", width: "10rem"}}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <LinkRouter to={"/home"}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Home
                  </Button>
                </LinkRouter>
                <LinkRouter to={"/cities"}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Cities
                  </Button>
              </LinkRouter>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {props.user == null ? <Avatar className='avatar' alt="Remy Sharp"/>  : <Avatar alt="User image" src={props.user.photo}/>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {props.user ? 
              <SignOut handleCloseUserMenu={handleCloseUserMenu}/> :
              settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <LinkRouter to={'/'+ setting}>
                  <Typography textAlign="center">{setting}</Typography>
                  </LinkRouter>
                </MenuItem>
              ))  }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const mapStateToProps = (state) => {
  return {
      user: state.userReducers.user,
  }
}

export default connect(mapStateToProps, null)(NavBar)
