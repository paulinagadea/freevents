import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders } from "../actions";
import NavBar from "./NavBar";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";

const Proveedores = () => {

  const dispatch = useDispatch();
  const allProviders = useSelector((state) => state.providers)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  return (
    <div>
      <NavBar></NavBar>

      <h1 className="Titulo"> Proveedores </h1>
      <div className="row">
        <p>Ordenamiento : </p>
        <select>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>

        <p>Servicios : </p>
        <select>
          <option>Todos</option>
          <option>Arreglos florales</option>
          <option>Dj</option>
          <option>Streaper</option>
          <option>Multimedia</option>
          <option>Transporte</option>
          <option>Catering</option>
        </select>
      </div>

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
      Price
    </option>
    <option value="0-5">0-5</option>
    <option value="5-0">5-0</option>
  </select>
</div>;
