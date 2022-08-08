import logo from '../assets/shared/logo.svg'

export const Navbar = () =>{
    return(
        <nav className='flex navbar'> 
        <img src={logo}></img>
         <a href='#' className='numbered-title'><span>00</span> Home</a>
         <a href='#' className='numbered-title'><span>01</span> Destination</a>
         <a href='#' className='numbered-title'><span>02</span> Crew</a>
         <a href='#' className='numbered-title'><span>03</span> Technology</a>
         </nav>
    )
}