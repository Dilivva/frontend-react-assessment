import React from "react";

import StraightIcon from '@mui/icons-material/Straight';

import styles from "./styles.module.css"

const RenderHeadCell = ({data}) => {
  switch (data) {
    case "Title":
    case "Status":
    case "Live From":   
    case "Ends": 
      return (
      <div style={{paddingLeft: data === "Title" ? "10px" : "0px" }} className={styles.container}>
        <p className={styles.title}>{data}</p>
        <div className={styles.iconContainer}>
          <StraightIcon className={styles.iconLeft} style={{ fontSize: "20px", width: "20px", color: "#a3a4ab"}} />
          <StraightIcon className={styles.iconRight} style={{ rotate: '180deg', fontSize: "20px", width: "20px", color: "#a3a4ab"}} />
        </div>
      </div>)
    case "Last Modified": 
      return (
        <div className={styles.container}>
          <p className={styles.title}>{data}</p>
          <div className={styles.iconContainer}>
            <StraightIcon className={styles.iconLeft} style={{ fontSize: "20px", width: "20px", color: "#444647"}} />
          </div>
        </div>)
    case "Actions": 
      return <div className={styles.container}>
          <p style={{opacity: "0"}} className={styles.title}>{data}</p>
        </div>;
    default: 
      return <p className={styles.title}>{data}</p>
  }
}

export default RenderHeadCell