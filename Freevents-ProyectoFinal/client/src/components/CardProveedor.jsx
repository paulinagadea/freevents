import React from 'react'
import { useSelector} from 'react-redux'


const CardProveedor = ({name, address, email, phone_number })=>{
    
    const allProviders = useSelector((state) => state.providers)
    console.log(allProviders, "Los proveedores")
    
    return (
        <div >
            <h3>{name}</h3>
            <h5>Email: {email}</h5>
            <h5>Dirección:{address}</h5>
            <h5>Número de telefono: {phone_number}</h5>
           
        </div>
    )
}
export default CardProveedor