import React from "react";
import NavBar from "./NavBar";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";

const Paquetes = () => {
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
      <CardProveedor></CardProveedor>
    </div>
  );
};

export default Paquetes;

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
