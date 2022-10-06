import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { postClient, getAllClients } from '../actions';
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export default function FormularioCliente() {
  // console.log( "recien entro")


  const { user, isAuthenticated } = useAuth0();

  
    // console.log(user.name, "traje el auth0")
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    // console.log(user.name, "primer name")
    
    

    const [client, setInputCLient] = useState({
      name: "",
      dni:"", 
      email: "",
      phone_number: "",
      sub:"",
    })
    // console.log(user.name, "segundo name")
    useEffect(()=>{
      if(user && user.name){
        setInputCLient({
          ...client,
          name:user.name,
          email: user.email,
          sub:user.sub,
        })
      }

    },[user])
    //   dispatch(functionquepregunt(user.name))

    function handleChange(e) {
      e.preventDefault()
      setInputCLient({
        ...client,
        [e.target.name]: e.target.value,
        
        // galery_image: [...proveedor.galery_image, e.target.value],
        // events:[...proveedor.galery_image, e.target.value]
      });
    };
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postClient(client))
        console.log(client)
        Swal.fire({
          position: 'center',
          title: '¡Bievenido a Freevents!🥂',
          text: "Fuiste registrado correctamente",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#735949",
          imageUrl: "https://i.pinimg.com/564x/b2/4b/a6/b24ba6f4b92554b071283ebcf7ff2c92.jpg",
          imageHeight: 200,
        })
        localStorage.setItem('providerUser', JSON.stringify(client));
        setInputCLient({
            name: "",
            dni:"", 
            email: "",
            phone_number: "",
            sub:"",
        })

        navigate("/home")
    }
    
    
    return (
        // isAuthenticated && (
            <div>
            <h1>Solo unos pasos más! Completa tu información personal</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                    <label>Nombre: </label>
                    <input 
                    disabled
                        type= "text"
                        value= {client.name}
                        name="name"
                        onChange={(e)=>handleChange(e)}
                        
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>
            
                <div>
                    <label>email: </label>
                    <input
                    disabled
                        type= "text"
                        value= {client.email}
                        name="email"
                        onChange={(e)=>handleChange(e)}
                        

                    />
                    
                </div>

                <div>
                    <label>phone_number: </label>
                    <input
                    
                        type= "text"
                        value= {client.phone_number}
                        name="phone_number"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>
                <div>
                    <label>dni: </label>
                    <input
                    
                        type= "text"
                        value= {client.dni}
                        name="dni"
                        onChange={(e)=>handleChange(e)}
                        // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

                    />
                    
                </div>

              

                <div>
                    <label>sub: </label>
                    <input
                        type= "hidden"
                        value= {client.sub}
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