import React from "react";


export default function paginado({ providersPerPage, allProviders, paginado, setCurrentPage }) {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(allProviders / providersPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (

      
        <nav >

            {pageNumbers &&
                pageNumbers.map(number => (
                    <ul key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>
                    </ul>
                ))}
        </nav>
    )
}