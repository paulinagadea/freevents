import { Link } from "react-router-dom";
import React from "react";
import Slider from "./Slider";
import image7 from "../imagenes/7.jpg";
import image20 from "../imagenes/20.jpg";
import image13 from "../imagenes/13.jpeg";
import footer from "../imagenes/footer.jpg";
import "./Home.css"
import Button  from "@material-ui/core/Button"
import { NavBar2 } from "./NavBar2"


// import image1 from "../imagenes/1.jpg";
// import image6 from "../imagenes/6.jpg";
// import image4 from "../imagenes/4.jpg";
// import image5 from "../imagenes/5.jpg";
// import image8 from "../imagenes/8.jpg";
//import image15 from "../imagenes/15.jpg";
//import image16 from "../imagenes/16.jpg";


const Home = () => {

    //let eventsmany = ["ANIVERSARIOS", "CUMPLEAÑOS", "DESPEDIDAS", "GRADUACIONES", "BABY SHOWER", "15 AÑOS", "CASAMIENTOS", "FULL PARTY"]

    return (
        <div>
            <div className="contiene">
                <NavBar2 />
                
                
                <img className="imghome" src={image20} alt="" />
                <h1 className="texto-encima">Freevents</h1>
            </div>

            <h1>QUE EVENTO DESEAS FESTEJAR?</h1>
            <ul>
                <Button href="/paquetes" color = "secondary">ANIVERSARIOS</Button>
                <Button href="/paquetes" color = "secondary">CUMPLEAÑOS</Button>
                <Button href="/paquetes" color = "secondary">DESPEDIDAS</Button>
                <Button href="/paquetes" color = "secondary">GRADUACIONES</Button>
                <Button href="/paquetes" color = "secondary">BABY SHOWERS</Button>
                <Button href="/paquetes" color = "secondary">15 AÑOS</Button>
                <Button href="/paquetes" color = "secondary">FULL PARTY</Button>
            </ul>
                <Button  color="secondary" variant="outlined" size="large" href="/eventos" className="centrado">CREA TU EVENTO</Button>
            <Link to="/paquetes">
                <Slider className="slider" />
            </Link>
            {/* <div>
                <select>
                    <option selected disabled>Eventos</option>
                    <option>FULL PARTY</option>
                    <option>15 AÑOS</option>
                    <option>GRADUACIONES</option>
                    <option>CASAMIENTOS</option>
                    <option>CUMPLEAÑOS</option>
                    <option>ANIVERSARIO</option>
                    <option>BABY SHOWER</option>
                </select>
            </div> */}
            <div>
                <h1>CONOCE NUESTROS PROVEEDORES MAS TALENTOSOS </h1>
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
        </div>
    )
}
export default Home;