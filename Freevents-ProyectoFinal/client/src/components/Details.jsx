import React from 'react'
import { Link}  from 'react-router-dom'
import './Details.css'
import { Proveedores, Servicios } from './../data';
import NavBar from "./NavBar";

// import { useNavigate, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { getDetail, deleteDog } from '../Redux/Actions'
// import { useEffect } from 'react'

const Details = () => {
    // let {id} = useParams()
    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(getDetail(id));
    // },[dispatch, id])

    // const myDog = useSelector((state) => state.detail)
    // console.log(myDog, "MIRAR D2")
    // console.log(myDog.temperament, "que es esto")

    // const handleDelete = () =>{
    //     dispatch(deleteDog(id))
    //     navigate('/home')
    // }
    

return (
    <div>  
    <NavBar></NavBar>

        <div >
       
        
        {/* <h1>{Proveedores.map(el=>el.name)[1]}</h1> */}
        <h1>Combo 1</h1>
        <h3>Servicios</h3>
        <h3>Nombre: {Servicios.map(el=>el.name)}</h3>
        <h3>Descripción: {Servicios.map(el=>el.description)}</h3>
        <img src={Servicios.map(el=>el.image)} alt=""/>
       
        
        </div>
        {/* <h2>Resumen proveedor</h2> */}
        <div className='rowpCalif'>
        {/* <div className='p'>
        <p>Blue parrot fue fundada en 1996 como una pequeña empresa de catering.
        <br></br> 
        Al d’ia de hoy somos una multinacional dedicada a los
        <br></br>  
        eventos epeciales brindado todos los servicios premium que se necesitan
        <br></br>  
        para un momento especial.</p>
        </div> */}
        <div>
        {/* <h2>Proveedor : </h2> */}
        
        <h2>Proveedor :</h2>
        <Link to= '/home/idProveedor'>
        <h2>{Proveedores.map(el=>el.name)[1]}</h2>
        </Link>
        {/* <h3>Calificación</h3>
        <h3>Comentarios</h3> */}
        </div>
        </div>
        
        {/* <div className='rowCombo'>
        <h3>COMBO 1</h3>
        <h3>COMBO 2</h3>
        </div>
         */}
        <Link to= '/home'>
        <button className='Button'>Presupuesto</button>
        </Link>
        <button>Volver</button>
        {/* <button onClick={handleDelete}>Borrar perro</button> */}

    </div>
)

}

export default  Details