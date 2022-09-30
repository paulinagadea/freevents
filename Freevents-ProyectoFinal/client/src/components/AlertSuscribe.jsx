// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Paper from '@material-ui/core/Paper';
// import Draggable from 'react-draggable';

// function PaperComponent(props) {
//     return (
//         <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
//             <Paper {...props} />
//         </Draggable>
//     );
// }

// export default function DraggableDialog() {
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//                 Open form dialog
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 PaperComponent={PaperComponent}
//                 aria-labelledby="draggable-dialog-title"
//             >
//                 <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
//                     Logueate
//                 </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Para poder comentar debes loguearte, te llevará solo unos segundos.
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button autoFocus onClick={handleClose} color="primary">
//                         Cancelar
//                     </Button>
//                     {/* aca poner ruta a log in  */}
//                     <Button onClick={handleClose} color="primary">
//                         Loguearme
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }