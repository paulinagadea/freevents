import React from 'react';
import NavBar from '../NavBarDevs.jsx';
import style from './Nosotros.module.css';

export default function Nosotros(){
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Tefi</h1>
                        <h2>Back End Developer</h2>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Marco</h1>
                        <h2>Back End Developer</h2>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Karen</h1>
                        <h2>Front End Developer</h2>
                    </div>                
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Kristian</h1>
                        <h2>Back End Developer</h2>
                    </div>                
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Jessi</h1>
                        <h2>Front End Developer</h2>
                    </div>                
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Hosmar</h1>
                        <h2>Front End Developer</h2>
                    </div>                
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Cris</h1>
                        <h2>Front End Developer</h2>
                    </div>                
                </div>

                <div className={style.card}>
                    <div className={style.img}>
                        <img />
                    </div>
                    <div className={style.info}>
                        <h1>Pau</h1>
                        <h2>Back End Developer</h2>
                    </div>                
                </div>
            </div>
        </div>
    )
};