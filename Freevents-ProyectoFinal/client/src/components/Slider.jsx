import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import "./Slider.css"
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
                    <img src={"https://res.cloudinary.com/freevents/image/upload/v1664336905/Imagens/HOME1_vvrsfd.jpg"} alt="" />
                </Slide>
                <Slide>
                    <img src={"https://res.cloudinary.com/freevents/image/upload/v1664336907/Imagens/HOME2_cpmbck.jpg"} alt="" />
                </Slide>
                <Slide>
                    <img src={"https://res.cloudinary.com/freevents/image/upload/v1664336910/Imagens/HOME5_zh8ztf.jpg"} alt="" />
                </Slide>
                <Slide>
                    <img src={"https://res.cloudinary.com/freevents/image/upload/v1664336904/Imagens/HOME6_xwhkcb.jpg"} alt="" />
                </Slide>
                <Slide>
                    <img src={"https://res.cloudinary.com/freevents/image/upload/v1664336904/Imagens/HOME7_h0hy6e.jpg"} alt="" />
                </Slide>
            </ContenedorSlide>
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
	height: 100vh;
	`;
	const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
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