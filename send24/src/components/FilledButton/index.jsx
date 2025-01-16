import React from "react";
import style from "./index.module.css";

const FilledButton = ({ name}) => {

    return (
        <div className={style.btn}>
            <p className={style.signupBtn}>{name}</p>
        </div>
    );
};

export default FilledButton;
