import  logo  from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = ()=> {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=> {
        setIsOpen((prevState)=> !prevState)
        console.log(isOpen)
    }
    
    
    
    return(
        <header className='primary-header flex' >
        
        

        <div>
            <img src={logo} alt='Company logo' className="logo"></img>
        </div>
    
        {/* Aria-controls adds screen reader support */}

        <button className={isOpen ? "open" : "mobile-nav-toggle"} onClick={handleClick}     aria-controls="primary-navigation">
            <span className="sr-only">Menu</span>
        </button>
        

            <nav> 
                <ul id='primary-navigation' className={isOpen ? 'primary-navigation underline-indicators flex mobile-menu-open' : 'primary-navigation underline-indicators flex'}>

                    <li>
                        <Link to='/' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>00</span>Home</Link>
                    </li>

                    <li>
                        <Link to='/destination' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>01</span>Destination</Link>
                    </li>

                    <li>
                        <Link to='/crew' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>02</span>Crew</Link>
                    </li>
                    
                    <li>
                        <Link to='/tech' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>03</span>Technology</Link>
                    </li>

                </ul>
            
            </nav>
            </header>
    )
}
