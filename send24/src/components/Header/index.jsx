import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.css"
import Hamburger from "hamburger-react";
import logo from "../../assets/dilivva-logo.png"

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1080);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        if (isMobile) {
            setIsOpen(false);
        }
    };

    const handleLogoClick = () => handleNavigation("/");


    return (
        <div className={style.nav}>
            <div className={style.image} onClick={handleLogoClick}>
                <img src={logo} alt="logo" />
            </div>

            {isMobile ? (
                <>
                    <div className={style.hamburger}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#000929" />
                    </div>
                    {isOpen && (
                        <div className={style.mobileMenu}>
                            <div className={style.midSection}>
                                <p onClick={() => handleNavigation("/home")}>Home</p>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={style.midSection}>
                        <p onClick={() => handleNavigation("/home")}>Home</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;