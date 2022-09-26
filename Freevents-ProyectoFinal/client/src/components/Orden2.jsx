import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch,} from "react-redux";
import { Link } from "react-router-dom";

export default function Orden2() {
    const dispatch = useDispatch()
    const orden = useSelector(state=>(state.ordenGenerada))

    let misDatos = JSON.parse(localStorage.getItem("order"));
    console.log(misDatos,"MIS DATOS 2")

  return (
      <div>
      <h1>ORDEN DE COMPRA</h1>
      <h3>{misDatos[0].name}</h3>
      {/* <h3>{misDatos[0].galery_image.map(el=>el)}</h3> */}
      <h3>Descripción: {misDatos[0].description}</h3>
      <h3>Precio: {misDatos[0].price}</h3>
      <Link to = "/paquetes" >
      <button>Volver</button>
      </Link>
    
      
      

      <button>Comprar</button>
      </div>
   

  )
}
