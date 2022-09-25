
import React from "react";
// import NavbarNuevo from "./NavbarNuevo";
import NavBarPaquetes from './NavBarPaquetes'
import './Paquetes.css'
import CardPaquetes from './CardPaquetes'
import footer2 from "../imagenes/foterfoto.png";
//import Container from '@mui/material/Container'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacks, getServices, orderByNamePack, filterPacksByService, orderByPrice } from "../actions";
import PaginadoPacks from "./PaginadoPacks"


const Paquetes = () => {
  const dispatch = useDispatch();
  const allPacks = useSelector((state) => state.packs)
  const allServicesP = useSelector((state) => state.services)

  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1) //pagina uno
  const [packsPerPage] = useState(2)// cantidad de cards x pagina

  const indexOfLastPack = currentPage * packsPerPage //8
  const indexOfFirstPack = indexOfLastPack - packsPerPage //0
  const currentPacks = allPacks.slice(indexOfFirstPack, indexOfLastPack)


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  useEffect(() => {
    dispatch(getPacks())
    dispatch(getServices())
  }, [dispatch])




  const handleFilterService = (e)=>{
    dispatch(filterPacksByService(e.target.value))
    setCurrentPage(1)

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
  function handleSortPrice(e) {
    e.preventDefault()
    console.log(e.target.value, "Soy el target")
    dispatch(orderByPrice(e.target.value))
    setCurrentPage(1)
    console.log(e.target.value, "TARGET VALUE")
    setOrder(`Ordenado.${e.target.value}`)// HACER PAGINADO
    //ESTADO
  }

  return (
    <div>
      <NavBarPaquetes />
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
            <option selected disabled>Ordenamiento </option>
            <option value='ascendente'>A-Z</option>
            <option value='descendente'>Z-A</option>
            {/* <option value='ascendenteW'>Min-Max precio</option>
            <option value='descendenteW'>Max-Min precio</option> */}
          </select>
          <select onChange={e => { handleSortPrice(e) }}>
          <option selected disabled>Precios</option>
          <option value='ascendente'>menor a mayor precio</option>
            <option value='descendente'>mayor a menor precio</option>
          </select>
          
          <select onChange={e => {handleFilterService(e)}}>
            <option selected disabled value = 'All'>Servicio</option>
            {allServicesP?.map(el => <option key = {el.id} value = {el.name}> {el.name} </option>)}
          </select>


          {/* <select onChange={e => { handlePrice(e) }}>
            <option selected disabled>Rango precio</option>
            {allServicesP.map((t) =>
              <option> {t.price} </option>)}
          </select> */}
          
        </div>
      </div>
      <div className="grid">
        {currentPacks?.map((packs) => {
          console.log(packs.services)
          return (
            <div className='item'>
              <CardPaquetes
                name={packs.name}
                price={packs.price}
                galery_image={packs.galery_image ? packs.galery_image : "https://www.dondeir.com/wp-content/uploads/2018/09/fiesta-1.jpg" }
                events={packs.events.map(e => e.name)}
                services={packs.services?.map(s => s.name)}
                id={packs.id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Paquetes;

