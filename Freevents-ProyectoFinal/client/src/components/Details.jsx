import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'
// import { Proveedores, Servicios } from './../data';
import NavBar from "./NavBar";
import { getData, getEvent } from '../dataJSON';
import image from '../imagenes/bluefoxx.png'

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails, clearDetails } from "../actions"
import { useEffect } from 'react'


const Details = () => {

    const dispatch = useDispatch()
    let { id } = useParams()
    //const navigate = useNavigate()
    const myservice = useSelector((state)=>state.detail)


    useEffect(()=>{
        dispatch(getDetails(id));
        return ()=>{dispatch(clearDetails())}
    },[dispatch, id])

    // const myDog = useSelector((state) => state.detail)
    // console.log(myDog, "MIRAR D2")
    // console.log(myDog.temperament, "que es esto")

    // const handleDelete = () =>{
    //     dispatch(deleteDog(id))
    //     navigate('/home')

    return (
        myservice && myservice.id
            ? (
                <div className="conteiner">
                    <div key={myservice.id}>
                        <div>
                            <div>
                                <img className="imgdetail" src={myservice.img} alt={myservice.nombre} width="250" height="250px" ></img>

                            </div>

                            <div className="titulo"><h1>{myservice.nombre}</h1></div>

                            <div className="stats">
                                <h3 className="statstext">Nombre: {myservice.name}</h3>
                                <h3 className="statstext">Description: {myservice.description}</h3>
                                <h3 className="statstext">Tipo de Servicio: {myservice.type_service}</h3>
                                <h3 className="statstext">Imagen: {myservice.image}</h3>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={'/home'}>
                                <button key={id}>Volver</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
            : <div>
                <p>Loading...</p>
                <img
                    className="imgloading"
                    alt="img not found"
                    src="https://media.giphy.com/media/3b2yGAUr5B5O8/giphy.gif"
                />
            </div>
    )
}


//         <div>
//             <NavBar></NavBar>

//             <div >

//                 {/* <h1>{Proveedores.map(el=>el.name)[1]}</h1> */}
//                 <h1>{getData.map(el => el.pack_service.map(el => el.name)[0])[0]}</h1>
//                 <h3>Descripción: </h3>
//                 <p>{getData.map(el => el.pack_service.map(el => el.description)[0])[0]}</p>
//                 <img src={image} height="200px" width="400px" alt="" />
//                 <p>Precio: {getData.map(el => el.pack_service.map(el => el.price)[0])[0]}</p>
//                 <p>Eventos relacionados: {getData.map(el => el.pack_service.map(el => el.event)[0])[0]}</p>
//                 <p>Servicios que incluye: {getData.map(el => el.pack_service.map(el => el.service.map(el => el.name))[0])[0]}</p>
//                 <h3>Proveedor: </h3>
//                 <Link to='/proveedores'>
//                     <p>{getData.map(el => el.name)[0]}</p>
//                 </Link>


//                 {/* <h3>Nombre: {Servicios.map(el=>el.name)}</h3>
//         <h3>Descripción: {Servicios.map(el=>el.description)}</h3>
//         <img src={Servicios.map(el=>el.image)} alt=""/> */}

//             </div>
//             {/* <h2>Resumen proveedor</h2> */}
//             <div className='rowpCalif'>
//                 {/* <div className='p'>
//         <p>Blue parrot fue fundada en 1996 como una pequeña empresa de catering.
//         <br></br> 
//         Al d’ia de hoy somos una multinacional dedicada a los
//         <br></br>  
//         eventos epeciales brindado todos los servicios premium que se necesitan
//         <br></br>  
//         para un momento especial.</p>
//         </div> */}
//                 <div>
//                     {/* <h2>Proveedor : </h2> */}

//                     {/* <h2>Proveedor :</h2> */}
//                     {/* <Link to= '/home/idProveedor'>
//         <h2>{Proveedores.map(el=>el.name)[1]}</h2>
//         </Link> */}
//                     {/* <h3>Calificación</h3>
//         <h3>Comentarios</h3> */}
//                 </div>
//             </div>

//             {/* <div className='rowCombo'>
//         <h3>COMBO 1</h3>
//         <h3>COMBO 2</h3>
//         </div>
//          */}
//             {/* <Link to= '/home/payment'>
//         <button className='Button'>Pay out</button>
//         </Link> */}
//             <Link to='/home'>
//                 <button>Volver</button>
//             </Link>
//             {/* <button onClick={handleDelete}>Borrar perro</button> */}

//         </div>
//     )

// }

export default Details