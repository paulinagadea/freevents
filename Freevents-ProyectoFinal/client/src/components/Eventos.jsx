import React, {useEffect, useState} from "react";
import "./Eventos.css"
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {filterPacksByEvents} from '../actions'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const images = [
    {
      img: 'https://res.cloudinary.com/freevents/image/upload/v1664336833/Imagens/4_zvrbh4.jpg',
      title: 'Full Party',
      width: '100%',
    },
    {
      img: 'https://res.cloudinary.com/freevents/image/upload/v1664337849/Imagens/centros-de-mesa-para-15-anos-5-1280x720_eq0ck0.jpg',
      title: '15 Años',
      width: '100%',
    },
    {
      img: 'https://res.cloudinary.com/freevents/image/upload/v1664336904/Imagens/15_dauxrj.jpg',
      title: 'Graduaciones',
      width: '100%',
    },
    {
        img: "https://res.cloudinary.com/freevents/image/upload/v1664338129/Imagens/existe-la-edad-adecuada-para-casarse-la-ciencia-responde-cuando-es-mejor-contraer-matrimonio_ru4qmp.jpg",
        title: 'Matrimonios',
        width: '100%',
      },
      {
        img: 'https://res.cloudinary.com/freevents/image/upload/v1664336834/Imagens/5_tf4uaz.jpg',
        title: 'Despedidas',
        width: '100%',
      },
      {
        img: 'https://res.cloudinary.com/freevents/image/upload/v1664336904/Imagens/HOME6_xwhkcb.jpg',
        title: 'Cumpleaños',
        width: '100%',
      },
      {
        img: 'https://res.cloudinary.com/freevents/image/upload/v1664338320/Imagens/juegos-baby-shower-1-1280x720_jutfkw.jpg',
        title: 'Baby Showers',
        width: '100%',
      },
      {
        img: 'https://res.cloudinary.com/freevents/image/upload/v1664337985/Imagens/9668_1579698582_ideas-bodas-de-oro_cythau.jpg',
        title: 'Aniversarios',
        width: '100%',
      },
      
      
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%'
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
      opacity: 0.7,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      fontFamily: "Mollie",
      fontSize: "20px",
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   dispatch(filterPacksByEvents())
  // }, [dispatch])

  const handlefilterPacksByEvents = (e) => {
    navigate("/paquetes")
    dispatch(filterPacksByEvents(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={classes.root}>
    <Grid container spacing={1}>

    <Grid item xs={3}>
    <ButtonBase focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          value= "15_birthday_party"
          type= "image"
          href="/paquetes" //onClick={(e)=>{handlefilterPacksByEvents(e)}}  // ojo cambiar por filtro de evento
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
          href="/paquetes"  // ojo cambiar por filtro de evento
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
          href="/paquetes"  // ojo cambiar por filtro de evento
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
          href="/paquetes?event=graduaciones"  // ojo cambiar por filtro de eventoaaaaa
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
          href="/paquetes"  // ojo cambiar por filtro de evento
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
          href="/paquetes"  // ojo cambiar por filtro de evento
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
          href="/paquetes"  // ojo cambiar por filtro de evento
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
          href="/paquetes"  // ojo cambiar por filtro de evento
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