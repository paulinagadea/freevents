import React from "react";
import './Paginado.css';


export default function paginado({ providersPerPage, allProviders, currentPage, paginado, setCurrentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allProviders / providersPerPage); i++) {
        pageNumbers.push(i);
    }

    function handleNext(el){
        el.preventDefault()
        if(el.target.innerHTML==="Next"&&currentPage<pageNumbers.length){
            setCurrentPage(currentPage+1)
        }
        if(el.target.innerHTML==="Prev"&&currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }
    
    return (
        <nav className='pag'>
            <ul className='pagination'>
            {/* <button onClick={(el)=>handleNext(el)}>Prev</button> */}
            {pageNumbers &&
                pageNumbers.map(number => (
                    <li className='pagination' key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
                {/* <button onClick={(el)=>handleNext(el)}>Next</button> */}
            </ul>
        </nav>
    )
}