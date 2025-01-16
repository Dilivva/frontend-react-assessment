import logo from "../../assets/dilivva-logo.png";
import style from "./index.module.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className={style.footer}>
            <img src={logo} alt="logo" className={style.logo}/>
            <p className={style.copyright}>Copyright © {year} Send24. All rights reserved</p>

        </div>
    );
};

export default Footer;
