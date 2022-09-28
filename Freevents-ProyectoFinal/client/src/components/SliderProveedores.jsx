import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import image13 from "../imagenes/13.jpeg";
import PRO2 from "../imagenes/PRO2.jpeg";
import PRO1 from "../imagenes/PRO1.jpeg";
import PRO3 from "../imagenes/PRO3.jpeg";
import PRO7 from "../imagenes/PRO7.jpeg";
import PRO5 from "../imagenes/PRO5.jpeg";
import PRO6 from "../imagenes/PRO6.jpeg";
import "./Slider.css"
import FlechaIzquierda from '../imagenes/iconmonstr-angel-left-thin-240.png'
import FlechaDerecha from '../imagenes/iconmonstr-angel-right-thin-240.png'



const SliderProveedores = () => {

    const contSlide = useRef(null) // referencia para el contenedor de los slides
    const intervalocontSlide = useRef(null); //referencia para el intervalo

    const siguiente = () =>{
        
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
                    <img src={image13} alt="" />
                </Slide>
                <Slide>
                    <img src={PRO7} alt="" />
                </Slide>
                <Slide>
                    <img src={PRO2} alt="" />
                </Slide>
                <Slide>
                    <img src={PRO1} alt="" />
                </Slide>
                <Slide>
                    <img src={PRO3} alt="" />
                </Slide>
                <Slide>
                    <img src={PRO5} alt="" />
                </Slide>
                <Slide>
                    <img src={PRO6} alt="" />
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

export default SliderProveedores;