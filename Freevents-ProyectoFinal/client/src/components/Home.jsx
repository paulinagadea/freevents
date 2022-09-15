import { Link } from "react-router-dom"; 
import React from "react";
import Slider from "./Slider";
// import image13 from "../imagenes/13.jpeg";
// import image15 from "";


const Home = () => {
    return (
        <div>
            <button>INGRESA</button>
            <button>CREA TU CUENTA</button>
            <h1>Freevents</h1>

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
                <button>FULL PARTY</button>
                <button>15 AÑOS</button>
                <button>GRADUACIONES</button>
                <button>CASAMIENTOS</button>
                <button>CUMPLEAÑOS</button>
                <button>ANIVERSARIO</button>
                <button>BABY SHOWER</button>
            </div>
            <div>
                <h1>CONOCE NUESTROS PROVEEDORES MAS TALENTOSOS </h1>

                {/* <img src={image13} alt="" />
                <img src={image15} alt="" /> */}
            </div>
        </div>
    )
}
export default Home;