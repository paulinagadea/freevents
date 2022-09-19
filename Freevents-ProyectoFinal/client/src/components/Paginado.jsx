// import React from "react";


// export default function paginated({ videoGamesPerPage, allVideoGames, paginated, currentPage, setCurrentPage }) {
//     const pageNumbers = [];

//     for (let i = 1; i < Math.ceil(allVideoGames / videoGamesPerPage); i++) {
//         pageNumbers.push(i);
//     }
    
//     return (
//         <nav >

//             {pageNumbers &&
//                 pageNumbers.map(number => (
//                     <ul key={number}>
//                         <button className={number === currentPage ? "nume2" : "nume"} onClick={() => paginated(number)}>{number}</button>
//                     </ul>
//                 ))}
//         </nav>
//     )
// }