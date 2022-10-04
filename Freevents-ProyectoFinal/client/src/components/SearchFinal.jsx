import { useState } from "react";
import { grey } from '@material-ui/core/colors';
import { useDispatch, useSelector } from "react-redux";
import { getNamesPacks, getNamesProviders } from "../actions";
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Alert from '@mui/material/Alert';
import './SearchBar.css'
import Swal from "sweetalert2";


export default function SearchBarFinal() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const provider = useSelector((state) => state.providers)
    const packss = useSelector((state) => state.packs)
    

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        if (!name) return <Alert severity="error">No agregaste un valor a la busqueda</Alert>

        if (provider.find(el => el.name.toLowerCase().includes(name.toLowerCase())) || packss.find(el => el.name.toLowerCase().includes(name.toLowerCase()))) {
            dispatch(getNamesProviders(name));
            dispatch(getNamesPacks(name))
            setName("")
            setCurrentPage(1)
        } else {
            Swal.fire({
                title: "Oops...😓",
                text:"No se ha encontrado tu búsqueda, intenta de nuevo.",
                confirmButtonText:"Intentar",
                confirmButtonColor: "#735949",
                imageUrl: "https://i.pinimg.com/564x/b2/4b/a6/b24ba6f4b92554b071283ebcf7ff2c92.jpg",
                imageHeight: 200,
                
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
                <SearchIcon fontSize="large" style={{ color: grey[100], cursor: 'pointer' }} />
            </path>
        </div>
    )
}