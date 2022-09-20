import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'

// import { Proveedores, Servicios } from './../data';
import NavbarNuevo from "./NavbarNuevo";
import { getData, getEvent } from '../dataJSON';
import image from '../imagenes/bluefoxx.png'

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails, clearDetails } from "../actions"
import { useEffect } from 'react'
import { Container } from '@material-ui/core';


const Details = () => {

    const dispatch = useDispatch()
    let { id } = useParams()
    //const navigate = useNavigate()
    const myservice = useSelector((state)=>state.detail)
    console.log(myservice)


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
                <div>

                <NavbarNuevo/>
                <div className="conteinerd">
                    <div key={myservice.id}>
                        
                            <div className='imgdetail'>
                                <img 
                                src={myservice.background_image} 
                                alt={myservice.nombre} 
                                width="1600" 
                                height="300px" 
                                >
                                </img>

                            </div>
                                <img className="imgdetail2" 
                                src={myservice.logotype} 
                                alt={myservice.nombre} 
                                width="200px" 
                                height="200px" 
                                >
                                </img>
                            <div className='container-detail'>
                        
                                <div className='imgdetail1'>
                                {myservice.galery_image.map((i)=>{
                                    return(
                                        <div>
                                        <img className="imgdetail3" 
                                        src={i} 
                                        alt={myservice.nombre} 
                                        width="150px" 
                                        height="150px" 
                                        >
                                        </img>
                                    </div>
                                    )
                                })}
                                </div>


                            <div className="titulo">
                                <h1>{myservice.nombre}</h1>
                            </div>

                            <div className="stats">
                                <h3 className="statstext">Nombre: {myservice.address}</h3>
                                <h3 className="statstext">CUIT: {myservice.cuit}</h3>
                                <h3 className="statstext">e-mail: {myservice.email}</h3>
                                <h3 className="statstext">Numero de telefono: {myservice.phone_number}</h3>
                                <h3 className="statstext">Codigo postal: {myservice.postal_code}</h3>
                                {/* <h5>Temperamento: {myDog.temperament?.length === 0 && "Desconocido" }{myDog.createdInDb? myDog.temperament.map(el=>el.name + ' '): myDog.temperament?.join(' ')}</h5> */}
                               
                            </div>
                        </div>
                        <div>
                                </div>
                            <Link to={'/proveedores'}>
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
                    src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif"
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