import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@mui/material';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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
});

export default function SimpleCard() {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <div>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Reseñas
                </Typography>
                <Typography variant="h5" component="h2">
                    Maria Montoya
                </Typography>
                <Avatar alt="Remy Sharp" src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/mujer-feliz_0.jpg.webp?itok=qVurZLE7" />
                <Typography className={classes.pos} color="textSecondary">
                    Celebró su 15 años
                </Typography>
                <Typography variant="body2" component="p">
                    "Gracias Perla eventos! todo salio como lo acordamos! Recomendado"
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">★★★★★</Button>
            </CardActions>
            </div>
            <div>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Reseñas
                </Typography>
                <Typography variant="h5" component="h2">
                    Mario Pergolini
                </Typography>
                <Avatar alt="Remy Sharp" src="https://static3.abc.es/media/summum/2021/10/01/maxi_iglesias-kXKH--620x349@abc.jpeg" />
                <Typography className={classes.pos} color="textSecondary">
                    Celebró su despedida de soltero
                </Typography>
                <Typography variant="body2" component="p">
                    "Recomiendo el paquete mayor de Twenty Events sin duda! Gracias !"
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">★★★★★</Button>
            </CardActions>
            </div>
            <div>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Reseñas
                </Typography>
                <Typography variant="h5" component="h2">
                    Mariano Sujeto 
                </Typography>
                <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/retrato-de-un-adolescente-de-a%C3%B1os-89599983.jpg" />
                <Typography className={classes.pos} color="textSecondary">
                    Celebró su Casamiento
                </Typography>
                <Typography variant="body2" component="p">
                    "Una noche soñada gracias freevents por hacerlo posible! Gracias de corazon !"
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">★★★★★</Button>
            </CardActions>
            </div>
        </Card>
    );
}