import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {RiServiceLine,RiContactsBook2Line} from 'react-icons/ri'
import {useState} from "react";

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome size={22}/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser size={22}/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineDesktopComputer size={22}/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine size={22}/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Line size={22} /></a>

        </nav>
    )
}

export default Nav