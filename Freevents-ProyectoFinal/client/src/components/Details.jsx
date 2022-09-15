import React from 'react'
import { Link}  from 'react-router-dom'
import './Details.css'

const Details = () => {

return (
    <div>
        <div className='rowlogo'>
        <img src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="" width="100px" height="100px"/>
        
        <h1>Detalles</h1>
        </div>
        <h2>Resumen proveedor</h2>
        <div className='rowpCalif'>
        <div className='p'>
        <p>Blue parrot fue fundada en 1996 como una pequeña empresa de catering.
        <br></br> 
        Al d’ia de hoy somos una multinacional dedicada a los
        <br></br>  
        eventos epeciales brindado todos los servicios premium que se necesitan
        <br></br>  
        para un momento especial.</p>
        </div>
        <div>
        <h3>Calificación</h3>
        <h3>Comentarios</h3>
        </div>
        </div>
        
        <div className='rowCombo'>
        <h3>COMBO 1</h3>
        <h3>COMBO 2</h3>
        </div>
        
        <Link to= '/'>
        <button className='Button'>Presupuesto</button>
        </Link>
        <button>Volver</button>

    </div>
)

}

export default  Details