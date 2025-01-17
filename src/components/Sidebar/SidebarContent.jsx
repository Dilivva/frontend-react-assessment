import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PestControlRodentIcon from '@mui/icons-material/PestControlRodent';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import GroupsIcon from '@mui/icons-material/Groups';
import PortraitIcon from '@mui/icons-material/Portrait';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import styles from "./styles.module.css"

const SidebarContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageRoute = (urlRoute) => {
    navigate(`/${urlRoute}`)
  }

  
  const checkPath = (testParams) => {
    if (location.pathname === testParams) {
      return true
    } else {
      return false
    }
  }


  return (
    <>
      <div className={styles.fadingBorder}></div>

      <div className={styles.navContainer}>
        <div className={
            checkPath("/") ? styles.itemContainerActive :
            styles.itemContainer
          }  onClick={() => handlePageRoute('')}>
          <CalendarMonthIcon className={styles.icon} /> 
          <p className={styles.textOne}>Home</p>
        </div>
        <div 
          className={
            checkPath("/stories") ? styles.itemContainerActive :
            styles.itemContainer
          } 
          onClick={() => handlePageRoute('stories')}>
          <AutoStoriesIcon className={styles.icon} /> 
          <p className={styles.textOne}>Stories</p>
        </div>
        <div className={
            checkPath("/analytics") ? styles.itemContainerActive :
            styles.itemContainer
          }  onClick={() => handlePageRoute('analytics')}>
          <TrendingUpIcon className={styles.icon} /> 
          <p className={styles.textOne}>Analytics</p>
        </div>
        <div className={
            checkPath("/engagement") ? styles.itemContainerActive :
            styles.itemContainer
          } onClick={() => handlePageRoute('engagement')}>
          <PestControlRodentIcon className={styles.icon} /> 
          <p className={styles.textOne}>Engagement Units</p>
        </div>
      </div>

      <div className={styles.fadingBorder}></div>

      <div className={styles.navContainer}>
        <div className={
            checkPath("/roles") ? styles.itemContainerActive :
            styles.itemContainer
          }  onClick={() => handlePageRoute('roles')}>
          <PortraitIcon className={styles.icon} /> 
          <p className={styles.textOne}>Roles</p>
        </div>
      </div>

      <div className={styles.fadingBorder}></div>

      <div className={styles.navContainer}>
        <div className={
            checkPath("/users-guide") ? styles.itemContainerActive :
            styles.itemContainer
          }>
          <HelpOutlineIcon className={styles.icon} /> 
          <p className={styles.textOne}>User Guide</p>
        </div>
      </div>
    </>
  )
}

export default SidebarContent;