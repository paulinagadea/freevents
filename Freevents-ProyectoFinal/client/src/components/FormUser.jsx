import React from 'react'

export default  function Register  () {
  return (
    <div>
    <h1>Soy el componente client</h1>
   </div>
  )
}



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import Button from "@material-ui/core/Button"
// import { Alert } from "./Alert";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import './FormUser.css'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '36ch',
      
      
//     },
//   },
//   root1:{
//     width: '30ch',
  
//   }
// }));

// export default function Register() {
//   const { signup } = useAuth();
//   const classes = useStyles();

//   const [user, setUser] = useState({
//     name: '',
//     lastname: '',
//     password: '',
//     gender: '',
//     dni: '',
//     phone_number: '',
//     email: '',
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signup(user.email, user.password);
//       navigate("/home");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="#">
//       {error && <Alert message={error} />}
//         <h1> Regístrate</h1>
//       <form className={classes.root} noValidate autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <div className="#">
          
//           <TextField
//           label="Nombre"
//             type="nombre"
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//             variant="outlined"
//             placeholder="Coloca tu nombre"
//           />
//         </div>

//         <div className="#">
          
//           <TextField
//             label="Apellido"
//             type="apellido"
//             onChange={(e) => setUser({ ...user, lastname: e.target.value })}
//             variant="outlined"
//             placeholder="Coloca tu apellido"
//           />
//         </div>

//         <div className="#">
          
//           <TextField
//             label="DNI"
//             type="dni"
//             onChange={(e) => setUser({ ...user, dni: e.target.value })}
//             variant="outlined"
//             placeholder="Ingresa un documento de identidad"
//           />
//         </div>


//         <div className="#">
          
//           <TextField
//             label="Teléfono"
//             type="teléfono"
//             onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
//             className="#"
//             variant="outlined"
//             placeholder="Ingresa un número telefónico"
//           />
//         </div>

//         <div className="#">
          
//           <TextField
//           required
//           label="Email"
//             type="email"
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             variant="outlined"
//             placeholder="youremail@company.tld"
//           />
//         </div>

//         <div className="#">
          
//           <TextField
//             autoComplete="current-password"
//             htmlFor="password"
//             type="password"
//             name="password"
//             id="outlined-password-input"
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             label="Password"
//             variant="outlined"
//             placeholder="*************"
//           />
//         </div>

//         <Button
//             disableElevation
//             variant="contained" 
//             color="primary"
//             type="submit"
//           >
//           Register
//         </Button>
//       </form>
//       <p className="acount">
//         Already have an Account?
//         <Link to="/login" className="#">
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// }


//---------------------------------------------------------------
// import React from 'react';

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import { useDispatch, useSelector } from "react-redux";

// import { createUser } from '../actions';


// export default function Formulario(){

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [ input, setInput ] = useState({
//         name: '',
//         lastname: '',
//         password: '',
//         gender: '',
//         dni: '',
//         email: '',
//         phone_number: ''
//     })
    
//     function handleChange(e){
//         setInput({
//             ...input,
//             [e.target.name] : e.target.value
//         })
//         console.log(input)
//         console.log(e.target.value)
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         console.log(input, "1")
//         // despacho la acción
//         dispatch(createUser(input))
//         console.log(dispatch)

//         alert('Usuario creado')
//         // vacio mi estado
//         setInput({
//             name: '',
//             lastname: '',
//             password: '',
//             gender: '',
//             dni: '',
//             email: '',
//             phone_number: ''
//         })
        
        
//     }
    
//     return(
//         <div>

//             <Link to='/home'>
//                 <button>Volver</button>
//             </Link>

//             <h1 className="">Formulario usuario</h1>

//             <form onSubmit={(e) => handleSubmit(e)} >
//                 <div >
//                     <div>
//                         <label>Nombre:</label>
//                         <input type="text"
//                         value={input.name} 
//                         name="name"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>

//                     <div>
//                         <label>Apellido:</label>
//                         <input type="text"
//                         value={input.lastname} 
//                         name="lastname"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>
                    

//                     <div>
//                         <label>Contraseña:</label>
//                         <input type="text"
//                         value={input.password} 
//                         name="password"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>
                    
//                     <div>
//                         <label>Gnero:</label>
//                         <input type="text"
//                         value={input.gender} 
//                         name="gender"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>
                    
//                     <div>
//                         <label>DNI:</label>
//                         <input type="text" 
//                         value={input.dni} 
//                         name="dni"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>

//                    <div>
 //                      <label>Contraseña:</label>
//                        <input type="text"
//                        value={input.password} 
//                        name="password"
 //                      onChange={(e)=>handleChange(e)}/>
 //                   </div>
  //                  <div>
 //                       <label>DNI:</label>
 //                       <input type="text" 
 //                       value={input.dni} 
 //                       name="dni"
 //                       onChange={(e)=>handleChange(e)}/>
 //                   </div>

                    
//                     <div>
//                         <label>Email:</label>
//                         <input type="text" 
//                         value={input.email} 
//                         name="email"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>
                    
//                     <div>
//                         <label>Numero telefonico:</label>
//                         <input type="text" 
//                         value={input.phone_number} 
//                         name="phone_number"
//                         onChange={(e)=>handleChange(e)}/>
//                     </div>

//                 <button type='submit'>Crear</button>
//                 </div>
//             </form>
//         </div>
//     )
// }