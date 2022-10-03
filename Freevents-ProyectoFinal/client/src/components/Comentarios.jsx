import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@mui/material';
import './Comentarios.css'


const useStyles = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 1500,
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
    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className='cont-comentarios'>
            <div className='parent'>

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Reseña
                    </Typography>
                    <div className='user'>
                    <Avatar  alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/retrato-de-un-adolescente-de-a%C3%B1os-89599983.jpg" />
                    <Typography variant="h5" component="h2">
                        María Montoya
                    </Typography>
                    </div>
                    <Typography className={classes.pos} color="textSecondary">
                        Celebró su 15 años
                    </Typography>
                    <Typography variant="body2" component="p">
                        "Gracias Perla eventos! Todo salió como lo acordamos! Recomendado"
                    </Typography>
                    <Button size="small">★★★★★</Button>
                </CardContent>

            </div>
            <div className='parent'>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Reseña
                    </Typography>
                    <div className='user'>
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnNXkpbtGHc9aAOCt1Nzh5QlMJD8TT1Vd2A&usqp=CAU" />
                    <Typography variant="h5" component="h2">
                        Dona Moly
                    </Typography>
                    </div>
                    <Typography className={classes.pos} color="textSecondary">
                        Celebró su despedida de soltero
                    </Typography>
                    <Typography variant="body2" component="p">
                        "Recomiendo el paquete mayor de Twenty Events sin duda! Gracias!"
                    </Typography>
                    <Button size="small">★★★★★</Button>
                </CardContent>

            </div>
            <div className='parent'>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Reseña
                    </Typography>
                    <div className='user'>
                    <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                    <Typography variant="h5" component="h2">
                        Mariano Sujeto
                    </Typography>
                    </div>
                    <Typography className={classes.pos} color="textSecondary">
                        Celebró su casamiento
                    </Typography>
                    <Typography variant="body2" component="p">
                        "Una noche soñada, gracias Freevents por hacerlo posible! Gracias de corazón!"
                    </Typography>
                    <Button size="small">★★★★★</Button>
                    </CardContent>
            </div>
            <div className='parent'>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Reseña
                    </Typography>
                    <div className='user'>
                    <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/9d/3b/4e/9d3b4ec31d49f9fec5ce0703dc79e666.jpg" />
                    <Typography variant="h5" component="h2">
                        Odin Biagio
                    </Typography>
                    </div>
                    <Typography className={classes.pos} color="textSecondary">
                        Celebró su egreso
                    </Typography>
                    <Typography variant="body2" component="p">
                        "Comida de lujo, servicio impecable, todo salió como acordamos. Recomiendo."
                    </Typography>
                    <Button size="small">★★★★★</Button>
                </CardContent>
                </div>      
            </div>
        </Card>
    );
}