import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import HOME1 from "../imagenes/HOME1.jpeg";
import HOME2 from "../imagenes/HOME2.jpeg";
import HOME5 from "../imagenes/HOME5.jpeg";
import HOME6 from "../imagenes/HOME6.jpeg";
import HOME7 from "../imagenes/HOME7.jpeg";
import "./Slider.css"
import FlechaIzquierda from '../imagenes/iconmonstr-angel-left-thin-240.png'
import FlechaDerecha from '../imagenes/iconmonstr-angel-right-thin-240.png'
// let images = [image6,image4,image15,image16,image8,image5,image28]


const Slider = () => {
    // return (
        // <div className="sliderc">
        //     {images.map(image => (
        //         <img src={image} alt="not found" />
        //     ))}
        // </div>
        
    // )
    const contSlide = useRef(null) // referencia para el contenedor de los slides
    const intervalocontSlide = useRef(null); //referencia para el intervalo

    const siguiente = () =>{
        // console.log(contSlide.current)
        // Comprobamos que el contSlide tenga elementos
		if(contSlide.current.children.length > 0){
           

            // Obtenemos el primer elemento del contSlide.
			const primerElemento = contSlide.current.children[0];

            // Establecemos la transicion para el contSlide.
			contSlide.current.style.transition = `300ms ease-out all`;

            //calculamos el tamaño del slide
            const tamañoSlide = contSlide.current.children[0].offsetWidth;

            contSlide.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
				// Reiniciamos la posicion del contSlide.
				contSlide.current.style.transition = 'none';
				contSlide.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				contSlide.current.appendChild(primerElemento);

				contSlide.current.removeEventListener('transitionend', transicion);
			}

            // Eventlistener para cuando termina la animacion.
			contSlide.current.addEventListener('transitionend', transicion);
        }
    }
    
    const anterior = () => {
        console.log('anterior')

        console.log('Anterior');
		if(contSlide.current.children.length > 0){
			// Obtenemos el ultimo elemento del contSlide.
			const index = contSlide.current.children.length - 1;
			const ultimoElemento = contSlide.current.children[index];
			contSlide.current.insertBefore(ultimoElemento, contSlide.current.firstChild);
			
			contSlide.current.style.transition = 'none';
			const tamañoSlide = contSlide.current.children[0].offsetWidth;
			contSlide.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				contSlide.current.style.transition = `300ms ease-out all`;
				contSlide.current.style.transform = `translateX(0)`;
			}, 30);
		}
    }

    useEffect(() => {
        intervalocontSlide.current = setInterval(() => {
            siguiente();
        }, 4000);
	}, []);

    return(
        <main>
        <ContenedorPrincipal>
            <ContenedorSlide ref={contSlide}>
                <Slide>
                    <img src={HOME1} alt="" />
                </Slide>
                <Slide>
                    <img src={HOME2} alt="" />
                </Slide>
                <Slide>
                    <img src={HOME5} alt="" />
                </Slide>
                <Slide>
                    <img src={HOME6} alt="" />
                </Slide>
                <Slide>
                    <img src={HOME7} alt="" />
                </Slide>
            </ContenedorSlide>
            <Controles>
                <Boton onClick={anterior}>
                    <img src={FlechaIzquierda} alt="" width='50px' height='50px' />
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <img src={FlechaDerecha} alt="" width='50px' height='50px' />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
        </main>
    )
}

// codigo de styled-components
const ContenedorPrincipal = styled.div`
    position: relative;
`;
const ContenedorSlide = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;
const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	max-height: 590px; 
	position: relative;
	img {
		width: 100%;
		vertical-align: top;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	// &:hover {
	// 	background: rgba(0,0,0,.2);
	// 	path {
	// 		fill: #fff;
	// 	}
	// }
	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}
	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

export default Slider 