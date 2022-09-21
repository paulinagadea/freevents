import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cliente from '../imagenes/30.jpg'
import proveedor from '../imagenes/13.jpeg'
import './Details.css'
import { Link } from 'react-router-dom';



        
const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
    media: {
        height: 300,
    },
});
        
export default function MediaCard() {
    const classes = useStyles();
        
    return (
<div className='opciones'>
    <label></label>
<div className='opciones2'>
    <div >
        <a href='/userregister'><img  src={cliente} width="500px" height="300px"/></a>
    </div>
    <div>
        <label>Necesito un Servicio</label>
    </div>
</div>
<div className='opciones2'>
    <div>
        <a href='/providerregister'><img  src={proveedor} width="500px" height="300px"/></a>
    </div>
    <div>
        <label>Ofresco Servicio</label>
    </div>
</div>
</div>
        
        
                    
                    
      
        
    
    );
}
