import React from "react";
import image9 from "../imagenes/9.jpg";
import image3 from "../imagenes/3.jpg";
import image4 from "../imagenes/4.jpg";
import image5 from "../imagenes/5.jpg";
import image12 from "../imagenes/12.jpg";
import image11 from "../imagenes/11.jpg";
import image8 from "../imagenes/8.jpg";



let images = [image9,image3,image4,image5,image11,image12,image8]

const Slider = () => {
    return (
        <div>
            {images.map(image => (
                <img src={image} alt="not found" />
            ))}
        </div>
    )
}

export default Slider