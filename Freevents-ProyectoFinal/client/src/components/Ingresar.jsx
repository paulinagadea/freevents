import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Hidden from '@mui/material/Hidden';
//import SearchBar from "./SearchBar";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Ingresar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const [clicked, setClicked] = useState(false)
    const handleClick = (event) => {
      //cuando esta true lo pasa a false y vice versa
      setAnchorEl(event.currentTarget);
      setClicked(!clicked)
    }
  
    const { logout, user } = useAuth();
    console.log(user);
    
      // cerrar sesion
      const handleLogout = async () => {
        try {
          await logout();
        } catch (error) {
          console.error(error.message);
        }
      };
  
      return(
        <React.Fragment>
           
            <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Ingresar
      </Button>
      
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >   
      
        <MenuItem onClick={handleClose} href="/login">
           
        Cliente
           
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} >
        <Link to="/login">
        Proveedor
            </Link>
         
        </MenuItem>
      </Menu>
      
      </React.Fragment>


      )





}

