import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const mercadopago = require("mercadopago"); 

export default function Orden2() {
    // useEffect (() => {
      
    // })
    const orden = useSelector(state=>(state.ordenGenerada))

    function handleSubmit(e) {
      e.preventDefault();
      handlePayment();
    }

    async function handlePayment() {
      try {
        const preference = await (
          await fetch("http://localhost:3001/order/payment", {
            method: "post",
            body: JSON.stringify(orden),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();
      console.log('imprimimos preference', preference)
  
        var script = document.createElement("script");
        console.log("estamos aquí", script)
  
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


  return (
      <div>
      <h3>{orden.id}</h3>
      Orden2
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit" className="btn-mp">COMPRAR</button>
      </form>
      <div id="mercado" className="mercado"></div>
      </div>
  
  )
  }
