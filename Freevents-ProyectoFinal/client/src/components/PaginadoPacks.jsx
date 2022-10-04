import React from "react";
import './Paginado.css';


export default function paginado({ packsPerPage, allPacks, paginado, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPacks / packsPerPage); i++) {
        pageNumbers.push(i);
    }

    // function handleNext(el){
    //     el.preventDefault()
    //     if(el.target.innerHTML==="Next"&&currentPage<pageNumbers.length){
    //         setCurrentPage(currentPage+1)
    //     }
    //     if(el.target.innerHTML==="Prev"&&currentPage>1){
    //         setCurrentPage(currentPage-1)
    //     }
    // }
    
    return (
        <nav className='pag'>
            <ul className='pagination'>
            {/* <button onClick={(el)=>handleNext(el)}>Prev</button> */}
            {pageNumbers &&
                pageNumbers.map(number => (
                    <button
                        style={ currentPage === number ? {
                                backgroundColor: '#736A68',
                                color: '#D9C2BA',
                        } 
                        : null } 
                        key={number}
                        onClick={() => paginado(number)}>{number}
                    </button>
                ))}
                {/* <button onClick={(el)=>handleNext(el)}>Next</button> */}
            </ul>
        </nav>
    )
}