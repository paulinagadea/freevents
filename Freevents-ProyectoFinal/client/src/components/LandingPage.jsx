import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { /*Button,*/ Container } from "@mui/material";
import Button from "@mui/material/Button";
// import {Link} from "react-router-dom";
// import cabeza from "../imagenes/20.jpg";
// import f9 from "../imagenes/9.jpg";
// import f15 from "../imagenes/15.jpg";
// import f6 from "../imagenes/5.jpg";
// import f7 from "../imagenes/6.jpg";
// import f16 from "../imagenes/16.jpg";
// import f8 from "../imagenes/8.jpg";
// import f4 from "../imagenes/4.jpg";
// import f14 from "../imagenes/14.jpg";
// import theme from '../temaConfig'

export default function LandingPage() {
  return (
    <div className="encabezado">
      <Container /*sx={{mt:5.7}} maxWidth="xl"*/></Container>
      
        <Button
          size="large"
          variant="outlined"
          href={"/"}
          color="secondary"
          
        >
          BIENVENIDO
        </Button>
      
      <img
        className="cabeza"
        src={
          "https://res.cloudinary.com/freevents/image/upload/v1664336907/Imagens/foto-junta_oebqnh.jpg"
        }
        alt="img not found" /*width="1300px" height="800px"*/
      ></img>

      <div></div>
    </div>
  );
}
