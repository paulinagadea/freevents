import React from "react";
import "./Eventos.css"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import f9 from "../imagenes/9.jpg";
import f15 from "../imagenes/15.jpg";
import f6 from "../imagenes/5.jpg";
import f7 from "../imagenes/6.jpg";
import f16 from "../imagenes/16.jpg";
import f8 from "../imagenes/HOME5.jpeg";
import f4 from "../imagenes/4.jpg";
import f14 from "../imagenes/14.jpg";
import { Grid } from "@material-ui/core";

const images = [
    {
      img: f4,
      title: 'Full Party',
      width: '100%',
    },
    {
      img: f14,
      title: '15 Años',
      width: '100%',
    },
    {
      img: f15,
      title: 'Egresos',
      width: '100%',
    },
    {
        img: f9,
        title: 'Matrimonios',
        width: '100%',
      },
      {
        img: f6,
        title: 'Despedida de Solter@s',
        width: '100%',
      },
      {
        img: f7,
        title: 'Cumpleaños',
        width: '100%',
      },
      {
        img: f16,
        title: 'Baby Showers',
        width: '100%',
      },
      {
        img: f8,
        title: 'Aniversarios',
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
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
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
    <div className={classes.root}>
    <Grid container spacing={1}>

    <Grid item xs={3}>
    <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
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

    <Grid item xs={3}>
    <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
          style={{
            width: images[7].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[7].img})`,
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
              {images[7].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </Grid>

    <Grid item xs={6}>
        <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
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

        <Grid item xs={4}>
        <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
          style={{
            width: images[2].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[2].img})`,
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
              {images[2].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
</Grid>
        
        <Grid item xs={4}>
        <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
          style={{
            width: images[3].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[3].img})`,
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
              {images[3].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Grid>
        
        <Grid item xs={4}>
        <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
          style={{
            width: images[4].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[4].img})`,
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
              {images[4].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Grid>
        
        <Grid item xs={7}>
        <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
          style={{
            width: images[5].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[5].img})`,
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
              {images[5].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Grid>
        
        <Grid item xs={5}>
        <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/proveedores"  // ojo cambiar por filtro de evento
          style={{
            width: images[6].width,
          }}
          >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[6].img})`,
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
              {images[6].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Grid>  
    </Grid>
    </div>
  );
}