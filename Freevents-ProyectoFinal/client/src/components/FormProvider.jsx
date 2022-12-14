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

import { createProvider } from '../actions';
import { useDispatch } from "react-redux";

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function FormUser(){

    const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log(user.sub, "soy el id")
  
    const [ formularioEnviado, setFormularioEnviado ] = useState(false)
    const dispatch = useDispatch();
    console.log(user, "SOY EL USER DEL FORM PROVIDER")
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
                    address: '',
                    location: '',
                    postal_code: '',
                    cuit: '',
                    email: user.email,
                    phone_number: '',
                    logotype: '',
                    background_image: '',
                    galery_image: [],
                    events: [],
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
                    dispatch(createProvider(values));
                   
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
                            type="hidden"
                            onChange={handleChange}
                            />
                            {/* {touched.name && errors.name && < className='error'>{errors.name} */}
                            
                            
                        </div>
                        
                        <div className='inputs'>
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
                        </div>

                        <div className='inputs'>
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
                        </div>

                        <div className='inputs'> 
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
                        </div>

                        <div className='inputs'>
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
                        </div>
                        <div className='inputs'>
                            <input 
                            label="id"
                            value={values.sub}
                            type="hidden"
                            onChange={handleChange}
                            />

                        </div>

                        <div className='inputs'>


                        <input 
                            label="Email"
                            value={values.email}
                            type="hidden"
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

                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Número telefónico"
                                name= "phone_number"
                                value={values.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div>

                        {/* <div className='inputs'>
                        <Stack alignItems="center" spacing={2}>
                            <label htmlFor="">Agregra una foto</label>
                            <IconButton color="secondary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera />
                            </IconButton>
                        </Stack>
                        </div> */}

                        <div className='inputs'>
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
                        </div>
                        
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