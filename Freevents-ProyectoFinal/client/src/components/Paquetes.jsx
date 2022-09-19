import React from "react";
import NavBar from "./NavBar";
import './Paquetes.css'
import CardPaquetes from './CardPaquetes'
import footer2 from "../imagenes/foterfoto.png";
//import Container from '@mui/material/Container'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../actions";


const Paquetes = () => {
  const dispatch = useDispatch();
  const allServices = useSelector((state) => state.services)

  useEffect(() => {
    dispatch(getServices())
  }, [dispatch])

  return (
    <div>
      <NavBar/>
      {/* <Container m={5} maxWidth="xs"> */}
      <img className="png" src={footer2} alt="" />
      <h1 className="Titulo-proveedores"> Paquetes de servicios </h1>
      <div>
        <div className="row">
          <select >
            <option selected disabled>Ordenamiento</option>
            <option value='ascendente'>A-Z</option>
            <option value='descendente'>Z-A</option>
            <option value='ascendenteW'>Min-Max precio</option>
            <option value='descendenteW'>Max-Min precio</option>
          </select>

          <select>
            <option selected disabled>Servicios</option>
            {/* {allServices.map((ser, index) => (
              <option key={index} value={ser}>
                {ser}
              </option>
            ))} */}

            {/* <option>Arreglos florales</option>
            <option>Dj</option>
            <option>Streaper</option>
            <option>Multimedia</option>
            <option>Transporte</option>
            <option>Catering</option> */}
          </select>

        </div>
      </div>
      <CardPaquetes></CardPaquetes>
      {/* </Container> */}
    </div>
  )
}

export default Paquetes;

