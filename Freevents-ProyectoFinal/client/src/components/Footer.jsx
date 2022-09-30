import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import './Footer.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="">
                Freevents
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="img">
                <div className="content">
                <Typography variant="h2" component="h1">
                    Freevents
                </Typography>
                <Typography variant="h5" component="h2">
                    {'¿Qué esperas para vivir el evento de tus sueños? '}
                    {'Casamientos, egresos, despedidas, full party, baby showers, 15 años, cumpleaños, aniversarios. Organiza tu evento en un simple "click!"'}
                </Typography>
                <Typography variant="h5" component="h2">Estás a un solo paso de vivirlo, ¡Anímate!</Typography>
                </div>
            </div>
            
            <div className="container-footer">
                    <div className="footer-completo">
                        <a href={"https://github.com/paulinagadea/freevents"}>
                        <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" height="40px" on></img>
                        </a>
                        <a href={"https://www.facebook.com/"}>
                        <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336903/Imagens/Facebook_v7270n.png'} alt="not found" height="40px"></img>
                        </a>
                        <a href={"https://twitter.com"}>
                        <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336903/Imagens/twitter_mqtqdf.png'} alt="not found" height="40px"></img>  
                        </a>
                        <a href={"https://www.instagram.com/"}>
                        <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/instagram_ed9xa5.png'} alt="not found" height="40px"></img>  
                        </a>
                    </div>
                    <Copyright />
            </div>
        </div>
    );
}