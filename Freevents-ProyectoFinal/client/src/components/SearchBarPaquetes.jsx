import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useState } from "react";
import { grey } from '@material-ui/core/colors';
import { useDispatch, useSelector } from "react-redux";
import { getNamesPacks } from "../actions";
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css'
import Swal from "sweetalert2";


export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const packss = useSelector((state) => state.packs)
    console.log(packss, "soy el paquete")


    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name)
        
        if (!name) return alert("Busca un paquete");
        
        if(packss.find(el=>el.name.toLowerCase().includes(name.toLowerCase())) ){

            dispatch(getNamesPacks(name));
            setName("")
            setCurrentPage(1) 
        }else{
            Swal.fire({
                title: "Oops...😓",
                text:"No se ha encontrado tu búsqueda, intenta de nuevo.",
                confirmButtonText:"Intentar",
                confirmButtonColor: "#735949",
                imageUrl: "https://i.pinimg.com/564x/dd/36/01/dd360137cc6e7d7d093e2df028864b34.jpg",
                imageHeight: 100,
                
            })
        }
        
    }

    return (
        <div className="sear">
            <input
                className="input1"
                type="text"
                value={name}
                placeholder="Buscar..."
                onChange={(e) => handleInputChange(e)}
            />

            <path
                type="submit"
                onClick={(e) => handleSubmit(e)}
            >
                <SearchIcon fontSize="large" style={{ color: grey[100] }}/>
            </path>
        </div>
    )
}