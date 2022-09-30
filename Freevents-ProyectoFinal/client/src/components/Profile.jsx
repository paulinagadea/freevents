import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getOrder} from '../actions'
import { getPacks, getServices} from "../actions";
import CardOrden from './CardOrden'
// import Navigate from 'react-router-dom'

export const Profile = () => {
  const dispatch = useDispatch()
  const { favs } = useSelector((state) => state.favs)
  const ordenes = useSelector((state) => state.ordercita)
  console.log(ordenes, 'orden')

  
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const {email, name, }
    // console.log(first)
    console.log(useAuth0())
    // const navigate = Navigate();
  if (isLoading) {
    return <div>Loading...</div>;

  }
  
  // let y = JSON.parse(localStorage.getItem(favs));
  // let favsFromLocalStorage = y ? y : "No hay Favoritos"
  // const data = auth.currentUser.providerData[0];

  return (
    // isAuthenticated && (
    //   <div>

    //     <div><h1 className="portada"></h1></div>

    //     <img className="foto-perfil" src={user.picture} alt={user.name} />
    //     <h2> Bienvenido {user.name}</h2>
    //     <p>Email: {user.email}</p>
    //   </div>
    // )
    
  <div>
    {/* <Chip avatar={<Avatar src={data.photoURL} alt="" />} /> */}
    <div>
      <div>
          <div><h1 className="portada">Portada</h1></div>

          <img className="foto-perfil" src={user.picture} alt={user.name} />
          <h1 className="titulo">Bienvenido {user.name}</h1>
      </div>
      {/* hacer logica comparando el uuid del auth0 con el id de cliente */}
      <div className="cont-info">
        <div className="info">
          <h3>Mis compras</h3>
          <div className="compras">
            {
              ordenes?.map((ord) =>{
                return(
                  <div>
                    <CardOrden
                      pack_service={ord.pack_service ? ord.pack_service.name : <p>Campo incompleto</p>}
                      price = {ord.price}
                      status={ord.status}
                      provider = {ord.provider ? ord.provider.name : <p>No tiene proveedor</p>}
                      event_address={ord.event_address}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="info">
          <h3>Mis datos</h3>
          <div className="datos">
            <p>Nombre: {user.given_name}</p>
            <p>Apellido: {user.family_name}</p>
            <p>Email: {user.email}</p>
            </div>
        </div>
      </div>

    {/* <div>
        {favs?.map((f) => {
            return (
                <div>
                    {f.name}
                </div>
            )
        })}

    </div> */}

    <Link to="/home">
        <button>Volver</button>
    </Link>

    </div>
  </div>
  )

      
};

