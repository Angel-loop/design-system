import { Link, Routes, Route } from "react-router-dom"; 
import  logo  from './assets/shared/logo.svg'
import { Home } from "./components/Home";
import { Crew } from "./components/Crew";
import { Footer } from "./components/Footer";
const App = () => {
  

 
    return (
  <div className='App' >
        <div className='primary-navigation'>
        
            <nav className='navbar flex'> 
                
                <img src={logo} alt=''></img>
                {/* <ul className='underline-indicators flex'>

                    <li>
                        <Link to='/' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>00</span>Home</Link>
                    </li>

                    <li>
                        <Link to='destination' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>01</span>Destination</Link>
                    </li>

                    <li>
                        <Link to='crew' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>02</span>Crew</Link>
                    </li>
                    
                    <li>
                        <Link to='tech' className='numbered-title letter-spacing-2 uppercase text-white ff-sans-cond'><span>03</span>Technology</Link>
                    </li>

                </ul> */}
            
            </nav>

            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='destination' element={<h1>Destination Page</h1>} ></Route>
                <Route path='crew' element={<Crew/>} ></Route>
                <Route path='tech' element={<h1>Our Technology Stack</h1>} ></Route>
            </Routes>



    </div>

        
  </div>
  )
  }

export default App;
