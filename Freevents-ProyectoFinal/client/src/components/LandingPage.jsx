import React from "react";
import "./LandingPage.css"
import FOTOGENERAL from "../imagenes/foto-junta.jpg"
import NavBarLanding from "./NavBarLanding.jsx"
import { /*Button,*/ Container } from "@mui/material";
// import {Link} from "react-router-dom";
// import cabeza from "../imagenes/20.jpg";
// import f9 from "../imagenes/9.jpg";
// import f15 from "../imagenes/15.jpg";
// import f6 from "../imagenes/5.jpg";
// import f7 from "../imagenes/6.jpg";
// import f16 from "../imagenes/16.jpg";
// import f8 from "../imagenes/8.jpg";
// import f4 from "../imagenes/4.jpg";
// import f14 from "../imagenes/14.jpg";
// import theme from '../temaConfig'

export default function LandingPage(){
    return(
                <div className="encabezado">
                    <NavBarLanding/>
                    <Container /*sx={{mt:5.7}} maxWidth="xl"*/></Container>
                    <img className="cabeza" src={FOTOGENERAL} alt="img not found" /*width="1300px" height="800px"*/></img>
                    {/* <img className="cabeza" src={cabeza} alt="img not found" /*width="1300px" height="800px"></img> */}
                <div>
                {/* <div className="container"></div> */}

                {/* <Link style={{textDecoration:"none"}} to ="/home">
                <div className="galeria">
                    <div className="evento">
                        <img src={f9}></img>
                        <h1>Matrimonios</h1>
                    </div>
                    <div className="evento">
                        <img src={f15}></img>
                        <h1>Egresos</h1>
                    </div>
                    <div className="evento">
                        <img src={f7}></img>
                        <h1>Cumpleaños</h1>  
                    </div>
                    <div className="evento">
                        <img src={f16}></img>
                        <h1>Baby Showers</h1>   
                    </div>
                    <div className="evento">
                        <img src={f8}></img>
                        <h1>15 Años</h1>   
                    </div>
                    <div className="evento">
                        <img src={f4}></img>
                        <h1>Full Party</h1>   
                    </div>
                </div>
                </Link> */}
            </div>
        </div>
    )
}