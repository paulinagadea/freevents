import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
//import { useSelector, useDispatch } from 'react-redux';
//import { getProviders } from '../actions';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
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
    height: 200,
  },
});

const CardProveedor = ({ name, address, email, phone_number, background_image, createdInDb, event }) => {
  const classes = useStyles();
  //const eventos = useSelector((state) => state.providers)

  return (
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={background_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2" display="block" noWrap="false" >
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            ★★★
            {/* email: {email}
            <br />
            Dirección: {address}
            <br />
            Número de telefono: {phone_number}
            <br/> */}
            {/* Eventos: {eventos.events?.map(e => e.name)} */}
            {/* <br />
            Eventos: {event?.length === 0 && "Desconocido" } {createdInDb? event?.map(el=>el.name):event.map(el=>el)} */}
          </Typography>
        </CardContent>
     
      {/* <CardActions>
        <Button size="small"> + Info</Button>
      </CardActions> */}
    </Card>
  )
}
export default CardProveedor
