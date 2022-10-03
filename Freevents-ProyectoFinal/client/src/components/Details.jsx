import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import NavbarHome from "./NavbarHome.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetails,
  clearDetails,
  getEvents,
  getDetailsPacks,
  getPacks,
} from "../actions";
import { useEffect } from "react";
import { Container } from "@material-ui/core";
import CardPaquetes from "./CardPaquetes";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Details = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const myservice = useSelector((state) => state.detail);
  console.log(
    "🚀 ~ file: Details.jsx ~ line 15 ~ Details ~ myservice",
    myservice
  );
  const evente = useSelector((state) => state.events);
  const detallePack = useSelector((state) => state.detailPack);
  const packs = useSelector((state) => state.packs);
  const nombrepack = packs.name;
  console.log(
    "🚀 ~ file: Details.jsx ~ line 20 ~ Details ~ nombrepack",
    nombrepack
  );
  console.log("🚀 ~ file: Details.jsx ~ line 19 ~ Details ~ packs", packs);
  const auxProvId = myservice.id;
  console.log(
    "🚀 ~ file: Details.jsx ~ line 21 ~ Details ~ auxProvId",
    auxProvId
  );
  const auxPackId = packs.map((idPack) => idPack.providerId);
  console.log(
    "🚀 ~ file: Details.jsx ~ line 25 ~ Details ~ auxPackId",
    auxPackId
  );
  const verificacion = auxPackId.includes(auxProvId);
  const coincidencia = packs.filter((e) => e.providerId === auxProvId);
  console.log(
    "🚀 ~ file: Details.jsx ~ line 27 ~ Details ~ coincidencia",
    coincidencia
  );

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getDetails(id));
    dispatch(getDetailsPacks(id));
    dispatch(getPacks(id));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, id]);

  return myservice && myservice.id ? (
    <div>
      <NavbarHome />
      <div className="imgdetail">
        <img
          src={myservice.background_image}
          className="cover"
          alt={myservice.nombre}
          width="100%"
          height="100%"
        ></img>
      </div>
      <img
        className="imgdetail2"
        src={myservice.logotype}
        alt={myservice.nombre}
        width="200px"
        height="200px"
      ></img>
      <Container fixed>
        <div className="grit">
          <div className="grid4 ">
            <div className="grid2 ">
              <div className="imgdetail1">
                {myservice.galery_image.map((i) => {
                  return (
                    <div>
                      <img
                        className="imgdetail3"
                        src={i}
                        alt={myservice.nombre}
                        width="600px"
                        height="600px"
                      ></img>
                    </div>
                  );
                })}
                <div className="stats">
                  <h3 className="statstext">Direccion: {myservice.address}</h3>
                  <h3 className="statstext">CUIT: {myservice.cuit}</h3>
                  <h3 className="statstext">E-mail: {myservice.email}</h3>
                  <h3 className="statstext">
                    Telefono: {myservice.phone_number}
                  </h3>
                  <h3 className="statstext">
                    Codigo postal: {myservice.postal_code}
                  </h3>

                  {/* {evente.map((e) => {
                    return <h3 className="statstext">{e.name},</h3>;
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Grid container justifyContent="center" alignItems="stretch">
          <div>
            {verificacion ? (
              coincidencia.map((packs) => {
                return (
                  <div className="item">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/detailPaquete/${packs.id}`}
                    >
                      <CardPaquetes
                        name={packs.name}
                        price={packs.price}
                    
                        galery_image={
                          packs.galery_image
                            ? packs.galery_image
                            : "https://www.dondeir.com/wp-content/uploads/2018/09/fiesta-1.jpg"
                        }
                      />
                    </Link>
                  </div>

                  // <Button href={`/detailPaquete/${e.id}`}>
                  // <div>
                  // <p>{e.name}</p>
                  // <p>{e.description}</p>
                  // <p>{e.price}</p>
                  // </div>
                  // {/* </Link> */}
                  // </Button>
                );
              })
            ) : (
              <Typography>No hay paquetes</Typography>
            )}
          </div>
        </Grid>
      </Container>

      <div className="conteinerd">
        <div key={myservice.id}>
          <div className="container-detail">
            <div className="titulo">
              <h1>{myservice.nombre}</h1>
            </div>
          </div>
          <div>
          <Button
              color="secondary"
              variant="outlined"
              href={"/proveedores"}
              key={id}
            >
              Volver
            </Button>
           
          </div>
        </div>
      </div>

      {/* <div>
                        {
                            detallePack && detallePack.id ? (
                                <div><h1>detalles</h1></div>
                            ) : <h1>No hay nada </h1>            
                        }
                    </div> */}
    </div>
  ) : (
    <div>
      <p>Loading...</p>
      <img
        className="imgloading"
        alt="img not found"
        src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif"
      />
    </div>
  );
};

export default Details;
