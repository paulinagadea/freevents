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
            <h1 className='titulo'>Formulario de usuarios</h1>
            <Formik
                initialValues={{
                    // objeto con valores por defecto
                    name: '',
                    surname: '',
                    password: '',
                    gender: '',
                    dni: '',
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
                    if(!valores.surname){
                        errores.surname = 'Por favor ingresa un apellido';
                    } else if(!validacionLetras.test(valores.surname)){
                        errores.surname = 'El apellido solo puede contener letras'
                    }

                    //validacion contraseña
                    if(!valores.password){
                        errores.password = 'Por favor ingresa una contraseña';
                    } 
                    else if(!validacionContraseña.test(valores.password)){
                        errores.password = 'La contraseña debe contener minimo 8 caracteres'
                    }

                    //validacion dni
                    if(!valores.dni){
                        errores.dni = 'Por favor ingresa tu dni';
                    }
                    

                    //validacion correo
                    if(!valores.email){
                        errores.email = 'Por favor ingresa un email';
                    } else if(!validacionCorreo.test(valores.email)){
                        errores.email = 'Ingresa un email valido'
                    }
                    return errores
                }} 
                onSubmit={(values, {resetForm})=>{
                    // console.log(valores)
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
                                name= "surname"
                                value={values.surname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.surname && errors.surname && <div className='error'>{errors.surname}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                className=''
                                label="Contraseña"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.password && errors.password && <div className='error'>{errors.password}</div>}
                        </div>

                        <div className='inputs'>
                            <label>Género</label>
                            <label>
                                <Field type="radio" name="gender" value="masc"/>Masculino
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="fem"/> Femenino
                            </label>
                        </div>

                        <div className='inputs'>
                            <TextField
                                label="DNI"
                                type="number"
                                name= "dni"
                                value={values.dni}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.dni && errors.dni && <div className='error'>{errors.dni}</div>}
                        </div>

                        <div className='inputs'>
                            <TextField
                                label="Email"
                                type="email"
                                name= "email"
                                value={values.email}
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
                                value={values.phone_number}
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