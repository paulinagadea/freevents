import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamesProviders } from "../actions";
import SearchIcon from '@material-ui/icons/Search';


export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")


    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!name) return alert("Busca un proveedor");
        dispatch(getNamesProviders(name));
        setName("")
        setCurrentPage(1) 
        
    }

    return (
        <div>
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
                <SearchIcon/>
            </path>
        </div>
    )
}