import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { addToFavs } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 800,
    maxWidth: 800,
    padding: 50,
    backgroundColor: "#fff",
    borderRadius: '10px',
    margin: '30px',
    border: '3px solid #D9C2BA',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      transition: ".6s",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 5px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: '45px',
    fontFamily: "Mollie",
    letterSpacing: "1px",
    color: '#735949',
    marginBottom: '10px',
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 500,
    width: 800,
    borderRadius: '10px',
  },
  content: {
    fontFamily: "Segoe UI",
    color: '#735949',
    letterSpacing: "1px",
    fontSize: '17px',
  },
  price: {
    fontFamily: "Mollie",
    color: '#735949',
    letterSpacing: "1px",
    fontSize: '35px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#D9C2BA',
    height: "50px",
    width: "180px",
    fontFamily: "Segoe UI",
    fontSize: '15px',
    border: 'none',
    borderRadius: '5px',
    letterSpacing: "1px",
    '&:hover': {
      color: '#fff',
    }
  }
});

const CardPaquetes = ({ name, price, galery_image, events, services, id }) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  const dispatch = useDispatch();

  const product = { name, price, events, services, id, galery_image };

  const handleAddToFavs = () => {
    // console.log(product, "PRODUCTARDO");
    dispatch(addToFavs(product));
  };

  return (
    <Card className={classes.root}>
    <Link style={{ textDecoration: "none" }} to={`/detailPaquete/${id}`}>
      {/* <CardActionArea> */}
      
        <CardMedia
          className={classes.media}
          image={galery_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} variant="h5" color="info" component="h2">
            {/* <Link style={{textDecoration:"none"}} to= '/proveedores'> */}
            <h3>{name}</h3>
            {/* </Link> */}
          </Typography>
          <h1 className={classes.price}>Precio: {price}</h1>
          <Typography
            variant="body2"
            color="primary"
            display="inline"
            component="p"
            className={classes.content}
          >
            Servicios que incluye: {services}
            <br />
            Eventos: {events}
            {/* <br /> */}
          </Typography>
        </CardContent>
        {/* <CardActions> */}
          {/* <Link to={`/detail/${packs.id}`}>
        
       
        </Link> */}
        {/* </CardActions> */}
      {/* </CardActionArea> */}
      </Link>
          <button className={classes.button} onClick={handleAddToFavs}>🧡 Añadir a favoritos</button>
    </Card>
  );
};

export default CardPaquetes;
