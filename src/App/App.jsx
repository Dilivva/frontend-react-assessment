
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";

import NotFound from "../pages/NotFound/NotFound";
import { AppContext } from "../context";

import "./App.css";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppContext.Provider value={{openDrawer, setOpenDrawer}}>
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />

          {/* We can add other pages here Login etc */}
        </Routes>
      </Router>
    </AppContext.Provider>

  )
}

export default App;