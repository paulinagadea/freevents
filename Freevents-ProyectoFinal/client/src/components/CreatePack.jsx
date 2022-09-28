import * as React from 'react';
import { Link } from "react-router-dom";
import './CreatePack.css';
import foto from '../imagenes/creatupaquete.jpg'
// import { ThemeProvider } from '@material-ui/core/styles'; //estilos de material ui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { positions, width } from '@mui/system';

import { createPack } from '../actions';
import { useDispatch } from "react-redux";

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function FormUser(){
    const [ PaqueteCreado, setPaqueteCreado ] = useState(false)
    const dispatch = useDispatch();
    return(
        <div>
            <div className='boton_inicio'>
                <Button href="/home" color= "secondary" variant="outlined" 
                style={{
                    float:'left'
                }}>Inicio</Button>
            </div>
            <h1 className='titulo'>Crea Tú Paquete</h1>
            <Formik
                initialValues={{
                    // objeto con valores por defecto
                    name: '',
                    description: '',
                    price: '',
                    status_enabled: 'disabled',
                    galery_image: [],
                    
                }}
                validate={(valores)=>{
                    let errores = {};
                    // expresion regular para validacion de letras
                    let validacionLetras = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
                    // expresion regular para validacion de correos
                    // let validacionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                    // expresion regular para validacion de contraseñas
                    // let validacionContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

                    // validacion nombre
                    if(!valores.name){
                        errores.name = 'Por favor ingresa un nombre';
                    } else if(!validacionLetras.test(valores.name)){
                        errores.name = 'El nombre solo puede contener letras'
                    }

                    //validacion desciption
                    if(!valores.description){
                        errores.description = 'Este campo es obligatorio';
                    } 

                    //validacion price
                    if(!valores.price){
                        errores.price = 'Este campo es obligatorio';
                    } 

                    return errores
                }} 
                onSubmit={async (values, {resetForm})=>{
                    console.log(values, 'valores')
                    dispatch(createPack(values));
                    console.log(createPack, 'action')
                    resetForm({values : ''}) // para limpiar el formulario
                    console.log("Pack Creado")
                    setPaqueteCreado(true);
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                    setTimeout(()=>setPaqueteCreado(false), 5000)
                    
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
                            <TextField
                                color="secondary"
                                label="Nombre"
                                name= "name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.name && errors.name && <div className='error'>{errors.name}</div>}
                        </div>
                        
                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Descripción"
                                name= "description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.description && errors.description && <div className='error'>{errors.description}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Precio"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                            {touched.price && errors.price && <div className='error'>{errors.price}</div>}
                        </div>
  
                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Imagen"
                                name= "galery_image"
                                value={values.galery_image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />
                        </div>
                        
                        <div className='boton_form'>
                            <Button color= "secondary" type="submit" variant="outlined">Create</Button>
                        </div>
                        <div className='mensaje_alerta'>
                            {
                                PaqueteCreado && 
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
                                        }}>¡Se ha creado el paquete!</AlertTitle>
                                        
                                    </Alert>
                                </Stack>
                            }
                        </div>
                    </form>
                )
            } 
            </Formik>
            <div className='imagenForm'>

                <img src={foto} style={{margin: 30, width: 900}} alt="" />


            </div>
        </div>
    )
}