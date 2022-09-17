import { Link } from "react-router-dom";
import React from "react";
import Slider from "./Slider";
import image7 from "../imagenes/7.jpg";
import image20 from "../imagenes/FOTOCONFREEVENTS.jpg";
import image13 from "../imagenes/13.jpeg";
import footer from "../imagenes/footer.jpg";
import "./Home.css"
import Button from "@material-ui/core/Button"
import { NavBar3 } from "./NavBar3"
import CardProveedor from "./CardProveedor";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders } from "../actions";
import Eventos from "./Eventos"
import { Box, Container, Grid } from "@material-ui/core";


const Home = () => {
    const dispatch = useDispatch();
    const allProviders = useSelector((state) => state.providers)

    useEffect(() => {
        dispatch(getProviders())
    }, [dispatch])

    return (
        <div>
                <NavBar3 />
                <img className="imghome" src={image20} alt="" />
            <Container fixed>

            <div className="contiene">
                {/* ACA CARRUSEL DE FOTOSS HOME (VER EN CARPETA DE IMAGENES) Y ARRIBA DE LAS IMAGENES EL PNG DE FREEVENTS */}
                {/* <h1 className="texto-encima">Freevents</h1> */}
            </div>

            <h1>QUE EVENTO DESEAS FESTEJAR?</h1>
            <Box component="span" m={1}>
                <Button href="/paquetes" color="secondary">ANIVERSARIOS</Button>
                <Button href="/paquetes" color="secondary">CUMPLEAÑOS</Button>
                <Button href="/paquetes" color="secondary">DESPEDIDAS</Button>
                <Button href="/paquetes" color="secondary">GRADUACIONES</Button>
                <Button href="/paquetes" color="secondary">BABY SHOWERS</Button>
                <Button href="/paquetes" color="secondary">15 AÑOS</Button>
                <Button href="/paquetes" color="secondary">FULL PARTY</Button>
            </Box>
            <Button color="secondary" variant="outlined" size="large" href="/eventos" className="centrado">CREA TU EVENTO</Button>
            <Eventos/>

            {/* EN VEZ DEL SLIDER PONER LOS EVENTOS CON EL TEMPLATE LINDO DE HOSMAR ACA */}
            <div>
                <h1>CONOCE NUESTROS PROVEEDORES MAS TALENTOSOS </h1>


                {allProviders && allProviders.map((provider) => {
                    return (
                        <CardProveedor
                            name={provider.name}
                            address={provider.address}
                            email={provider.email}
                            phone_number={provider.phone_number}
                        />
                    )
                })}


                <img className="fotocate" src={image7} alt="" />
                <img src={image13} alt="" />
                <div className="parrafoc">
                    <h1 className="parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sapiente ducimus ullam nostrum ea. Autem adipisci inventore,
                        ipsum fugit laudantium corrupti dolore nihil,
                        eligendi perferendis obcaecati earum deserunt tenetur numquam temporibus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sapiente ducimus ullam nostrum ea. Autem adipisci inventore,
                        ipsum fugit laudantium corrupti dolore nihil,
                        eligendi perferendis obcaecati earum deserunt tenetur numquam temporibus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sapiente ducimus ullam nostrum ea. Autem adipisci inventore,
                        ipsum fugit laudantium corrupti dolore nihil,
                        eligendi perferendis obcaecati earum deserunt tenetur numquam temporibus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sapiente ducimus ullam nostrum ea. Autem adipisci inventore,
                        ipsum fugit laudantium corrupti dolore nihil,
                        eligendi perferendis obcaecati earum deserunt tenetur numquam temporibus.</h1>
                </div>
            </div>
            <div>
                <img className="footer" src={footer} alt="" />
                <h1> QUIERES FORMAR PARTE DE NUESTRO EQUIPO?</h1>

                <Button color="secondary" href="/providerregister" variant="outlined"> REGISTRATE AQUI</Button>

            </div>
            </Container>
        </div>
    )
}
export default Home;