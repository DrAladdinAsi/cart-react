import './navbar.scss'
import { Link } from "react-router-dom";

import React, { useState } from 'react'

function Navbar() {
    const user = true;
    const [openNavIcon , setOpenNavIcon ] = useState(false)
  return (
    <nav>
        <div className="left">
            <a href="'/" className='logo'>
                <img src="/images/logo.png" alt="the logo image" />
                <span>ASSI</span>
            </a>
            <a href="/">Home</a>
            <a href="/">Website</a>
            <a href="/">Contact</a>
            <a href="/">Sales</a>
        </div>
        <div className="right">

       {
            user ? (<div className='userProfile'>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the photo of the user" />
                    <span>Johne Doe</span>
                    <Link to={'/profile'} className='button'>
                        <div className="notifacation"><span>3</span></div>
                        <span>profile</span>
                    </Link>
                </div>)
                :(
                <>
                <a href="/">Sign In</a>
                <a href="/" className='register'>Sign up</a>
                </>)
            }

                <div className="menu_icon" onClick={()=>setOpenNavIcon(!openNavIcon)}>
                    <img src="/images/menu.png" alt="the menu icon" />
                </div>

            <div className={openNavIcon ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">Website</a>
            <a href="/">Contact</a>
            <a href="/">Sales</a>
            <a href="/">Sign In</a>
            <a href="/" >Sign up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar