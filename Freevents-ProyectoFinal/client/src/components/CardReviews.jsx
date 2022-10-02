import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../actions";
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


const CardReviews = ({ clientId, providerId, comments, events, rating, name }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    return (

        <Card className={classes.root}>
            <div className='cont-comentarios'>
                <div className='parent'>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Reseña
                        </Typography>
                        <div className='user'>
                            <Avatar alt="Remy Sharp" src="https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg" />
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                        </div>
                        <Typography className={classes.pos} color="textSecondary">
                            Celebró su {events}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {comments}
                        </Typography>
                    </CardContent>
                    <Button size="small"> {rating} ★★★★★</Button>

                </div>
            </div>
        </Card>
    )
}

export default CardReviews