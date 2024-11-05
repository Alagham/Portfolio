import React, { useState } from 'react'
import "./Navbar.css"
import logo from  "../../assets/headerlogo.png"
import MobileNav from "../../components/Navbar/MobileNav/MobileNav"
// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const[openMenu, setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return (
    <>
        <MobileNav isOpen={openMenu} toggle={toggleMenu}/>
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src={logo} alt=""/>

                <ul>
                    <li>
                        <a className="menu-item"> Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span className= {"material-symbols-outlined"}
                    style={{fontSize:"1.8rem"}}>
                    {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar