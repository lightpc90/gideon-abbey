import React from "react";
import style from './nav.module.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessages} from 'react-icons/tb'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <div className={style.nav}>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarksFill /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessages /></a>
        </div>
    )
}

export default Nav;