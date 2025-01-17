import React from "react";
import SidebarContent from "./SidebarContent";
import styles from "./styles.module.css"


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SidebarContent />
    </div>

  )
}

export default Sidebar;