import React from "react";


export default function paginated({ providersPerPage, allProviders, paginated, currentPage, setCurrentPage }) {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(allProviders / providersPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav >

            {pageNumbers &&
                pageNumbers.map(number => (
                    <ul key={number}>
                        <button className={number === currentPage ? "nume2" : "nume"} onClick={() => paginated(number)}>{number}</button>
                    </ul>
                ))}
        </nav>
    )
}