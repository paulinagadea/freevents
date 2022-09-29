import React from 'react'
import {Link} from 'react-router-dom'

 const QueEres = () => {
  return (
    <div>
        <Link to="/login" >
            <button>Soy un cliente</button>
        </Link>
        <Link to="/login" >
            <button>Soy un proveedor</button>
        </Link>

    </div>
  )
}
export default QueEres
