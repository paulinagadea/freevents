import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';
import { useDispatch,  } from "react-redux";//useSelector
import { Link } from "react-router-dom";
import { getOrder } from '../actions'
//import { getPacks, getServices} from "../actions";
import CardOrden from './CardOrden'


export default function PerfilUser() {
  const dispatch = useDispatch()
  // const { favs } = useSelector((state) => state.favs)
  //const ordenes = useSelector((state) => state.ordercita)
 // const providersO = useSelector((state)=>state.providers)
  


  useEffect(() => {
    dispatch(getOrder())
  }, [dispatch])

  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(useAuth0())
  if (isLoading) {
    return <div>Loading...</div>;
  }


  const y = JSON.parse(localStorage.getItem("favs"));
  //const data = auth.currentUser.providerData[0];
  const order = JSON.parse(localStorage.getItem("order"));

  return (
    // isAuthenticated?  (
    //   <div>

    //     <div><h1 className="portada"></h1></div>

    //     <img className="foto-perfil" src={user.picture} alt={user.name} />
    //     <h2> Bienvenido {user.name}</h2>
    //     <p>Email: {user.email}</p>
    //   </div>
    // )

    <div>
      <div>
        <div>
          <div>
            <h1 className="portada">Mi Perfil</h1></div>
          <img className="foto-perfil" src={user.picture ? user.picture : false} alt={user.name} />
          <h1 className="titulo">Bienvenido {user.name}</h1>
          <div className="info">
            <h3>Mis datos</h3>
            <div className="datos">
              <p>Nombre: {user.given_name}</p>
              <p>Apellido: {user.family_name}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
        {/* hacer logica comparando el uuid del auth0 con el id de cliente */}
        <div className="cont-info">
          <div className="info">
            <h3>MIS COMPRAS</h3>
            <div className="compras">
              {
                order?.map((ord) => {
                  return (
                    <div>
                      <CardOrden
                        pack_service={ord.pack_service ? ord.pack_service.name : false}
                        price={ord.price}
                        status={ord.status}
                        provider={ord.provider ? ord.provider.name : false}
                        event_address={ord.event_address? ord.event_address :false}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div> 
          <div className="info">
            <div className="compras">
          <h3>FAVORITOS</h3>
          {y ? y.map((f) => {
            return (
              <div>
                <ul>
                🤍 {f.name}
                </ul>
              </div>
            )
          }) : "No hay Favoritos"}
          </div>
        </div>
        </div>

        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  )
};

