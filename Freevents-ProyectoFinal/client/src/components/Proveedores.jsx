import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders, getEvents, orderByName } from "../actions";
import NavbarHome from "./NavbarHome.jsx";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";
import Paginado from './Paginado'
import footer2 from "../imagenes/foterfoto.png";
import { Link } from "react-router-dom";
// import image13 from "../imagenes/13.jpeg";
// import imagenf from "../imagenes/HOME6f.png"
// import png from "../imagenes/footer.jpg";
// import SearchBar from "./SearchBar";

const Proveedores = () => {

  const dispatch = useDispatch();
  const allProviders = useSelector((state) => state.providers)
  const allEve = useSelector((state) => state.events)
  const [orden, setOrder] = useState('')
  // const eventos = useSelector((state) => state.events)

  const [currentPage, setCurrentPage] = useState(1) //pagina uno
  const [providersPerPage] = useState(5)// cantidad de cards x pagina
  const indexOfLastProvider = currentPage * providersPerPage //8
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage //0
  const currentProviders = allProviders.slice(indexOfFirstProvider, indexOfLastProvider)
  console.log(currentProviders, "current providers")

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getProviders())
    dispatch(getEvents())
  }, [dispatch])

  function handleSort(e) {
    e.preventDefault()
    console.log(e.target.value, "Soy el target")
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado.${e.target.value}`)
  }
  const handleClick = (e) => {
    e.preventDefault() //preventivo
    dispatch(getProviders())
  }

  return (
    <div>
      <NavbarHome />
      {/* <SearchBar setCurrentPage={setCurrentPage}/> */}
      <img className="png" src={footer2} alt="" />
      <h1 className="Titulo-proveedores"> PROVEEDORES </h1>
      <button onClick={e => { handleClick(e) }}> ⇦</button>
      <Paginado
        providersPerPage={providersPerPage}
        allProviders={allProviders.length}
        paginado={paginado}
      />
      <div className="row">

        <select onChange={e => handleSort(e)}>
          <option selected disabled>Ordenamiento</option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>
      </div>

      <Link to="/creacionpaquetes"><button href="/home">agregar paquete</button></Link>
      

      <div className="grid">
        {currentProviders?.map((provider) => {
          return (
            <div key={provider.id} className='item'>
              <Link style={{ textDecoration: "none" }} to={`/detail/${provider.id}`}>
                <CardProveedor
                  background_image={provider.background_image}
                  name={provider.name}
                  address={provider.address}
                  email={provider.email}
                  phone_number={provider.phone_number} 
                  eventos = {allEve.map(e => { return (e.name) })}
                />
              </Link>
            </div>
          )
        })}

      </div>
    </div>
  );
};


export default Proveedores;

