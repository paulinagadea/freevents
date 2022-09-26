import { useState } from "react";
import { grey } from '@material-ui/core/colors';
import { useDispatch, useSelector } from "react-redux";
import { getNamesPacks, getNamesProviders } from "../actions";
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Alert from '@mui/material/Alert';
import './SearchBar.css'

export default function SearchBarFinal({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const provider = useSelector((state) => state.providers)
    const packss = useSelector((state) => state.packs)
    console.log(provider, "soy el provider")

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
            <Alert severity="error">No existe ese proveedor</Alert>
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