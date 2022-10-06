// import React from 'react'

// export default function FormularioProveedor () {
//   return (
//     <div>FormularioProveedor</div>
//   )
// }


import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { createProvider, getAllClients } from '../actions';
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './Formularios.css';

export default function FormularioProveedor() {
  // console.log( "recien entro")


  const { user, isAuthenticated } = useAuth0();

  
    // console.log(user.name, "traje el auth0")
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    // console.log(user.name, "primer name")
    
    

    const [proveedor, setInputProveedor] = useState({
      name: "",
      address: "",
      location: "",
      postal_code: "",
      cuit: "",
      email: "",
      phone_number: "",
      sub:"",

    })
    // console.log(user.name, "segundo name")
    useEffect(()=>{
      if(user && user.name){
        setInputProveedor({
          ...proveedor,
          name:user.name,
          email: user.email,
          sub:user.sub,
        })
      }

    },[user])
    //   dispatch(functionquepregunt(user.name))

    function handleChange(e) {
      e.preventDefault()
      setInputProveedor({
        ...proveedor,
        [e.target.name]: e.target.value,
        
        // galery_image: [...proveedor.galery_image, e.target.value],
        // events:[...proveedor.galery_image, e.target.value]
      });
    };
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createProvider(proveedor))
        console.log(proveedor)
        Swal.fire({
            position: 'center',
            title: '¡Bievenido a Freevents!🥂',
            text: "Fuiste registrado correctamente",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#735949",
            imageUrl: "https://i.pinimg.com/564x/b2/4b/a6/b24ba6f4b92554b071283ebcf7ff2c92.jpg",
            imageHeight: 200,
          })
        localStorage.setItem('providerUser', JSON.stringify(proveedor));
        setInputProveedor({
          name: "",
          address: "",
          location: "",
          postal_code: "",
          cuit: "",
          email: "",
          phone_number: "",
          sub:"",
        })

        navigate("/PerfilProvider")
    }
    
    
    return (
        // isAuthenticated && (

            <div className="form">
            <h1>Solo unos pasos más! Completa tu información personal</h1>
            <form className="box" onSubmit={(e)=>handleSubmit(e)}>

            <div>
                    <label>Nombre: </label>
                    <input 
                    // disabled
                        type= "text"
                        value= {proveedor.name}
                        name="name"
                        onChange={(e)=>handleChange(e)}
                        
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>
            
                <div>
                    <label>address: </label>
                    <input
                        type= "text"
                        value= {proveedor.address}
                        name="address"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>
                {/* <div>
                    <label>password: </label>
                    <input
                     
                        type= "text"
                        value= {proveedor.password}
                        name="password"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"
                    />
                    
                </div> */}

                <div>
                    <label>location: </label>
                    <input
                     
                        type= "text"
                        value= {proveedor.location}
                        name="location"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>

                <div>
                    <label>postal_code: </label>
                    <input
                    
                        type= "text"
                        value= {proveedor.postal_code}
                        name="postal_code"
                        onChange={(e)=>handleChange(e)}
                        

                    />
                    
                </div>

                <div>
                    <label>cuit: </label>
                    <input
                    
                        type= "text"
                        value= {proveedor.cuit}
                        name="cuit"
                        onChange={(e)=>handleChange(e)}
                        

                    />
                    
                </div>

                <div>
                    <label>email: </label>
                    <input
                    disabled
                        type= "text"
                        value= {proveedor.email}
                        name="email"
                        onChange={(e)=>handleChange(e)}
                        

                    />
                    
                </div>

                <div>
                    <label>phone_number: </label>
                    <input
                    
                        type= "text"
                        value= {proveedor.phone_number}
                        name="phone_number"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>

                {/* <div>
                    <label>logotype: </label>
                    <input
                        type= "text"
                        value= {proveedor.logotype}
                        name="logotype"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"
                    />
                    
                </div> */}

                {/* <div>
                    <label>background_image: </label>
                    <input
                        type= "text"
                        value= {proveedor.background_image}
                        name="background_image"
                        onChange={(e)=>handleChange(e)}
                    />
                    
                </div>
                <div>
                    <label>galery_image: </label>
                    <input
                    
                        type= "text"
                        value= {proveedor.galery_image}
                        name="galery_image"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"
                    />
                    
                </div> */}

                {/* <div>
                    <label>events: </label>
                    <input
                        type= "text"
                        value= {proveedor.events}
                        name="events"
                        onChange={(e)=>handleChange(e)}
                    />
                    
                </div> */}

                <div>
                    <label>sub: </label>
                    <input
                        type= "hidden"
                        value= {proveedor.sub}
                        name="sub"
                        onChange={(e)=>handleChange(e)}
                    />
                    
                </div>
              
                <button  id='Button' type='submit'>Crear perfil</button>
            </form>
            </div>
    )
//   )
}