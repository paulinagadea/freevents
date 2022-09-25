import React from "react";
import Slider from "./Slider";
import image7 from "../imagenes/7.jpg";
import image10 from "../imagenes/10.jpg";
import { brown } from '@material-ui/core/colors';
import image13 from "../imagenes/13.jpeg";
import "./Home.css"
import Button from "@material-ui/core/Button"
import NavbarHome from "./NavbarHome.jsx"
import { /*useState,*/ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders } from "../actions";
import Eventos from "./Eventos"
import { Box, Container, Grid } from "@material-ui/core";
import Boximg from "./Boxing";
import githud from "../imagenes/github.png";
import facebook from "../imagenes/Facebook.png";
import twitter from "../imagenes/twitter.png";
import instagram from "../imagenes/instagram.png";
// import image20 from "../imagenes/FOTOCONFREEVENTS.jpg";
// import { Link } from "react-router-dom";
// import fotogeneral from '../imagenes/FOTOGENERAL.png';
// import footer from "../imagenes/footer10.jpg";
// import CardProveedor from "./CardProveedor";

const Home = () => {
    const dispatch = useDispatch();
    const allProviders = useSelector((state) => state.providers)

    useEffect(() => {
        dispatch(getProviders())
    }, [dispatch])

    return (
        <div>
                <NavbarHome />
                {/* <img className="imghome" src={image20} alt="" /> */}
            <div>
                {/* ACA CARRUSEL DE FOTOSS HOME (VER EN CARPETA DE IMAGENES) Y ARRIBA DE LAS IMAGENES EL PNG DE FREEVENTS */}
                <Slider/>
                <h1 className="texto-encima">Freevents</h1>
                
                {/* <img src={fotogeneral} className="fotogeneral_home" alt="" /> */}
            </div>
            <div className="barra">
            <Box color = "primary.main" component="span" b= {4}>
                <Button href="/paquetes" style={{ color: brown[400] }}>ANIVERSARIOS</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>CUMPLEAÑOS</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>DESPEDIDAS</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>GRADUACIONES</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>BABY SHOWERS</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>15 AÑOS</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>FULL PARTY</Button>
                <Button href="/paquetes" style={{ color: brown[400] }}>MATRIMONIO</Button>
            </Box>
            </div>
            <Container fixed>
            <h1 className="titulo-home">QUE EVENTO DESEAS FESTEJAR?</h1>
            {/* <Button color="secondary" variant="outlined" size="large" href="/eventos" className="centrado">CREA TU EVENTO</Button> */}
            <Eventos/>

            {/* EN VEZ DEL SLIDER PONER LOS EVENTOS CON EL TEMPLATE LINDO DE HOSMAR ACA */}
            <div className="Prove">
            <h1 className="titulo-home">PROVEEDORES DE SERVICIOS</h1>

                <Grid container spacing={1}>
                    <Grid item xs={4}>
                    <img style={{width:"45%"}} src={image7} alt="" />
                    </Grid>
                    <Grid item xs={4}>
                    <img style={{width:"100%"}} src={image13} alt="" />
                    </Grid>
                    <Grid item xs={4}>
                    <img style={{width:"45%"}} src={image10} alt="" />
                    </Grid>
                </Grid>
                <div className="parrafoc">
                    <h1 className="parrafo">Con nuestros proveedores de servicios podrás conseguir que tu evento soñado sea una realidad. Adaptarás todas tus necesidades con los paquetes personalizados para cada tipo de evento. Conseguirás los mejores precios, los mejores productos y el mejor personal para que tu fiesta sea un verdadero éxito.
                        </h1>
                </div>
            </div>
            <h1 className="titulo-home">CONOCE NUESTROS PROVEEDORES MAS TALENTOSOS </h1>
            <div className="boxing">
                <Boximg/>
            </div>
    

            </Container>
            <div className="barra1">
                <h1 className="titulo-home1"> QUIERES FORMAR PARTE DE NUESTRO EQUIPO?</h1>
                <Button style={{ color: brown[500] }} 
                        href="/providerregister" 
                        variant="contained"
                        disableElevation
                        >REGISTRATE AQUI
                </Button>

            </div>
                <div className="container-footer">
                    <div className="footer-completo">
                        {/* <img src={footer}></img> */}
                        <a href={"https://github.com/paulinagadea/freevents"}>
                        <img src={githud} alt="not found" height="80px" on></img>
                        </a>
                        <a href={"https://www.facebook.com/"}>
                        <img src={facebook} alt="not found" height="80px"></img>
                        </a>
                        <a href={"https://twitter.com"}>
                        <img src={twitter} alt="not found" height="80px"></img>  
                        </a>
                        <a href={"https://www.instagram.com/"}>
                        <img src={instagram} alt="not found" height="80px"></img>  
                        </a>
                        <div className="botones">
                        
                        </div>
                        <div  className="botones">
                        </div>
                    </div>
                </div>
                {/* <img className="footer" src={footer} alt="" /> */}
           
        </div>
    )
}
export default Home;