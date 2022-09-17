import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders } from "../actions";
import NavBar4 from "./NavBar";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";
import image13 from "../imagenes/13.jpeg";
import png from "../imagenes/FOTOGENERAL.png";


const Proveedores = () => {

  const dispatch = useDispatch();
  const allProviders = useSelector((state) => state.providers)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  return (
    <div>
      <NavBar4></NavBar4>
      <img className="png" src={png} alt="" />
      <h1 className="Titulo"> Proveedores </h1>

      <div className="row">
        <select>
          <option selected disabled>Ordenamiento</option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>
      </div>

      <img src={image13} alt="" />

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
    </div>
  );
};


export default Proveedores;

