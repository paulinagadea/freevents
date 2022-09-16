import { Link } from "react-router-dom";
import React from "react";
import Slider from "./Slider";
import image7 from "../imagenes/7.jpg";
import image20 from "../imagenes/20.jpg";
import image13 from "../imagenes/13.jpeg";
import footer from "../imagenes/footer.jpg";


const Home = () => {
    return (
        <div>
            <button>INGRESA</button>
            <button>CREA TU CUENTA</button>
            <h1>Freevents</h1>
            <img src={image20} alt=""/>
            <div>
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
            </div>
            <div>
                <select>
                    <option selected disabled>
                        Orden Alfabetico
                    </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select>
                    <option selected disabled>
                        Rating
                    </option>
                    <option value="0-5">0-5</option>
                    <option value="5-0">5-0</option>
                </select>
            </div>
            <h1>QUE EVENTO DESEAS FESTEJAR?</h1>
            <Slider />
            <div>
                <h1>CONOCE NUESTROS PROVEEDORES MAS TALENTOSOS </h1>
                <img src={image7} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sapiente ducimus ullam nostrum ea. Autem adipisci inventore,
                    ipsum fugit laudantium corrupti dolore nihil,
                    eligendi perferendis obcaecati earum deserunt tenetur numquam temporibus.</p>
                <img src={image13} alt="" />
            </div>
            <div>
                <img src={footer} alt="" />
                <h1> QUIERES FORMAR PARTE DE NUESTRO EQUIPO?</h1>
                <button> REGISTRATE AQUI</button>
            </div>
        </div>
    )
}
export default Home;