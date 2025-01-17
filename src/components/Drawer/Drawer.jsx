import React, {useContext, useRef, useEffect} from "react"
import { AppContext } from "../../context";
import SidebarContent from "../Sidebar/SidebarContent";
import useRegisterClickoutside from "../../hooks/useRegisterClickoutside";
import styles from "./styles.module.css"



const Drawer = () => {
  const {openDrawer, setOpenDrawer} = useContext(AppContext);

  const ref = useRef(null);

  useRegisterClickoutside({ref, setOpen: setOpenDrawer})

  return (
    <div  className={openDrawer ? styles.drawerOpen : styles.drawer}>
      <div ref={ref} className={styles.drawerContent}>
        <SidebarContent />
        
        <div className={styles.dummyheight}></div>
      </div>

      {/* Bottom of the sidebar was not visible so I added this dummy height */}
    
    </div>
  )
}

export default Drawer;