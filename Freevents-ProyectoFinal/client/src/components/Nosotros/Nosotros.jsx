import React from 'react';
import NavBar from '../NavBarDevs.jsx';
import style from './Nosotros.module.css';
import hosmar from './michis/6ff42237034590f5d845295fedbf83a3.jpg';
import cris from './michis/29b4dd8d89095c2401e34ab184bec087.jpg';
import marco from './michis/035a7d5ee4174571f7d835d4df9be9fb.jpg';
import karen from './michis/9781d96266a0bd3a5f80bff0916fd212.jpg';
import pau from './michis/8726495edb050fc67fbde2eba8d145c1.jpg';
import tefi from './michis/b3e495502d1efab95079479edf93925d.jpg';
import kris from './michis/be7913abf21df3dd15d82f2759e01c36.jpg';
import jessi from './michis/f7030d61b688e7e4a412dd087a2e061c.jpg';
import logo from './Linkedin-logo.webp';

export default function Nosotros(){
    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className={style.title}>
                <h1>¡Conoce a los desarrolladores de Freevents!</h1>
            </div>

            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.img}>
                        <img src={karen} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Karen Cabrera</h1>
                        <h2>Front End Developer</h2>
                    </div> 
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/karencabrera27"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/karen-cabrera-1445a1122/"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>
                </div> 

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={cris} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Cristina Trejo</h1>
                        <h2>Front End Developer</h2>
                    </div>  
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/CrisTrejo"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/cristinatrejolavalle"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>              
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={jessi} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Jessica Biagioni</h1>
                        <h2>Front End Developer</h2>
                    </div>   
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/JessicaBiagioni"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/jessica-biagioni-0452441a5/"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>             
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={tefi} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Estefanía Chavez</h1>
                        <h2>Back End Developer</h2>
                    </div>
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/EstefaniaChavez"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/estefania-m-chavez"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={marco} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Marco Robles</h1>
                        <h2>Back End Developer</h2>
                    </div>
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/MarcoAlayn"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/marcorobles-developer"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={pau} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Paulina Gadea</h1>
                        <h2>Back End Developer</h2>
                    </div>   
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/paulinagadea"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/paulinagadea"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>             
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={hosmar} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Hosmar Carrillo</h1>
                        <h2>Front End Developer</h2>
                    </div>   
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/HosmarCarrillo"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/hosmar-leandro-carrillo-rodriguez-9a4778154"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>             
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img src={kris} alt='img michi'/>
                    </div>
                    <div className={style.info}>
                        <h1>Cristhian Lizcano</h1>
                        <h2>Back End Developer</h2>
                    </div>   
                    <div className={style.contact}>               
                        <a className={style.github} href={"https://github.com/Kristhian92"}>
                            <img src={'https://res.cloudinary.com/freevents/image/upload/v1664336902/Imagens/github_zm2gn2.png'} alt="not found" />
                        </a>
                        <a className={style.linkedin} href={"https://www.linkedin.com/in/kristhianlizcano"}>
                            <img src={logo} alt="not found" />
                        </a>
                    </div>             
                </div>
            </div>
        </div>
    )
};