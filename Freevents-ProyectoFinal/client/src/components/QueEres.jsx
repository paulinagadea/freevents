import React from 'react'
import {Link} from 'react-router-dom'

// hacer un estado que lo llene con onclick segun el boton

 const QueEres = () => {
  return (
    <div>
        <Link to="/loginCliente" >
            <button >Soy un cliente</button>
        </Link>
          
        <Link to="/loginProveedor" >
            <button >Soy un proveedor</button>
        </Link>

    </div>
  )
}
export default QueEres
