import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import React from 'react';


export const Home = () =>{
   
   return(
    <>
        <Navbar/>

        <div className="grid-container grid-container--home">
            <div>
                <h1 className='ff-sans-cond fs-500 uppercase letter-spacing-2'>  So, You want to travel to<span className="ff-serif fs-900 d-block">space</span>
                </h1>

                <p>  Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
        
            </div>

            <div>
                <Link to='destination' className="large-button uppercase ff-serif text-dark bg-white">Explore</Link>
            </div>
    </div>
    </>
   )
   
   
}