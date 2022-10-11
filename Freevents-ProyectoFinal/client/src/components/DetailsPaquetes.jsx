import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, getDetailsPacks, addToOrder } from "../actions";
import { useEffect } from "react";
import NavbarHome from "./NavbarHome.jsx";
import { auth } from "../firebase";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button"
// import { Button } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";

const DetailsPaquetes = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const detalleP = useSelector((state) => state.detailPack);
  console.log("🚀 ~ file: DetailsPaquetes.jsx ~ line 16 ~ DetailsPaquetes ~ detalleP", detalleP)

  useEffect(() => {
    dispatch(getDetailsPacks(id));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, id]);

  const handleAddOrder = () => {
    dispatch(addToOrder(detalleP));
  };

  return detalleP && detalleP.id ? (
    <div>
      <NavbarHome />
      <div className="background">
        <div className="container">
          <img src={detalleP.galery_image} alt={detalleP.name} />

          <div>
            <h1 className="name">{detalleP.name}</h1>
            <h1 className="price">Precio: ${detalleP.price}</h1>
            <p>{detalleP.description}</p>
            <h1>Servicios que incluye:</h1>
            <p>{detalleP.services.map((el) => el.name + ", ")}</p>
            <h1>Eventos:</h1>
            <p>{detalleP.events.map((el) => el.name + ", ")}</p>

            <Link to={"/paquetes"}>
              <button key={id}> VOLVER </button>
            </Link>
            {detalleP.status==="enabled"?
            <Link to={isAuthenticated ? "/orden" : "/loginCliente"  }>
              <button onClick={handleAddOrder}> CONTRATAR </button>
            </Link>
            : 
            <Button disabled= {true} > INHABILITADO </Button>

            }
          </div>

        </div>
      </div>
    </div>
  ) : (
    <div>
      <img
        className="imgloading"
        alt="img not found"
        src="https://imgs.search.brave.com/YoaXWrA6MHXu0NYY-W7oWOrfJ87CVRMphSnCQNMaWx0/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9naWZp/bWFnZS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDQv/bG9hZGVyLWdpZi10/cmFuc3BhcmVudC1h/bmltYXRlZC03Lmdp/Zg.gif"
      />
      
    </div>
  );
};
export default DetailsPaquetes;
