import { Navbar } from "./Navbar"
import React, { useState } from 'react';
import data from '../data.json'
import spaceport from '../assets/technology/image-spaceport-portrait.jpg'
import launchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsule from '../assets/technology/image-space-capsule-portrait.jpg'


export const Technology = ()=> {

    const [page, setPage] = useState(0)

    const info = data.technology
    const currentPage = info[page]

    const images = {
        "Launch vehicle" : launchVehicle,
        "Spaceport" : spaceport,
        "Space capsule" : spaceCapsule
    }

    return(
        <>
                <Navbar/>
                 <div className="page-title">
                    <h1  className="numbered-title"><span>03</span>Space Launch 101</h1>
                 </div>
                
                    <main className="grid-container grid-container--tech">
                    
                    <div className="circled-indicators flex">
                        <ul>
                            <li className={page === 0 ? "active" : ""} onClick={()=>{setPage(0)}}>
                                <span >1</span>
                            </li>
                            <li className={page === 0 ? "active" : ""} onClick={()=>{setPage(1)}}>
                                <span>2</span>
                            </li>
                            <li className={page === 0 ? "active" : ""} onClick={()=>{setPage(2)}}>
                                <span>3</span>   
                            </li>
                        </ul>                        
                        
                        
                        
                    </div>

                    <article className="tech-details flow">
                    <header className="flow"> 
                        <h2 className="fs-700 ff-serif uppercase">{currentPage.name}</h2>
                    </header>
                    
                        <p className="text-accent">{currentPage.description}</p>

                    </article>

            
                    <img src={images[currentPage.name]} alt=''></img>
                    </main>
            
        </>
    )
}