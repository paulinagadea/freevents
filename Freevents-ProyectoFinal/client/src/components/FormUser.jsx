



import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import './FormProvider.css'
import foto from '../imagenes/FOTOCONFREEVENTS.jpg'
// import { ThemeProvider } from '@material-ui/core/styles'; //estilos de material ui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { positions, width } from '@mui/system';

import { createUser } from '../actions';
import { useDispatch } from "react-redux";

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function FormUser(){

    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(useAuth0, "OBJETO GOOGLE USER")
    // console.log(user.sub, "soy el id")
  
    const [ formularioEnviado, setFormularioEnviado ] = useState(false)
    const dispatch = useDispatch();
    // console.log(user)
    if (isLoading) {
        return <div>Loading...</div>;
      }
      
    return(
        isAuthenticated && (
        <div>
            <div className='boton_inicio'>
                <Button href="/" color= "secondary" variant="outlined" 
                style={{
                    float:'left'
                }}>Inicio</Button>
            </div>
            <h1 className='titulo'>Si tu información de contacto está llena tenes más posibilidades de vender</h1>
            <Formik
                initialValues={{
                    // objeto con valores por defecto
                    name: user.name,
                    // lastname: '',
                    // password: '',
                    // gender: '',
                    // dni: '',
                    email: user.email,
                    // phone_number: '',
                    sub:user.sub

                    
                }}
                validate={(valores)=>{
                    let errores = {};
                    // expresion regular para validacion de letras
                    let validacionLetras = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
                    // expresion regular para validacion de correos
                    let validacionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                    // expresion regular para validacion de contraseñas
                    let validacionContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

                    // validacion nombre
                    if(!valores.name){
                        errores.name = 'Por favor ingresa un nombre';
                    } else if(!validacionLetras.test(valores.name)){
                        errores.name = 'El nombre solo puede contener letras'
                    }

                    //validacion apellido
                    if(!valores.address){
                        errores.address = 'Este campo es obligatorio';
                    } 

                    //validacion location
                    if(!valores.location){
                        errores.location = 'Este campo es obligatorio';
                    } 

                    //validacion postal_code
                    if(!valores.postal_code){
                        errores.postal_code = 'Este campo es obligatorio';
                    }
                    
                    //validacion cuit
                    if(!valores.cuit){
                        errores.cuit = 'Este campo es obligatorio';
                    }

                    //validacion correo
                    if(!valores.email){
                        errores.email = 'Por favor ingresa un email';
                    } else if(!validacionCorreo.test(valores.email)){
                        errores.email = 'Ingresa un email valido'
                    }
                    return errores
                }} 
                onSubmit={async (values, {resetForm})=>{
                    console.log(values, 'valores')
                    dispatch(createUser(values));
                    console.log(createUser, 'action')
                    resetForm({values : ''}) // para limpiar el formulario
                    console.log("formulario enviado")
                    setFormularioEnviado(true);
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                    setTimeout(()=>setFormularioEnviado(false), 5000)
                    
                }}
            >
            
            {
                // destructuro la propiedad handle submit
                // propiedad values permite acceder a los valores del input
                // handle blur -> cada vez que se hace click afuera del form, lo valida
                ({values, handleChange, handleSubmit, handleBlur, errors, touched})=> (
                    <form onSubmit={handleSubmit} style={{
                            float:'left',
                            margin: 50,
                        }}
                        sx={{ }}
                    >
                        {/* <label>
                    <Field type="checkbox" name="event" />
                     {`${[values.event]}`}
                        </label> */}
          

                        {/* {console.log(errors)} */}
                        <div className='inputs'>
                            {/* <TextField
                                color="secondary"
                                label="Nombre"
                                name= "name"
                                value={values.name}
                                type="hidden"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            /> */}
                            <input 
                            label="Nombre"
                            value={values.name}
                            type="text"
                            onChange={handleChange}
                            />
                            {/* {touched.name && errors.name && < className='error'>{errors.name} */}
                            
                            
                        </div>
                        
                        {/* <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Direccion"
                                name= "address"
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.address && errors.address && <div className='error'>{errors.address}</div>}
                        </div> */}

                        {/* <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Location"
                                name="location"
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.location && errors.location && <div className='error'>{errors.location}</div>}
                        </div> */}

                        {/* <div className='inputs'> 
                            <TextField
                                color="secondary"
                                label="postal_code"
                                name="postal_code"
                                value={values.postal_code}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.postal_code && errors.postal_code && <div className='error'>{errors.postal_code}</div>}
                        </div> */}

                        {/* <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="cuit"
                                name= "cuit"
                                value={values.cuit}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.cuit && errors.cuit && <div className='error'>{errors.cuit}</div>}
                        </div> */}
                        <div className='inputs'>
                            <input 
                            label="id"
                            value={values.sub}
                            type="text"
                            onChange={handleChange}
                            />

                        </div>

                        <div className='inputs'>


                        <input 
                            label="Email"
                            value={values.email}
                            type="text"
                            onChange={handleChange}
                            />
                            {/* <TextField
                                color="secondary"
                                label="Email"
                                type="email"
                                name= "email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.email && errors.email && <div className='error'>{errors.email}</div>} */}
                        </div>

                        {/* <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Número telefónico"
                                name= "phone_number"
                                value={values.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div> */}

                        {/* <div className='inputs'>
                        <Stack alignItems="center" spacing={2}>
                            <label htmlFor="">Agregra una foto</label>
                            <IconButton color="secondary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera />
                            </IconButton>
                        </Stack>
                        </div> */}

                        {/* <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Logo"
                                name= "logotype"
                                value={values.logotype}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div>

                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Fondo"
                                name= "background_image"
                                value={values.background_image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div>

                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Galeria de imagenes"
                                name= "galery_image"
                                value={values.galery_image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div> */}
                        
                        {/* <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Eventos"
                                name= "events"
                                value={[values.events]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div> */}

<div className='check' role="group" aria-labelledby="checkbox-group">
             <div>
            <label>
              <Field type="checkbox" name="events" value="bachelor_party" />
              bachelor_party
            </label>
                </div>               
            <div>
            <label>
              <Field type="checkbox" name="events" value="wedding" />
              wedding
            </label>
                </div>
            <div>
            <label>
              <Field type="checkbox" name="events" value="anniversary" />
              anniversary
            </label>
                </div>
            <div>
                </div>
              <Field type="checkbox" name="events" value="full_party" />
              full_party
            <label>
            </label>
            <div>
            <label>
              <Field type="checkbox" name="events" value="baby_shower" />
              baby_shower
            </label>
                </div>
            <div>
            <label>
              <Field type="checkbox" name="events" value="15_birthday_party" />
              15_birthday_party
            </label>
                </div>
            <div>
            <label>
              <Field type="checkbox" name="events" value="graduation" />
              graduation
            </label>
                </div>
            <div>
            <label>
              <Field type="checkbox" name="events" value="birthday_party" />
              birthday_party
            </label>
                </div>
          </div>
                        

                        <div className='boton_form'>
                            <Button color= "secondary" type="submit" variant="outlined">Enviar</Button>
                        </div>
                        <div className='mensaje_alerta'>
                            {
                                formularioEnviado && 
                                // <p>Formulario enviado con exito</p>
                                <Stack 
                                sx={{
                                    borderRadius: 5,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                    position: 'absolute',
                                    top: 20,
                                    left: '20%',
                                    zIndex: 'tooltip',
                                  }}
                                    
                                >
                                    <Alert severity="success" 
                                        style={{
                                            height: 200,
                                            width: 500
                                        }}
                                    >
                                        <AlertTitle style={{
                                            fontSize: 50
                                        }}>¡Registro exitoso!</AlertTitle>
                                        
                                    </Alert>
                                </Stack>
                            }
                        </div>
                    </form>
                )
            } 
            </Formik>
            <div className='imagenForm'>

                <img src={'https://res.cloudinary.com/freevents/image/upload/v1664339795/Imagens/HOME5_sltssh.png'} style={{margin: 20, width: 800}} alt="" />


            </div>
        </div>
    ))
}








// import React from 'react'

// export default  function Register  () {
//   return (
//     <div>
//     <h1>Soy el componente client</h1>
//    </div>
//   )
// }



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


// ---------------------------------------------------------------
// import React from 'react';

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import { useDispatch, useSelector } from "react-redux";

// import { createUser } from '../actions';


// export default function Formulario(){

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { user, isAuthenticated, isLoading } = useAuth0();
//     console.log(user.name, "soy el user name")

    

//     const [ input, setInput ] = useState({
//         name: user.name,
//         lastname: '',
//         password: '',
//         gender: '',
//         dni: '',
//         email: user.email,
//         phone_number: '',
//         sub:user.sub
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
//             phone_number: '',
//             sub:''
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
//                       <label>Contraseña:</label>
//                        <input type="text"
//                        value={input.password} 
//                        name="password"
//                       onChange={(e)=>handleChange(e)}/>
//                    </div>
//                    <div>
//                        <label>DNI:</label>
//                        <input type="text" 
//                        value={input.dni} 
//                        name="dni"
//                        onChange={(e)=>handleChange(e)}/>
//                    </div>

                    
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