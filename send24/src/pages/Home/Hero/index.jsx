import React from 'react';
import picture from "../../../assets/hero.png";
import style from "./index.module.css";

const Hero = () => {
    return (
        <div className={style.heroSection}>
            <div className={style.header}>
                <div>
                    <h1>Let's hunt for your dream residence</h1>
                    <p>Explore our range of beautiful properties with separate accommodation suitable for you.</p>
                </div>
            </div>
            <img src={picture} alt="house"/>
        </div>
    )
}

export default Hero;