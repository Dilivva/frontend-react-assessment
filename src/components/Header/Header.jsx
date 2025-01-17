import React, { useContext } from "react";
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from "../../context";
import styles from "./styles.module.css"

const Header = () => {
  const {openDrawer, setOpenDrawer} = useContext(AppContext)

  const handleClick = () => {
    setOpenDrawer((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTwo}>
        <div className={styles.contentThree}>
          {
            openDrawer ? <CloseIcon onClick={handleClick} style={{fontSize: "30px"}} className={styles.menuIcon} /> :
            <MenuIcon onClick={handleClick} style={{fontSize: "30px"}} className={styles.menuIcon} />
          }
          
        </div>
        <div className={styles.contentOne}>
          <div className={styles.icon}></div>
          <p className={styles.headerText}>Send 24 Test</p>
        </div>
      </div>

      <div className={styles.contentTwo}>
        <HelpIcon className={styles.helpIcon} />
        <div className={styles.profile}>
          <p className={styles.profileText}>RJ</p>
        </div>
      </div>
    </div>
  )
}

export default Header;