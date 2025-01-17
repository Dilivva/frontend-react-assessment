import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../components/DashboardPages/Home/Home";
import Stories from "../../components/DashboardPages/Stories/Stories";
import Analytics from "../../components/DashboardPages/Analytics/Analytics";
import Engagement from "../../components/DashboardPages/Engagement/Engagement";
import Roles from "../../components/DashboardPages/Roles/Roles";
import Header from "../../components/Header/Header";
import Drawer from "../../components/Drawer/Drawer";

import styles from "./styles.module.css";

const Dashboard = () => {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="engagement" element={<Engagement />} />
          <Route path="roles" element={<Roles />} />
      
        </Routes>     
      </div>
      <Drawer />
    </>
  )
}

export default Dashboard;

