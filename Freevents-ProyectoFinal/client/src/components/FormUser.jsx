import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";

export default function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    name: '',
    lastname: '',
    password: '',
    gender: '',
    dni: '',
    phone_number: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="#">
      {error && <Alert message={error} />}
        <h1> Regístrate</h1>
      <form
        onSubmit={handleSubmit}
        className="#"
      >
        <div className="#">
          <label
            htmlFor="name"
            className="#"
          >
            Nombre
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="#"
            placeholder="Coloca tu nombre"
          />
        </div>

        <div className="#">
          <label
            htmlFor="lastname"
            className="#"
          >
            Apellido
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            className="#"
            placeholder="Coloca tu apellido"
          />
        </div>

        <div className="#">
          <label
            htmlFor="dni"
            className="#"
          >
            DNI
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, dni: e.target.value })}
            className="#"
            placeholder="Coloca tu dni"
          />
        </div>


        <div className="#">
          <label
            htmlFor="phone_number"
            className="#"
          >
            Número telefónico
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
            className="#"
            placeholder="Coloca tu número telefónico"
          />
        </div>

        <div className="#">
          <label
            htmlFor="email"
            className="#"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="#"
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="#">
          <label
            htmlFor="password"
            className="#"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="#"
            placeholder="*************"
          />
        </div>

        <button className="#">
          Register
        </button>
      </form>
      <p className="#">
        Already have an Account?
        <Link to="/login" className="#">
          Login
        </Link>
      </p>
    </div>
  );
}


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