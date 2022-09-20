import React from "react";
import NavbarNuevo from "./NavbarNuevo";
import './Paquetes.css'
import CardPaquetes from './CardPaquetes'
import footer2 from "../imagenes/foterfoto.png";
import Paginado from './PaginadoPacks';

//import Container from '@mui/material/Container'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacks, orderByNamePack } from "../actions";


const Paquetes = () => {
  const dispatch = useDispatch();
  const allPacks = useSelector((state) => state.packs)
  console.log(allPacks, "TODOS LOS PACKS")
  const [ setOrder] = useState('')

  const [currentPage, setCurrentPage ] = useState(1) //pagina uno
  const [packsPerPage] = useState(5)// cantidad de cards x pagina

  const indexOfLastPack = currentPage * packsPerPage //8
  const indexOfFirstPack = indexOfLastPack - packsPerPage //0
  const currentPacks = allPacks.slice(indexOfFirstPack, indexOfLastPack)
  console.log(currentPacks, "PACKS ACTUALES")

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getPacks())
  }, [dispatch])

  console.log(setOrder,"order 1")
  function handleSort(e){
    e.preventDefault()
    console.log(e.target.value,"Soy el target")
    dispatch(orderByNamePack(e.target.value))
    setCurrentPage(1)
    console.log(e.target.value, "TARGET VALUE")
    setOrder(`Ordenado.${e.target.value}`)// HACER PAGINADO
    //ESTADO
  }
  console.log(setOrder, "order2")
  console.log(Paginado, "PAGINADO PACKS")

  return (
    <div>
      <NavbarNuevo />
      {/* <Container m={5} maxWidth="xs"> */}
      <img className="png" src={footer2} alt="" />
      <h1 className="Titulo-proveedores"> Paquetes de servicios </h1>
      <Paginado
      packsPerPage={packsPerPage}
      allProviders={allPacks.length}
      paginado={paginado}
      />
      <div>
        <div className="row">
        <select onChange={e => handleSort(e)}>
            <option selected disabled>Ordenamiento</option>
            <option value='ascendente'>A-Z</option>
            <option value='descendente'>Z-A</option>
            
          </select>

          <select>
            <option selected disabled>Servicios</option>
         
          </select>

        </div>
      </div>
      <div>
        {currentPacks?.map((packs)=>{
          console.log(packs.services)
          return (
            <div> 
              <CardPaquetes 
              name={packs.name}
              price={packs.price}
              gallery_image={packs.gallery_image ? packs.gallery_image  : <img src="https://www.dondeir.com/wp-content/uploads/2018/09/fiesta-1.jpg" alt="img not found"/>}
              events={packs.events.map(e=>e.name)}
              services={packs.services?.map(s=>s.name)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Paquetes;

