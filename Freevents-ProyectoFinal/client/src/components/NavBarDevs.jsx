import styled from "styled-components";
import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";//logout
import { LogoutButton } from './ButtonLogoutPacksRoute'//logout

export default function NavBarDevs() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  const userStorage = JSON.parse(localStorage.getItem("providerUser"))//logout
  console.log('esto es userStorage:', userStorage)//logout

  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <NavContainer>
        <Link className="link" to="/">Freevents</Link>
        <div className="containerbar">
          {userStorage ?
            < LogoutButton style={{ fontFamily: "Mollie", fontSize: "17px" }} />
            : <Button style={{ fontFamily: "Mollie", fontSize: "17px" }} onClick={handleClick} href="/customertype">Ingresar</Button>
          }
          {/* {isAuthenticated ?
            < LogoutButton style={{ fontFamily: "Mollie", fontSize: "17px" }} />
            : <Button style={{ fontFamily: "Mollie", fontSize: "17px" }} onClick={handleClick} href="/customertype">Ingresar</Button>
          } */}
          {/* <Button style={{fontFamily: "Mollie", fontSize: "20px"}} onClick={handleClick} href="/login">Ingresar</Button> */}
          <Button style={{ fontFamily: "Mollie", fontSize: "20px" }} onClick={handleClick} href="/home">Home</Button>
          {/* <Button size="small" onClick={handleClick} href="/proveedores">Proveedores</Button>
          <Button size="small" onClick={handleClick} href="/paquetes">Paquetes</Button> */}
          {/* <Button size="small" onClick={handleClick} href="/userregister">Registrate</Button> */}
          {/* <Button size="small" onClick={handleClick} href="/eventos">Crea tu evento</Button> */}
        </div>

      </NavContainer>
    </div>
  )
}

const NavContainer = styled.nav`
  .link{
    font-family: 'Mollie';
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
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    position: fixed;
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