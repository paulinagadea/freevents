import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
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
  },
});

const CardProveedor = ({ name, address, email, phone_number, background_image, createdInDb, event }) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const tuvieja = useSelector((state) => state.providers)

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia

          className={classes.media}
          image={background_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          {/* <Typography variant="h5" component="h2">
            Free Events
            </Typography> */}
          <Typography variant="h5" component="h2" display="block" noWrap="false" >
            {name}
          </Typography>
          {/* <Typography className={classes.pos} color="textSecondary">
          Info:
         </Typography> */}
          <Typography variant="body2" component="p">
            ★★★
            {/* email: {email}
            <br />
            Dirección: {address}
            <br />
            Número de telefono: {phone_number}
            <br/> */}

            Eventos: {tuvieja.events?.map(e => e.name)}
            
            {/* <br />
            Eventos: {event?.length === 0 && "Desconocido" } {createdInDb? event?.map(el=>el.name):event.map(el=>el)} */}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* <CardActions>
        <Button size="small"> + Info</Button>
      </CardActions> */}
    </Card>
  )
}
export default CardProveedor
// <div >
//     <h3>{name}</h3>
//     <h5>Email: {email}</h5>
//     <h5>Dirección:{address}</h5>
//     <h5>Número de telefono:{phone_number}</h5>
// </div>

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });


// const CardProveedor = ()=>{
//     const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//     return (
//          <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Free Events
//         </Typography>
//         <Typography variant="h5" component="h2">
//           NAME PROVEEDOR
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           Info:
//         </Typography>
//         <Typography variant="body2" component="p">
//           email
//           <br />
//           {'"numero tel"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">dETAIL</Button>
//       </CardActions>
//     </Card>
//     )
// }
// export default CardProveedor