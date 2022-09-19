import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNamesProviders } from "../actions";
import SearchIcon from '@material-ui/icons/Search';


export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const provider = useSelector((state) => state.providers)
    console.log(provider, "soy el provider")


    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        if (!name) return alert("Busca un proveedor");
        if(provider.find(el=>el.name === name) ){

            dispatch(getNamesProviders(name));
            setName("")
            setCurrentPage(1) 
        }else{
            alert ("No se encontró el proveedor")
        }
        
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