import styled from "styled-components";
import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//import SearchBar from "./SearchBar";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";


export default function NavbarHome() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
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


    return (
      <div>
        <NavContainer>
        <Link className="link" to="/home">Freevents</Link>
          {/* <SearchBar/> */}
        <div className="containerbar">
          <Button disabled={auth.currentUser !== null ? true : false} size="small" onClick={handleClick} href="/login">Ingresar</Button>
          <Button size="small" onClick={handleClick} href="/home">Home</Button>
          <Button size="small" onClick={handleClick} href="/proveedores">Proveedores</Button>
          
          {/* {(estadoUser === "provider"  ||   estadoUser === "user") && <Button size="small" onClick={handleClick} href="/proveedores">Proveedores</Button>} */}
          <Button size="small" onClick={handleClick} href="/paquetes">Paquetes</Button>
          <Button disabled={auth.currentUser !== null ? true : false} size="small" onClick={handleClick} href="/userregister">Registrate</Button>
          <Button size="small" onClick={handleLogout} href="/login">Salir</Button>
          {/* <Button size="small" onClick={handleClick} href="/eventos">Crea tu evento</Button> */}
        </div>
      
      </NavContainer>
      </div>
    )
  }
  
  const NavContainer= styled.nav`
  .link{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 50px;
    margin-left: 5%;
    font-family: 'Epilogue', sans-serif;
  }

 .containerbar{
    margin-right: 5%;
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
// const BgDiv = styled.div`
// background-color: #222;
// position: absolute;
// top: -1000px;
// left: -1000px;
// width: 100%;
// height: 100%;
// z-index: -1;
// transition: all .6s ease ;

// &.active{
//   border-radius: 0 0 80% 0;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }
// `