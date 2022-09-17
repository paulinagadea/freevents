import React from 'react'


const CardProveedor = ({name, address, email, phone_number })=>{
    
    return (
        <div >
            <h3>{name}</h3>
            <h5>Email: {email}</h5>
            <h5>Dirección:{address}</h5>
            <h5>Número de telefono:{phone_number}</h5>
        </div>
    )
}
export default CardProveedor