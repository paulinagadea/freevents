import React from "react";
import { Link}  from 'react-router-dom'
import { getData } from '../dataJSON';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// import {Link} from "react-router-dom";
// import image13 from "../imagenes/13.jpeg";
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 345,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 140,
    },
  });

const CardPaquetes = ({name, price, gallery_image, events, services, id}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          
          className={classes.media}
          image={gallery_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          
        <Typography variant="h5" component="h2">
            {/* <Link style={{textDecoration:"none"}} to= '/proveedores'> */}
            <h3>{name}</h3>
            {/* </Link> */}
        </Typography>
        <Typography variant="body2" component="p">
            Servicios que incluye: {services}
            <br/>
            Precio: {price}
            <br/>
            Eventos: {events}
        </Typography>
        </CardContent>
        <CardActions>
        <Link style={{textDecoration:"none"}} to= '/proveedores'>
        <Button size="small"> + Info</Button>
        </Link>
      </CardActions>
            </CardActionArea>
        </Card>
    )
}
// return(
//     <div>
//         <Link to={`/detail/${id}`}>
//         <img src={image13} alt=""/>
//         <h3> {name} </h3>
//         <div>
//         {type_service?.map((typeservice, index) => (
//                             <button key={index}>{typeservice}</button>
//                         ))}
//         </div>
//<div>
//    {events?.map((event, index) => (
//        <button key={index}>{event}</button>
//    ))}
//</div>
//         </Link>
//     </div>
// )
// }

export default CardPaquetes;