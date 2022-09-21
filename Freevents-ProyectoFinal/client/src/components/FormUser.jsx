import React from 'react';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import { createUser } from '../actions';


export default function Formulario(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ input, setInput ] = useState({
        name: '',
        lastname: '',
        password: '',
        gender: '',
        dni: '',
        email: '',
        phone_number: ''
    })
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
        console.log(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input, "1")
        // despacho la acción
        dispatch(createUser(input))
        console.log(dispatch)

        alert('Usuario creado')
        // vacio mi estado
        setInput({
            name: '',
            lastname: '',
            password: '',
            gender: '',
            dni: '',
            email: '',
            phone_number: ''
        })
        
        
    }
    
    return(
        <div>

            <Link to='/home'>
                <button>Volver</button>
            </Link>

            <h1 className="">Formulario usuario</h1>

            <form onSubmit={(e) => handleSubmit(e)} >
                <div >
                    <div>
                        <label>Nombre:</label>
                        <input type="text"
                        value={input.name} 
                        name="name"
                        onChange={(e)=>handleChange(e)}/>
                    </div>

                    <div>
                        <label>Apellido:</label>
                        <input type="text"
                        value={input.lastname} 
                        name="lastname"
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    
                    <div>
                        <label>Contraseña:</label>
                        <input type="text"
                        value={input.password} 
                        name="password"
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div>
                        <label>DNI:</label>
                        <input type="text" 
                        value={input.dni} 
                        name="dni"
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    
                    <div>
                        <label>Email:</label>
                        <input type="text" 
                        value={input.email} 
                        name="email"
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    
                    <div>
                        <label>Numero telefonico:</label>
                        <input type="text" 
                        value={input.phone_number} 
                        name="phone_number"
                        onChange={(e)=>handleChange(e)}/>
                    </div>

                <button type='submit'>Crear</button>
                </div>
            </form>
        </div>
    )
}