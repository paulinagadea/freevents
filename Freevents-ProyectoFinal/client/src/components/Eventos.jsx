import React from "react";
import "./Eventos.css"
import { Link } from "react-router-dom";

import f9 from "../imagenes/9.jpg";
import f15 from "../imagenes/15.jpg";
import f6 from "../imagenes/5.jpg";
import f7 from "../imagenes/6.jpg";
import f16 from "../imagenes/16.jpg";
import f8 from "../imagenes/8.jpg";
import f4 from "../imagenes/4.jpg";
import f14 from "../imagenes/14.jpg";


export default function LandingPage() {
    return (
        <div className="container">

            <div className="galeria grid">
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
                    {/* <Link to= {`/detail/${g.id}`}>               */}
                    <img src={f4}></img>
                    <h1>Full Party</h1>
                    {/* </Link>  */}
                </div>
            </div>
        </div>
    )
}