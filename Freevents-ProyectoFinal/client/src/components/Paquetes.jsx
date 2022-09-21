import React from "react";
import NavbarNuevo from "./NavbarNuevo";
import './Paquetes.css'
import CardPaquetes from './CardPaquetes'
import footer2 from "../imagenes/foterfoto.png";
//import Container from '@mui/material/Container'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacks, getServices, orderByNamePack } from "../actions";
import PaginadoPacks from "./PaginadoPacks"


const Paquetes = () => {
  const dispatch = useDispatch();
  const allPacks = useSelector((state) => state.packs)

  useEffect(() => {
    dispatch(getPacks())
    dispatch(getServices())
  }, [dispatch])

  const [order, setOrder] = useState('')
  const allServicesP = useSelector((state) => state.services)
  const [currentPage, setCurrentPage] = useState(1) //pagina uno
  const [packsPerPage] = useState(5)// cantidad de cards x pagina

  const indexOfLastPack = currentPage * packsPerPage //8
  const indexOfFirstPack = indexOfLastPack - packsPerPage //0
  const currentPacks = allPacks.slice(indexOfFirstPack, indexOfLastPack)


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  function handleSort(e) {
    e.preventDefault()
    console.log(e.target.value, "Soy el target")
    dispatch(orderByNamePack(e.target.value))
    setCurrentPage(1)
    console.log(e.target.value, "TARGET VALUE")
    setOrder(`Ordenado.${e.target.value}`)// HACER PAGINADO
    //ESTADO
  }

  return (
    <div>
      <NavbarNuevo />
      {/* <Container m={5} maxWidth="xs"> */}
      <img className="png" src={footer2} alt="" />
      <h1 className="Titulo-proveedores"> Paquetes de servicios </h1>
      <PaginadoPacks
        packsPerPage={packsPerPage}
        allPacks={allPacks.length}
        paginado={paginado}
      />
      <div>
        <div className="row">
          <select onChange={e => { handleSort(e) }}>
            <option selected disabled>Ordenamiento</option>
            <option value='ascendente'>A-Z</option>
            <option value='descendente'>Z-A</option>
            {/* <option value='ascendenteW'>Min-Max precio</option>
            <option value='descendenteW'>Max-Min precio</option> */}
          </select>
          
          <select>
            <option selected disabled>Servicios</option>
            {allServicesP.map((t) =>
              <option> {t.name} </option>)}
          </select>

        </div>
      </div>
      <div>
        {currentPacks?.map((packs) => {
          console.log(packs.services)
          return (
            <div>
              <CardPaquetes
                name={packs.name}
                price={packs.price}
                gallery_image={packs.gallery_image ? packs.gallery_image : <img src="https://www.dondeir.com/wp-content/uploads/2018/09/fiesta-1.jpg" alt="img not found" />}
                events={packs.events.map(e => e.name)}
                services={packs.services?.map(s => s.name)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Paquetes;

