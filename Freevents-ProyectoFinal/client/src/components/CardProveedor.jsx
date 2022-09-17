import React from 'react'


const CardProveedor = ({name, address, email, phone_number })=>{
    
    return (
        <div >
            <h3>{name}</h3>
            <h5>Email: {email}</h5>
            <h5>Dirección:{address}</h5>
            <h5>Número de telefono:{phone_number}</h5>
        </div>
    )
}
export default CardProveedor

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