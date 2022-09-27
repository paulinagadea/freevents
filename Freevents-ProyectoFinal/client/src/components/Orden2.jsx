import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch,} from "react-redux";
import { Link } from "react-router-dom";

export default function Orden2() {
    const dispatch = useDispatch()
    const orden = useSelector(state=>(state.ordenGenerada))

    let misDatos = JSON.parse(localStorage.getItem("order"));
    console.log(misDatos,"MIS DATOS 2")

    //BORRAR ESTO DE MIS DATOS. GUARDAR DATOS IMPORTANTES EN ORDEN GENERADA.
    //MENTIRA, MEJOR BORRAR ESTE COMPONENTE Y HACER TODO DESDE ORDEN, TAL VEZ NO SEA NECESARIO GUARDAR EN EL LOCAL STORAGE 
    //EL PAQUETE, MEJOR PROBAR UN ESTADO QUE SE LLENE EN EL DETAIL CUANDO TOCO EL BOTON (COMO HICE CON
    //ORDENGENERADA), EL ESTADO SE LLENARA CON ESE PAQUETE Y LUEGO DE HACER EL PAGO Y REDIRIGIRSE
    //A OTRO LADO SE BORRARA LO QUE HABIA EN ESE ESTADO.
    // HACER TAMBIEN QUE SE GENERE UN ESTADO CON LA ORDEN AL HACER CLICK EN EL BOTON DE COMPRAR(MP)
    //QUE LUEGO DE IRME DE ESA PANTALLA SE BORRARA, PEEEERO TAMBIEN AL MISMO TIEMPO HACER EN ESE MISMO
    //BOTON QUE SE AGREGUE ESA ORDEN AL LOCAL STORAGE. ESO NO DEBE BORRARSE NUNCA PORQUE LO USARA
    //EL COMPONENTE USER PARA VER SUS ORDENES.


    //PARA EL QUE LEA ESTO TRANQUI, NECESITABA PENSAR LA LOGICA PORQUE LAS COSAS
    // NO TENIAN SENTIDO, VOY A GIMNASIA Y LO APLICO
    //EJJEJEJEJ

  return (
      <div>
      <h1>Detalles de la compra</h1>
      <h3>Nombre:{misDatos[0].name}</h3>
      {/* <h3>{misDatos[0].galery_image.map(el=>el)}</h3> */}
      <h5>Descripción: {misDatos[0].description}</h5>
      <h4>Precio: {misDatos[0].price}</h4>
      <Link to = "/paquetes" >
      <button>Volver</button>
      </Link>
    
      
      

      <button>Comprar</button>
      </div>
   

  )
}
