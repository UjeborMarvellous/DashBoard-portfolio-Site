import React from 'react'
import { LuPackageOpen } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TbMessage2Plus } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import Img01 from "./Images/UNDrawHelp.png"
import { Link } from 'react-router-dom';



function SideBar() {
    return (
        <div>
            <nav className='bg-gray-400/20 h-screen px-8 pt-[16%]'>
                <div className="logo">
                    <h1 className='font-bold text-4xl'> <span className='bg-gradient-to-r from-red-500 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>My</span>Portfolio</h1>
                </div>
                <div className="navContent py-[1%]">
                    <div className="dashboard pt-2">
                        <Link to="/About-Me" className="active flex gap-3 my-auto text-lg hover:bg-yellow-900/30 py-2 px-6 rounded-xl duration-1000 delay-100 ease-out"><span className='text-2xl my-auto'><RxDashboard /></span>About Me</Link>
                    </div>
                    <div className="Requirement pt-2">
                        <Link to="/Projects" className='flex gap-3 my-auto text-lg hover:bg-yellow-900/30 py-2 px-6 rounded-xl duration-1000 delay-100 ease-out'><span className='text-2xl my-auto'><LuPackageOpen /></span>Projects</Link>
                    </div>
                    <div className="Message pt-2">
                        <Link to="/Messages" className='flex gap-3 my-auto text-lg hover:bg-yellow-900/30 py-2 px-6 rounded-xl duration-1000 delay-100 ease-out'><span className='text-2xl my-auto'><TbMessage2Plus /></span>Messages</Link>
                    </div>
                    <div className="customer pt-2">
                        <Link to="/Customers" className='flex gap-3 my-auto text-lg hover:bg-yellow-900/30 py-2 px-6 rounded-xl duration-1000 delay-100 ease-out'><span className='text-2xl my-auto'><HiOutlineUserGroup /></span>Customers</Link>
                    </div>
                    <div className='p-[.5px] bg-black mt-4 '></div>
                    <div className="sect2">
                        <div className="setting pt-2">
                            <Link to="/Settings" className='flex gap-3 my-auto text-lg hover:bg-yellow-900/30 py-2 px-6 rounded-xl duration-1000 delay-100 ease-out'><span className='text-2xl my-auto'><IoSettingsOutline /></span>Settings</Link>
                        </div>
                        <div className="SignOut pt-2">
                            <Link to="/Sign Out" className='flex gap-3 my-auto text-lg hover:bg-yellow-900/30 py-2 px-6 rounded-xl duration-1000 delay-100 ease-out'><span className='text-2xl my-auto'><CiLogout /></span>Sign Out</Link>
                        </div>
                            <img src={Img01} alt="" className='w-[17%] fixed -ml-16 h-[15rem] mt-12 object-contain'/>
                        <div className="sect2a">
                            <div className="NeedHelp text-center bg-blue-800/10 relative rounded-xl mt-[70%]  py-5 px-10 text-white">
                                <p className='text-sm my-1'>Need Help!</p>
                                <p className='text-sm my-1'>Feel Free to contact</p>
                                <button className='bg-blue-900/90 py-2 px-4 text-sm rounded-full text-white'>Get Support</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideBar