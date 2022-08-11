import { Link, Routes, Route } from "react-router-dom"; 
import  logo  from './assets/shared/logo.svg'
import { Home } from "./components/Home";

const App = () => {
  return (
  <div>
        <header className='primary-navigation'>
        
  
            <nav className='flex navbar '> 
                
                <img src={logo} alt=''></img>
                <ul className='underline-indicators flex'>

                    <li>
                        <Link to='/' className='numbered-title'><span>00</span> Home</Link>
                    </li>

                    <li>
                        <Link to='destination' className='numbered-title'><span>01</span> Destination</Link>
                    </li>

                    <li>
                        <Link to='crew' className='numbered-title'><span>02</span> Crew</Link>
                    </li>
                    
                    <li>
                        <Link to='tech' className='numbered-title'><span>03</span> Technology</Link>
                    </li>

                </ul>
            
            </nav>

            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='destination' element={<h1>Destination Page</h1>} ></Route>
                <Route path='crew' element={<h1>Whole Crew</h1>} ></Route>
                <Route path='tech' element={<h1>Our Technology Stack</h1>} ></Route>
            </Routes>



    </header>

  </div>
  )
  }

export default App;
