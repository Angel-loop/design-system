import { Navbar } from "./Navbar"
import data from '../data.json'
import moon from '../assets/destination/image-moon.png'
import React, { useState } from 'react';
import mars from '../assets/destination/image-mars.png'
import titan from '../assets/destination/image-titan.png'
import europa from '../assets/destination/image-europa.png'



const info = data.destinations




const images = {
    "Mars" : mars,
    "Moon" : moon,
    "Titan" : titan,
    "Europa" : europa
}

const DestinationNavBar = (props) => {

    return(
        <>
            <ul className=" tab-list underline-indicators flex destination-tab">
                <li  className={props.page === 0 ? "active ff-sans-cond letter-spacing-1 uppercase" : "ff-sans-cond letter-spacing-1 uppercase"} onClick={()=>{props.setPage(0)}}>Moon</li>
                <li  className={props.page === 1 ? "active ff-sans-cond letter-spacing-1 uppercase" : "ff-sans-cond letter-spacing-1 uppercase"} onClick={()=>{props.setPage(1)}}>Mars</li>
                <li  className={props.page === 2 ? "active ff-sans-cond letter-spacing-1 uppercase" : "ff-sans-cond letter-spacing-1 uppercase"} onClick={()=>{props.setPage(2)}}>Europa</li>
                <li  className={props.page === 3 ? "active ff-sans-cond letter-spacing-1 uppercase" : "ff-sans-cond letter-spacing-1 uppercase"} onClick={()=>{props.setPage(3)}}>Titan</li>
            </ul>
        </>
    )
}


const InfoPage = (props) =>{

    const currentPage = props.info[props.page]

    return (
        <main className="grid-container flow">

            <div>
                <img src={images[currentPage.name]} alt='' style={{maxWidth: '100%'}}></img>
            </div>
            
            <article>
            <DestinationNavBar setPage={props.setPage} page={props.page}/>
                <h2 className="fs-800 ff-serif uppercase">{currentPage.name}</h2>
                <p className="text-accent">{currentPage.description}</p>

                    <div className="destination-meta flex">  

                        <div>
                            <h3 className="ff-sans-cond uppercase fs-100 letter-spacing-3 text-accent">avg. distance</h3>
                            <span className="ff-serif fs-500 d-block text-white">{currentPage.distance}</span>
                        </div>

                        <div>
                            <h3 className="ff-sans-cond uppercase fs-100 letter-spacing-3 text-accent">est. travel time</h3>
                            <span className="ff-serif fs-500 d-block text-white">{currentPage.travel}</span>
                        </div>              
                </div>
            </article>
        </main>
    )
}







export const Destination = ()=> {
    const [page, setPage] = useState(0)

    return(
        <>
            <Navbar/>
            
            <div className="page-title">
                <h1  className="numbered-title fs-400 uppercase"><span>01</span>Pick your destination</h1>
            </div>
            

                <InfoPage 
                page={page}
                setPage={setPage}
                info={info}/>

        </>
    )
}