import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'
import NavbarHome from "./NavbarHome.jsx";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails, clearDetails, getEvents } from "../actions"
import { useEffect } from 'react'
import { Container } from '@material-ui/core';

const Details = () => {
    const dispatch = useDispatch()
    let { id } = useParams()
    const myservice = useSelector((state) => state.detail)
    const evente = useSelector((state) => state.events)

    useEffect(() => {
        dispatch(getEvents())
        dispatch(getDetails(id));
        return () => { dispatch(clearDetails()) }
    }, [dispatch, id])

    return (
        myservice && myservice.id
            ? (
                <div>

                    <NavbarHome />
                    <div className='imgdetail'>
                        <img
                            src={myservice.background_image}
                            className="cover"
                            alt={myservice.nombre}
                            width="100%"
                            height="100%"
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
                    <Container fixed>
                        <div className='grit'>

                            <div className='grid4 '>
                                <div className='grid1 '>

                                    <div className="stats">
                                        <h3 className="statstext">Direccion: {myservice.address}</h3>
                                        <h3 className="statstext">CUIT: {myservice.cuit}</h3>
                                        <h3 className="statstext">E-mail: {myservice.email}</h3>
                                        <h3 className="statstext">Telefono: {myservice.phone_number}</h3>
                                        <h3 className="statstext">Codigo postal: {myservice.postal_code}</h3>
                                        {/* <h5>Temperamento: {myDog.temperament?.length === 0 && "Desconocido" }{myDog.createdInDb? myDog.temperament.map(el=>el.name + ' '): myDog.temperament?.join(' ')}</h5> */}
                                        {evente.map((e) => { return (e.name) })}
                                    </div>
                                </div>
                                {/* <div className='grid8'> */}
                                <div className='grid2 '>
                                    <div className='imgdetail1'>
                                        {myservice.galery_image.map((i) => {
                                            return (
                                                <div>
                                                    <img className="imgdetail3"
                                                        src={i}
                                                        alt={myservice.nombre}
                                                        width="80px"
                                                        height="80px"
                                                    >
                                                    </img>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='grid3'>
                                        <img src={myservice.galery_image[0]} width="500px" height="300px" alt=""></img>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div >
                        </div>
                    </Container>
                    <div className="conteinerd">
                        <div key={myservice.id}>
                            <div className='container-detail'>
                                <div className="titulo">
                                    <h1>{myservice.nombre}</h1>
                                </div>
                            </div>
                            <div>
                                <Link to={'/proveedores'}>
                                    <button key={id}>Volver</button>
                                </Link>
                            </div>
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


export default Details