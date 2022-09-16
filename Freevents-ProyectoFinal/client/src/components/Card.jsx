import React from "react";
import { getData } from '../dataJSON';
// import {Link} from "react-router-dom";
// import image13 from "../imagenes/13.jpeg";

const Card = () => {
    return (
        <div>
            <h3>{getData.map(el=>el.pack_service.map(el=>el.name)[0])[0]}</h3>
            <p>Servicios que incluye: {getData.map(el=>el.pack_service.map(el=>el.service.map(el=>el.name))[0])[0]}</p>
            <p>Precio: {getData.map(el=>el.pack_service.map(el=>el.price)[0])[0]}</p>

        </div>
    )
}
// return(
//     <div>
//         <Link to={`/detail/${id}`}>
//         <img src={image13} alt=""/>
//         <h3> {name} </h3>
//         <div>
//         {type_service?.map((typeservice, index) => (
//                             <button key={index}>{typeservice}</button>
//                         ))}
//         </div>
//<div>
//    {events?.map((event, index) => (
//        <button key={index}>{event}</button>
//    ))}
//</div>
//         </Link>
//     </div>
// )
// }

export default Card;