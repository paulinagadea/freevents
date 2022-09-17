import React from 'react'

const CardProveedor = ({name, weight, temperament, image, createdInDb })=>{
    console.log(temperament, "MIRAR D1")
    
    return (
        <div >
            <img src={image} alt="img not found" width={"150px"} height={"100px"} nError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://comodibujar.club/wp-content/uploads/2019/03/dibujar-perro-kawaii-1.jpg";
                    }}/>
            <h3>{name}</h3>
            <h5>Peso: {weight}</h5>
            <h5>Temperamento: {temperament?.length === 0 && "Desconocido" } {createdInDb? temperament?.map(el=>el.name + ', '):temperament.map(el=>el + " ")}</h5>
           
        </div>
    )
}
export default CardProveedor