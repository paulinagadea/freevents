import * as React from 'react';
import { Link } from "react-router-dom";
import './FormUser.css'
// import { ThemeProvider } from '@material-ui/core/styles'; //estilos de material ui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function FormUser(){
    const [ formularioEnviado, setFormularioEnviado ] = useState(false)

    return(
        <div>
            <Link to="/home">
                <button>Inicio</button>
            </Link>
            <h1 className='titulo'>Formulario de proveedores</h1>
            <Formik
                initialValues={{
                    // objeto con valores por defecto
                    name: '',
                    adress: '',
                    location: '',
                    postal_code: '',
                    cuit: '',
                    email: '',
                    phone_number: ''
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
                    if(!valores.adress){
                        errores.adress = 'Por favor ingresa un apellido';
                    } else if(!validacionLetras.test(valores.surname)){
                        errores.adress = 'El apellido solo puede contener letras'
                    }

                    //validacion location
                    if(!valores.location){
                        errores.location = 'Este campo es obligatorio';
                    } 

                    //validacion postal_code
                    if(!valores.postal_code){
                        errores.dni = 'Este campo es obligatorio';
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
                onSubmit={(valores, {resetForm})=>{
                    // console.log(valores)
                    resetForm() // para limpiar el formulario
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
                    <form onSubmit={handleSubmit}>
                        {/* {console.log(errors)} */}
                        <div className='inputs'>
                            <TextField
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
                                label="Apellido"
                                name= "adress"
                                value={values.adress}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.adress && errors.adress && <div className='error'>{errors.adress}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                className=''
                                label="Location"
                                name="location"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.location && errors.location && <div className='error'>{errors.location}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                className=''
                                label="postal_code"
                                name="postal_code"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.postal_code && errors.postal_code && <div className='error'>{errors.postal_code}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                label="cuit"
                                type="number"
                                name= "cuit"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.cuit && errors.cuit && <div className='error'>{errors.cuit}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                label="Email"
                                type="email"
                                name= "email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                label="Número telefónico"
                                type="number"
                                name= "phone_number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        
                        <div>
                            <Button type="submit" variant="outlined">Enviar</Button>
                            {formularioEnviado && <p>Formulario enviado con exito</p>}
                        </div>
                    </form>
                )
            } 
            </Formik>
        </div>
    )
}