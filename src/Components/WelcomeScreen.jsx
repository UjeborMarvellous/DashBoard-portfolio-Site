import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeScreen() {
  return (
    <div className=' h-screen text-center py-[20%] bg-black text-white'>
        <h1 className=' '>Hello and Welcome to my Portfolio DashBoard</h1>
        <h1 className=' '>Dive In And Xplore More about me</h1>
        <h1 className=' pb-5'>Enjoy the Ride</h1>
        <Link to="/About-Me" className=' bg-blue-900 text-white px-10 py-3 rounded-full'>Go to DashBoard</Link>
    </div>
  )
}

export default WelcomeScreen