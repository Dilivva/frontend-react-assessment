import React, { useState, useRef, useEffect } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useRegisterClickoutside from "../../hooks/useRegisterClickoutside";
import styles from "./styles.module.css"


const Dropdown = ({lists, title, selected, setSelected}) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useRegisterClickoutside({ref, setOpen})

  const handleSelect = (e, tempItem) => {
    e.stopPropagation();
    setSelected(tempItem)
    setOpen(false)
  }

  return (
    <div ref={ref} className={styles.container} onClick={() => setOpen(prev => !prev)}>
      <p className={styles.textOne}>{title}:</p>
      <p className={styles.textOne}>{selected}</p>

      {open && 
        <div className={styles.listContainer}>
          {
            lists.map((el, index) => 
              <p onClick={(e) => handleSelect(e, el)} className={styles.item} key={index}>{el}</p>
            )
          }
        </div>
      }

      <KeyboardArrowDownIcon  className={styles.icon} />
    </div>
  )
}

export default Dropdown;