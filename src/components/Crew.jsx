import { Navbar } from "./Navbar"
import React from 'react';
import data from '../data.json'
import douglas from '../assets/crew/image-douglas-hurley.png' 
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import { useState } from "react";


export const Crew = () => {
   
    const images = {
        "Douglas Hurley": douglas,
        "Mark Shuttleworth" : mark,
        "Victor Glover" : victor,
        "Anousheh Ansari" : anousheh
    }

    const [page, setPage] = useState(0)

    const info = data.crew
    const currentPage = info[page]

    return(
        <>
        <Navbar/>
        
        <div className="page-title">
        <h1  className="numbered-title"><span>02</span>Meet your Crew</h1>
            </div>
        
        <main className="grid-container grid-container--crew">
            
            <div className="dot-indicators flex">
                <button className={page === 0 ? "active" : ""} onClick={()=>{setPage(0)}}><span className="sr-only">The Commander</span></button>
                <button className={page === 1 ? "active" : ""} onClick={()=>{setPage(1)}}><span className="sr-only">The Mission Specialist</span></button>
                <button className={page === 2 ? "active" : ""} onClick={()=>{setPage(2)}}><span className="sr-only">The Pilot</span></button>
                <button className={page === 3 ? "active" : ""} onClick={()=>{setPage(3)}}><span className="sr-only">The Crew Engineer</span></button>
            </div>

            <article className="crew-details flow">
            <header className="flow"> 
                <h2 className="uppercase fs-600 ff-serif">{currentPage.role}</h2>
                <p className="fs-700 ff-serif uppercase">{currentPage.name}</p>
            </header>
              
                <p className="text-accent">{currentPage.bio}</p>

            </article>

    
            <img src={images[currentPage.name]} alt=''></img>
            


        </main>
        </>
    )
}