import * as React from 'react';
import { Link } from "react-router-dom";
import './FormUser.css'
// import { ThemeProvider } from '@material-ui/core/styles'; //estilos de material ui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { positions } from '@mui/system';



import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function FormUser(){
    const [ formularioEnviado, setFormularioEnviado ] = useState(false)

    return(
        <div>
            <div className='boton_inicio'>
                <Button href="/home" color= "secondary" variant="outlined" 
                style={{
                    float:'left'
                }}>Inicio</Button>
            </div>
            <h1 className='titulo'>Formulario de proveedores</h1>
            <Formik
                initialValues={{
                    // objeto con valores por defecto
                    name: '',
                    description: '',
                    type_service: '',
                    image: ''
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
                    }

                    //validacion descripcion
                    if(!valores.description){
                        errores.description = 'Este campo es obligatorio';
                    }
                
                    return errores
                }} 
                onSubmit={(values, {resetForm})=>{
                    console.log(values)
                    resetForm({values : ''}) // para limpiar el formulario
                    console.log("formulario enviado")
                    setFormularioEnviado(true);
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
                            margin: 50
                        }}
                    >
                        {/* {console.log(errors)} */}
                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Nombre"
                                name= "name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name && <div className='error'>{errors.name}</div>}
                        </div>
                        
                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Descripcion"
                                name= "description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.description && errors.description && <div className='error'>{errors.description}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Tipo"
                                name="type_service"
                                value={values.type_service}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.type_service && errors.type_service && <div className='error'>{errors.type_service}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                color="secondary"
                                label="Imagen"
                                name="image"
                                value={values.image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.image && errors.image && <div className='error'>{errors.image}</div>}
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
                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                    position: 'absolute',
                                    top: 100,
                                    left: '40%',
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
        </div>
    )
}