import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, postOrder, getDetailsPacks } from "../actions";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

//necesito info de cliente (de donde la saco?)
// info de proveedor
//info de paquete (localstorage)
// con etiqueta form direccion y fecha
// boton de generar orden de pago (post => guardado en perfil del user)
// ver como guardo esta info en el perfil de user

const Orden = () => {
  // let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const clientis = useSelector((state) => state.order)
  // const ordencita = useSelector((state)=>state.ordencita)
  // const detalles = useSelector((state) => state.detail)

  let misDatos = JSON.parse(localStorage.getItem("order"));
  // console.log(misDatos, "MIS DATOS")
  // console.log(clientis, "CLIENTIS")

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const [input, setInput] = useState({
    event_date: "",
    event_address: "",
    
  });
//   console.log(input, "input")
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input)
    
    let formulardo = {
        
      ...input,
      event_date: input.event_date,

      event_address: input.event_address,
    };
    console.log(input, "input")
    console.log(formulardo,"formulardo")
    dispatch(postOrder(input));
    alert("Orden creada");
    setInput({
      event_date: "",
      event_address: "",
    });
    // navigate('/PerfilUser')
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input, "input")
    // setErrors(validate({
    //     ...input,
    //     [e.target.name]:e.target.value
    // }))
    // console.log(input)
  }

  return (
    // return clientis ? (

    <div>
      <h1>Orden de Compra:</h1>
      <h3>Paquete info</h3>
      <div>
        <h4>Nombre:{misDatos[0].name}</h4>
        <h4>Precio: {misDatos[0].price}</h4>
      </div>
      {/* <h3>Informacion del Cliente:</h3>
            <div>
                <h4>Nombre:</h4>
                <h4>Documento de Identidad: 36401767</h4>
            </div>
            <div>
                <h1>Proveedor:</h1>
            </div> */}
      <div>
        {/* <h1>Direccion y fecha de evento</h1> */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="released">Fecha del evento: </label>
            <input
              type="date"
              autoComplete="off"
              
              onChange={(e) => handleChange(e)}

            />
            <label>Dirección evento</label>
            <input 
            type="text" 
         
            onChange={(e) => handleChange(e)} />
          </div>
        </form>
      </div>
      {/* <div>
                <h1>Detalle:</h1> */}
      {/* ACA GET ITEM DPS DE HACER LA LOGICA DE LOCALSTORAGE */}

      {/* </div> */}
      <button onClick={(e) => handleSubmit(e)}>Generar orden</button>
      {/* <Link to={'/paquetes'}>
                    <button key={id}>Volver</button>
                </Link> */}
    </div>

    //   ) : (
    //     <div>
    //         <h1>No Seleccionaste un paquete</h1>
    //     </div>
  );
};

export default Orden;
