import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, postOrder, getDetailsPacks, addLastOrder } from "../../actions";
import { useEffect } from "react";
import { Link, redirect, useNavigate, Redirect } from "react-router-dom";
import  handlePayment from '../Orden2'
// import styles from "../Orden/Orden.css"
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
  const [errors, setErrors] = useState({})
  // const clientis = useSelector((state) => state.order)
  // const ordencita = useSelector((state)=>state.ordencita)
  // const detalles = useSelector((state) => state.detail)

  let misDatos = JSON.parse(localStorage.getItem("order"));



  useEffect(() => {
    dispatch(getOrder());
    // dispatch(addLastOrder())
  }, [dispatch]);

  const [input, setInput] = useState({
    //<<<<QUITAR HARD>>>>
    clientId: "611ed52e-1bba-4c95-b76b-1eb43ae469f7",
    providerId: "a533aa44-67ed-4521-ad60-1c5d12fc927c",
    packServiceId: "243a718b-62e5-419f-abbc-20b923110dab",
    //<<<<QUITAR HARD>>>>
    event_date: "",
    event_address: "",
    price:misDatos[0].price

  });
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    // let validacion = (
    //   validate(input)
    // );
    // setErrors(validacion)
    const aux = await dispatch(postOrder(input));
    
    // console.log('que trae dispatch?', aux)
    handlePayment(aux)
    // navigate("/orden2")
    // <Redirect to = {{
    //    pathname: '/order',
    //    state: { aux.data.id}
    // }}/>
    setInput({
      event_date: "",
      event_address: "",
      price:""
    });
    // navigate('/PerfilUser')

    // function validate(input) {
    //   let errors = {};
    //   if (!input.date) {
    //     errors.date = "Fecha requerida"
    //   }
    //   // if (!input.direccion) {
    //   //   errors.direccion = "¿Donde quieres festejar tu evento?"
    //   // }
    //   return errors;
    // }
  }

  async function handlePayment(aux) {
    try {
      const preference = await (
        await fetch("http://localhost:3001/order/payment", {
          method: "post",
          body: JSON.stringify(aux.payload),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
    console.log('imprimimos preference', preference)

      var script = document.createElement("script");
      console.log("estamos .aquí", script)

      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.type = "text/javascript";
      script.dataset.preferenceId = preference.preferenceId;
      console.log("estamos aquí", script)

      script.setAttribute("data-button-label", "Pagar con Mercado Pago");
      
      const element = document.getElementById("mercado").innerHTML = "";

      const elementTwo = document.querySelector("#mercado")
      
      
      elementTwo.appendChild(script);

    }
    catch(error) {
      console.log(error);
    }};

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input, "input")
  }


  return (


    <div>
      <div>
        <h1>Detalles de tu Pedido</h1>
        <h3>Información de paquete</h3>
      <img
        className="cover"
        src={misDatos.map(i => i.galery_image)}
        alt=""
        width="100%"
        height="100%"
      ></img>
      {/* <div> */}
        <h1>{misDatos.map(n => n.name)}</h1>
        {/* <h1> $ {misDatos.map(p => p.price)}</h1> */}
      {/* </div> */}
      {/* <div>
      </div> */}
      <h1> Detalles del Paquete</h1>
      <h4> {misDatos.map(d => d.description)} </h4>

      <h1>Servicios incluidos: </h1>
      <h4> </h4>


      {/* <h3>Informacion del Cliente:</h3>
    
            <div>
                <h4>Nombre:</h4>
            </div>
            <div>
                <h1>Proveedor:</h1>
            </div> */}
        </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="released">Fecha del evento: </label>
            <input
              type="date"
              defaultValue={input.date}
              autoComplete="off"
              name="event_date"
              onChange={(e) => handleChange(e)}
            />
            {/* {errors.date && <p>{errors.date}</p>} */}
            <label>Dirección evento</label>
            <input
              type="text"
              defaultValue={input.direccion}
              name="event_address"
              onChange={(e) => handleChange(e)} />
            {/* {errors.direccion && <p>{errors.direccion}</p>} */}
            <label>Precio</label>
            <input
              type="text"
              defaultValue={input.price}
              // name="event_address"
              onChange={(e) => handleChange(e)} />
            {/* {errors.direccion && <p>{errors.direccion}</p>} */}
          </div>
          <div>
          </div>
        </form>
      </div>

      <button onClick={(e) => handleSubmit(e)}>Generar orden</button>
      <div id="mercado" className="mercado"></div>
      {/* <Link to={'/paquetes'}>
                    <button key={id}>Volver</button>
                </Link> */}
  
        </div>
  )
};

export default Orden;