import React from "react";
import { Link}  from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { addToFavs } from "../actions";
import { useDispatch } from 'react-redux';



const CardPaquetes = ({id, status, event_date, event_address, price, pack_service, provider }) => {
  
    const dispatch = useDispatch()


    const order = {id, status, event_date, event_address, price, provider}



    return (
        <Card>
        <CardActionArea>
        <CardContent>
        <Typography variant="body2" component="p">
            Pack contratado : {pack_service}
            <br/>
        </Typography> 

        <Typography variant="body2" component="p">
            Precio : {price}
            <br/>
        </Typography> 


        <Typography variant="body2" component="p">
            Estado: {status}
            <br/>
        </Typography>

        <Typography variant="body2" component="p">
            Proveedor : {provider}
            <br/>
        </Typography> 

        <Typography variant="body2" component="p">
            Direccion : {event_address}
            <br/>
        </Typography> 

        

        </CardContent>
        
       
        </CardActionArea>
        </Card>
    )
}

export default CardPaquetes;