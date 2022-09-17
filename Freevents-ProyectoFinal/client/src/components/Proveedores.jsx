import React from "react";
import NavBar from "./NavBar";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";


const Proveedores = () => {
    const allProviders = useSelector((state) => state.providers)
    console.log(allProviders, "todos los prov")

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
      </div>{
        allProviders?.map(d=>{
            return (
                <div>
          <Link style={{textDecoration:"none"}} to={"/proveedores/detail"}>

          <CardProveedor
          name={d.name} 
          email={d.email} 
          address={ d.address}
          phone_number={d.phone_number}
          
          />
          </Link>
          </div>
            )
        })
      }
      
    </div>
  );
};

export default Proveedores;
