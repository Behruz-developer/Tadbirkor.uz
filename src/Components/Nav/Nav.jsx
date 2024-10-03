import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Nav = () => {

    const links = [
        { url: '/', name: 'Главная' },
        { url: '/interview', name: 'Интервью' },
        { url: '/about', name: 'О проекте' },
        { url: '/contact', name: 'Контакты' },
    ]

    const [active, setActive] = useState(false)
    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav_box">
                    <IoMenu className='nav_menu' onClick={() => setActive(true)} />
                    <ul className='nav_list'>
                        {links.slice(0, 2).map(link => (
                            <li key={link.name}>
                                <NavLink className='nav_link' to={link.url}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <a href="#!" className='nav_logo'>
                        <img src={logo} alt="" />
                    </a>
                    <ul className='nav_list'>
                        {links.slice(2).map(link => (
                            <li key={link.name}>
                                <NavLink className='nav_link' to={link.url}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul className={` nav_list nav_list2 ${active && "active"}`}>
                        <IoClose className='nav_close' onClick={() => setActive(false)}/>
                        <a href="#!" className='nav_logo nav_logo2'>
                            <img src={logo} alt="" />
                        </a>
                        {links.map(link => (
                            <li key={link.name}>
                                <NavLink className='nav_link' to={link.url}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav