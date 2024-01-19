import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from "./Components/SideBar"
import Analytics from "./Components/Analytics"
import Products from "./Components/Products"
import Messages from "./Components/Messages"
import Customers from "./Components/Customers"
import Settings from "./Components/Settings"
import WelcomeScreen from "./Components/WelcomeScreen"

function App() {
  return (
    <>
      <div className="all overflow-hidden h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />}></Route>
          </Routes>
          <div className="grid grid-cols-5 w-screen">
            <div className="sidebar col-span-1">
              <SideBar />
            </div>
            <Routes>
              <Route path="/About-Me" element={<Analytics />}></Route>
              <Route path="/Projects" element={<Products />}></Route>
              <Route path="/Messages" element={<Messages />}></Route>
              <Route path="/Customers" element={<Customers />}></Route>
              <Route path="/Settings" element={<Settings />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
