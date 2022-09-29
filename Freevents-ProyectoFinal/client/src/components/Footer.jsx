import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="">
                freevents.app
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
        minHeight: '100vh',
        marginTop: "10vh",
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Freevents
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'¿Qué esperas para vivir el evento de tus sueños?'}
                    {'Casamientos, Egresos, Despedidas, Full party, Baby showers , 15 años, Cumpleaños, Aniversarios. Organiza tu evento en un simple "click!", '}
                </Typography>
                <Typography variant="body1">Estás a un solo paso de vivirlo, Anímate!.</Typography>
            </Container>
            
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Copyright />
                    <Typography variant="body1">Síguenos en todas nuestras redes.</Typography>

                </Container>
            </footer>
        </div>
    );
}