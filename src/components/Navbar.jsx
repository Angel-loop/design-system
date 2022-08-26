import  logo  from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import React from 'react';


export const Navbar = ()=> {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=> {
        setIsOpen((prevState)=> !prevState)
        
    }
    
    
    
    return(
        <header className='primary-header flex' >
        
        

        <NavLink to='/'>
            <img src={logo} alt='Company logo' className="logo"></img>
        </NavLink>
    
        {/* Aria-controls adds screen reader support */}

        <button className={isOpen ? "open" : "mobile-nav-toggle"} onClick={handleClick}     aria-controls="primary-navigation">
            <span className="sr-only">Menu</span>
        </button>
        

            <nav id='primary-navigation' className={isOpen ? 'primary-navigation underline-indicators flex mobile-menu-open' : 'primary-navigation underline-indicators flex'}> 
                <NavLink to='/' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'  ><span>00</span>Home</NavLink>
                <NavLink to='/destination' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>01</span>Destination</NavLink>
                <NavLink to='/crew' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>02</span>Crew</NavLink>
                <NavLink to='/tech' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>03</span>Technology</NavLink>
            </nav>
            </header>
    )
}
