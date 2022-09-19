import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders } from "../actions";
import NavBarProveedores from "./NavBarProveedores";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";
import image13 from "../imagenes/13.jpeg";
import footer2 from "../imagenes/foterfoto.png";
import imagenf from "../imagenes/HOME6f.png"
import png from "../imagenes/footer.jpg";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";



const Proveedores = () => {

  const dispatch = useDispatch();
  const allProviders = useSelector((state) => state.providers)

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  return (
    <div>
      <NavBarProveedores />
      <img className="png" src={footer2} alt="" />
      <h1 className="Titulo-proveedores"> Proveedores </h1>

      <div className="row">
        <select>
          <option selected disabled>Ordenamiento</option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>
      </div>
      <div className="grid">
        {allProviders.map((provider) => {
          return (
            <div key={provider.id} className='item'>
              <Link to={`/detail/${provider.id}`}>
                <CardProveedor
                  background_image={provider.background_image}
                  name={provider.name}
                  address={provider.address}
                  email={provider.email}
                  phone_number={provider.phone_number} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};


export default Proveedores;

