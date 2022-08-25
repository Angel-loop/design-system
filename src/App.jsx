import { Routes, Route } from "react-router-dom"; 
import { Home } from "./components/Home";
import { Crew } from "./components/Crew";
import { Technology } from "./components/Technology";
import { Destination } from "./components/Destination"
import React from 'react';




const App = () => {
  

    return (
  <div>

 
            <Routes>
                <Route path='/' 
                element={<div className="body-background home" >
                <Home/>
                </div>} ></Route>

                <Route path='destination' 
                element={<div className="body-background destination" >
                <Destination/>
                </div>} ></Route>

                <Route path='crew' 
                element={<div className="body-background crew">
                <Crew/>
                </div>}>
                </Route>

                <Route path='tech' 
                element={<div className="body-background tech" >
                <Technology/>
                </div>}>
                </Route>
                
            </Routes>



    

        
  </div>
  )
  }

export default App;
