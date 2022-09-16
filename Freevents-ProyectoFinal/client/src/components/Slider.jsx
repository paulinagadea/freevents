import React from "react";
import image1 from "../imagenes/1.jpg";
import image6 from "../imagenes/6.jpg";
import image4 from "../imagenes/4.jpg";
import image5 from "../imagenes/5.jpg";
import image8 from "../imagenes/8.jpg";
import image15 from "../imagenes/15.jpg";
import image16 from "../imagenes/16.jpg";


let images = [image1,image6,image4,image15,image16,image8,image5]

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