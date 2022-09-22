import React from 'react'
<<<<<<< HEAD

const Carrito = () => {
  return (
    <div>Carrito</div>
=======
import { actionTypes } from '../actions/index.js'
import CardPaquetes from './CardPaquetes'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import CartCard from './CartCard'

//   import CartItem from "./CartItem";
//   import ProductItem from "./ProductItem";


const Carrito = () => {

  const [carrite, setCarrite] = useState([]);

  const dispatch = useDispatch()

  const { packs, cart } = carrite;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: actionTypes.addToCart, payload: id });
  };
  

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: actionTypes.removeAllFromCart, payload: id });
    } else {
      dispatch({ type: actionTypes.removeOneFromCart, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.clearCart });
  };
  


  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Paquetes</h3>
      <article className="box grid-responsive">
        {packs.map((pack) => (
          <CardPaquetes key={pack.id} data={pack} addToCart={addToCart}
          />
        ))
        }
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {carrite.map((item, index) => (
          <CartCard key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
>>>>>>> 0125256c7b952b9ae65514fac052a55aca048e52
  )
}

export default Carrito