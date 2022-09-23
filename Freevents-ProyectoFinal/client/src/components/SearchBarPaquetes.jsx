import React from "react";
import { useState } from "react";
import { grey } from '@material-ui/core/colors';
import { useDispatch, useSelector } from "react-redux";
import { getNamesPacks } from "../actions";
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css'


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
            alert ("No se encontró el paquete")
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