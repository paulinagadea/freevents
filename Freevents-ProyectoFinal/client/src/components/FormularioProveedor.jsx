import React from 'react'

export default function FormularioProveedor () {
  return (
    <div>FormularioProveedor</div>
  )
}


//hola



// import React, {useState} from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
// import { createProvider } from '../actions';
// import { useDispatch } from "react-redux";
// // import { useNavigate } from 'react-router-dom'

// export default function FormularioProveedor() {
//     const { user, isAuthenticated } = useAuth0();
//     const dispatch = useDispatch();
//     // const navigate = useNavigate()

//     const [proveedor, setInputProveedor] = useState({
//         name: user.name,
//         address: '',
//         location: '',
//         postal_code: '',
//         cuit: '',
//         email: user.email,
//         phone_number: '',
//         logotype: '',
//         background_image: '',
//         galery_image: [],
//         events: [],
//         sub:user.sub

//     })


//     function handleChange(e) {
//         e.preventDefault()
//         setInputProveedor({
//             ...proveedor,
//             [e.target.name]: e.target.value,
//         });
//     };
    
//     function handleSubmit(e){
//         e.preventDefault();
//         dispatch(createProvider(proveedor))
//         alert("Raza creada")
//         setInputProveedor({
//             name: '',
//             address: '',
//             location: '',
//             postal_code: '',
//             cuit: '',
//             email: '',
//             phone_number: '',
//             logotype: '',
//             background_image: '',
//             galery_image: [],
//             events: [],
//             sub:''
//         })
        
//     }
    
    
//     return (
//         isAuthenticated && (
//             <div>
//             <form onSubmit={(e)=>handleSubmit(e)}>
//             <div>
//                     <label>Nombre: </label>
//                     <input
                     
//                         type= "text"
//                         value= {proveedor.name}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                         // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

//                     />
                    
//                 </div>
            
//                 <div>
//                     <label>address: </label>
//                     <input
                     
//                         type= "text"
//                         value= {proveedor.address}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                         // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

//                     />
                    
//                 </div>

//                 <div>
//                     <label>location: </label>
//                     <input
                     
//                         type= "text"
//                         value= {proveedor.location}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                         // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

//                     />
                    
//                 </div>

//                 <div>
//                     <label>postal_code: </label>
//                     <input
                    
//                         type= "text"
//                         value= {proveedor.postal_code}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
                        

//                     />
                    
//                 </div>

//                 <div>
//                     <label>cuit: </label>
//                     <input
                    
//                         type= "text"
//                         value= {proveedor.cuit}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
                        

//                     />
                    
//                 </div>

//                 <div>
//                     <label>email: </label>
//                     <input
                    
//                         type= "text"
//                         value= {proveedor.email}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
                        

//                     />
                    
//                 </div>

//                 <div>
//                     <label>phone_number: </label>
//                     <input
                    
//                         type= "text"
//                         value= {proveedor.phone_number}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                         // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

//                     />
                    
//                 </div>

//                 <div>
//                     <label>logotype: </label>
//                     <input
                    
//                         type= "text"
//                         value= {proveedor.logotype}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                         // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

//                     />
                    
//                 </div>

//                 <div>
//                     <label>background_image: </label>
//                     <input
//                         type= "text"
//                         value= {proveedor.background_image}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                     />
                    
//                 </div>

//                 <div>
//                     <label>galery_image: </label>
//                     <input
                    
//                         type= "text"
//                         value= {proveedor.galery_image}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                         // onInput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"

//                     />
                    
//                 </div>

//                 <div>
//                     <label>events: </label>
//                     <input
//                         type= "text"
//                         value= {proveedor.events}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                     />
                    
//                 </div>

//                 <div>
//                     <label>sub: </label>
//                     <input
//                         type= "text"
//                         value= {proveedor.sub}
//                         // name="name"
//                         onChange={(e)=>handleChange(e)}
//                     />
                    
//                 </div>

//                 <button  id='Button' type='submit'>Crear perfil</button>
//             </form>
//             </div>
//     )
//   )
// }

