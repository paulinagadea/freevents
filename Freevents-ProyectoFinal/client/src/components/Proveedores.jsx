import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviders, getEvents, orderByName, getReviews } from "../actions";
import NavbarProveedores from "./NavBarProveedores.jsx";
import "./Paquetes.css";
import CardProveedor from "./CardProveedor";
import Paginado from './Paginado'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import { Link } from "react-router-dom";
import CardReviews from "./CardReviews";
import './Comentarios.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#d9c2ba',
    height: '305px',
    borderRadius: '5px',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  img: {
    margin: '3px',
  }
}));



const Proveedores = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allProviders = useSelector((state) => state.providers)
  const allEve = useSelector((state) => state.events)
  const allReviews = useSelector((state) => state.reviews)
  const [orden, setOrder] = useState('')
  // const eventos = useSelector((state) => state.events)

  const [currentPage, setCurrentPage] = useState(1) //pagina uno
  const [providersPerPage] = useState(5)// cantidad de cards x pagina
  const indexOfLastProvider = currentPage * providersPerPage //8
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage //0
  const currentProviders = allProviders.slice(indexOfFirstProvider, indexOfLastProvider)
  console.log(currentProviders, "current providers")

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getProviders())
    dispatch(getEvents())
    dispatch(getReviews())
  }, [dispatch])

  function handleSort(e) {
    e.preventDefault()
    console.log(e.target.value, "Soy el target")
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado.${e.target.value}`)
  }
  const handleClick = (e) => {
    e.preventDefault() //preventivo
    dispatch(getProviders())
  }

  return (
    <div>
      <NavbarProveedores />

      {/* <SearchBar setCurrentPage={setCurrentPage}/> */}
      <img className="png" src={'https://res.cloudinary.com/freevents/image/upload/v1664336909/Imagens/foterfoto_ngklm8.png'} alt="" />
      <h1 className="Titulo-proveedores"> PROVEEDORES </h1>
      <button onClick={e => { handleClick(e) }}> ⇦</button>

      <div className="row">

        <select onChange={e => handleSort(e)}>
          <option selected disabled>Ordenamiento</option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>
      </div>
      <div className="grid">
        {currentProviders?.map((provider) => {
          return (
            <div key={provider.id} className='item'>
              <Link style={{ textDecoration: "none" }} to={`/detail/${provider.id}`}>
                <CardProveedor
                  background_image={provider.background_image}
                  name={provider.name}
                  address={provider.address}
                  email={provider.email}
                  phone_number={provider.phone_number}
                  eventos={allEve.map(e => { return (e.name) })}
                />
              </Link>
            </div>
          )
        })}
      </div>
      <h1>COMENTARIOS DE NUESTROS CLIENTES:</h1>
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {allReviews?.map((reviews) => {
          return (
            <div className={classes.img}>
              <CardReviews
                comments={reviews.comments}
                rating={reviews.rating}
                events={reviews.events}
                name={reviews.name}
              /> 
              </div>
          )
        })}
        </ImageList>
      </div>


      <Paginado
        providersPerPage={providersPerPage}
        allProviders={allProviders.length}
        paginado={paginado}
      />
    </div>
  );
};


export default Proveedores;

