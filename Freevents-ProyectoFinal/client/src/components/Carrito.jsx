import React from 'react'
import { actionTypes } from '../actions/index.js'
import CardPaquetes from './CardPaquetes'
import { useState, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartCard from './CartCard'

//import FavoriteBorder from '@material-ui/core/FavoriteBorder'
//import BookmarkBorderIcon from '@material-ui/core/FavoriteBorder'




//import { useAuth0 } from "@auth0/auth0-react";

//   import CartItem from "./CartItem";
//   import ProductItem from "./ProductItem";


const Carrito = () => {

  //const { user } = useAuth0();
  //window.localStorage()
  //setItem // getItem 
  const [carrite, setCarrite] = useState([]);
  //const { stringLocalStorage } = useContext()

  const dispatch = useDispatch()
  const packsP = useSelector((state) => state.packs)

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
        {packsP.map((pack) => (
          <CartCard key={pack.id} data={pack} addToCart={addToCart}
          />
        ))
        }
        {packsP.map((pack) => (
          <CardPaquetes key={pack.id} data={pack} addToCart={addToCart}
          />
        ))
        }
      </article>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {packsP.map((item, index) => (
          <CartCard key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  )
}

export default Carrito