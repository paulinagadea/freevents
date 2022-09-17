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
import f8 from "../imagenes/8.jpg";
import f4 from "../imagenes/4.jpg";
import f14 from "../imagenes/14.jpg";

const images = [
    {
      img: f4,
      title: 'Full Party',
      width: '20%',
    },
    {
      img: f14,
      title: '15 Años',
      width: '20%',
    },
    {
      img: f15,
      title: 'Egreso',
      width: '20%',
    },
    {
        img: f9,
        title: 'Matrimonio',
        width: '20%',
      },
      {
        img: f6,
        title: 'Despedida de Solter@s',
        width: '20%',
      },
      {
        img: f7,
        title: 'Cumpleaños',
        width: '20%',
      },
      {
        img: f16,
        title: 'Baby Shower',
        width: '20%',
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

// export default function LandingPage() {
//     return (
//         <div className="container">

//             <div className="galeria grid">
//                 <div className="evento">
//                     <img src={f9}></img>
//                     <h1>Matrimonios</h1>
//                 </div>
//                 <div className="evento">
//                     <img src={f15}></img>
//                     <h1>Egresos</h1>
//                 </div>
//                 <div className="evento">
//                     <img src={f7}></img>
//                     <h1>Cumpleaños</h1>
//                 </div>
//                 <div className="evento">
//                     <img src={f16}></img>
//                     <h1>Baby Showers</h1>
//                 </div>
//                 <div className="evento">
//                     <img src={f8}></img>
//                     <h1>15 Años</h1>
//                 </div>
//                 <div className="evento">
//                     {/* <Link to= {`/detail/${g.id}`}>               */}
//                     <img src={f4}></img>
//                     <h1>Full Party</h1>
//                     {/* </Link>  */}
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className="grip">
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          href="/paquetes"  // ojo cambiar por filtro de evento
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.img})`,
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
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}