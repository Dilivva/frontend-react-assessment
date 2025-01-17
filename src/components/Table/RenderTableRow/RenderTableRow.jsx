import React from "react";
import ImageGrid from "../../ImageGrid/ImageGrid";
import styles from "./styles.module.css"

const renderStatus = (status) => {
  switch (status) {
    case "Live":
      return <td><p className={styles.live}>{status}</p></td>
    case "Scheduled":
    case "Draft":  
      return  <td><p className={styles.scheduled}>{status}</p></td>
    case "Past":  
      return  <td><p className={styles.past}>{status}</p></td> 
    default: 
      return <td><p className={styles.live}>{status}</p></td>
  }
}

const renderPages = (count) => {
  return <ImageGrid maxVisible={count} />
}

const RenderRowCell = ({title, row}) => {
  switch (title) {
    case "title":
      return (
        <td className={styles.titleContainer}>
          <p className={styles.textOne}>{row[title].name}</p>
          <p className={styles.textTwo}>({row[title].date})</p>
        </td>
      );
    case "lastModified": 
    case "liveFrom":
    case "ends":  
      return <td><p className={styles.textThree}>{row[title]}</p></td>
    case "status":
      return renderStatus(row[title])
    case "pages":
      return renderPages(row[title])
    default:
      return <td><p>Test</p></td>
  } 
}

export default RenderRowCell;