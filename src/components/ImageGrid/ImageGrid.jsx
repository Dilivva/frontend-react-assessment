import React, {useCallback} from "react";
import styles from "./styles.module.css"



const ImageGrid = ({ maxVisible }) => {

  let imageLength = maxVisible > 7 ? 6 : maxVisible
  let tempArray = Array(imageLength).fill(null)

  const getRandomColor = useCallback(() => {
    const r = Math.floor(Math.random() * 256); // Random red (0-255)
    const g = Math.floor(Math.random() * 256); // Random green (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue (0-255)
    return `rgb(${r}, ${g}, ${b})`;
  }, [])

  return (
    <td>
          <div className={styles.container}>
      {
        tempArray.map((elem, i) => (
          <div key={i} style={{backgroundColor: getRandomColor()}} className={styles.img}></div>
        ))
      }
      {maxVisible > 6 && (
        <div className={styles.extraCount}>
          +{7}
        </div>
      )}
    </div>
    </td>
  );
};


export default ImageGrid;
