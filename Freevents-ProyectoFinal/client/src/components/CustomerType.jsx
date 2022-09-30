import React from "react";
import "./Eventos.css"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import f4 from "../imagenes/30.jpg";
import f14 from "../imagenes/13.jpeg";
import { Grid } from "@material-ui/core";
import Container from '@mui/material/Container';
import './Details.css'

const images = [
    {
      img: 'https://res.cloudinary.com/freevents/image/upload/v1664336904/Imagens/30_j9u3yp.jpg',
      title: 'Necesito un Servicio',
      width: '100%',
    },
    {
      img: 'https://res.cloudinary.com/freevents/image/upload/v1664336903/Imagens/13_gevubc.jpg',
      title: 'Quiero prestar un Servicio',
      width: '100%',
    },
      
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 300,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
    <div className='opciones'>
    <div className={classes.root}>
    <Grid container spacing={3}>

    <Grid item xs={6}>
    <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/loginCliente"  // ojo cambiar por filtro de evento
          style={{
            width: images[0].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[0].img})`,
            }}
            />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              >
              {images[0].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </Grid>

    <Grid item xs={6}>
    <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/loginProveedor"  // ojo cambiar por filtro de evento
          style={{
            width: images[1].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[1].img})`,
            }}
            />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              >
              {images[1].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </Grid>

    </Grid>
    </div>
    </div>
    </Container>
  );
}

