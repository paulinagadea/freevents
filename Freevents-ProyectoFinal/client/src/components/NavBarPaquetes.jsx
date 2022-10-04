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
import SearchFinal from "./SearchFinal";
// import { auth } from "../firebase";
// import { useAuth } from "../context/AuthContext";
// import Salir from "./Salir"
import { useAuth0 } from "@auth0/auth0-react";


export default function NavbarHome() {
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

  // const { logout, user } = useAuth();
  // console.log(user);
  
    // cerrar sesion
    // const handleLogout = async () => {
    //   try {
    //     await logout();
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
      <div>

        <NavContainer>
        <Link className="link" to="/home">Freevents</Link>
        <SearchFinal/>
        <div className="containerbar">

          {
            isAuthenticated === false && 
          <Button style={{fontFamily: "Mollie", fontSize: "17px"}} onClick={handleClick} href="/login">Ingresar</Button> 
          }

          {/* {
            isAuthenticated === false && 
            <Button style={{fontFamily: "Mollie", fontSize: "17px"}} onClick={handleClick} href="/userregister">Registrate</Button>
          }  */}

          <Button style={{fontFamily: "Mollie", fontSize: "17px"}} onClick={handleClick} href="/">Home</Button>
          <Button style={{fontFamily: "Mollie", fontSize: "17px"}} onClick={handleClick} href="/proveedores">Proveedores</Button>
          
          
          {/* {(estadoUser === "provider"  ||   estadoUser === "user") && <Button size="small" onClick={handleClick} href="/proveedores">Proveedores</Button>} */}
          {/* <Button disabled={"/paquetes" !== null ? true : false} size="small" onClick={handleClick} href="/paquetes">Paquetes</Button> */}
          {
            // auth.currentUser === null && <Button disabled={auth.currentUser !== null ? true : false} size="small" onClick={handleClick} href="/userregister">Registrate</Button>
          }
          {/* <Salir/> */}
          {/* <Button size="small" onClick={handleClick} href="/eventos">Crea tu evento</Button> */}
        </div>
      
      </NavContainer>
      </div>
    )
  }
  
  const NavContainer= styled.nav`
  .link{
    font-family: "Mollie";
    font-size: 70px;
    margin-left: 5%;
  }

 .containerbar{
    margin-right: 5%;
  }

  .containerbar .MuiButton-label {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;;
}
.containerbar .MuiButton-label:hover, .MuiButton-label:focus {
    color: #fff;
    background-size: 100% 2px;
}

    h2{
      color: white;
      font-weight: 400;
      span{
        font-weight: bold;
      }
    }
    padding: .4rem;
    background-color: #736A68;
    display: flex;
    height: 10vh;
    width: auto;
    align-items: center;
    justify-content: space-between;

    a{
      color:white;
      text-decoration:none;
      margin-right: 1rem;
    }
    .links{
      position: absolute;
      top: -600px;
      left: -2000px;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      a{
        color: white;
        font-size: 2rem;
        display: block;
      }
      @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
          font-size: 1rem;
          color: white;
          display: inline;
        }
        display: block;
      }
    }
    .links.active{
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;
      a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
      }
    }
    .burguer{
      @media(min-width: 768px){
        display: none;
      }
    }
  `