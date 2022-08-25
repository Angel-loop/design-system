import { Navbar } from "./Navbar"
import data from '../data.json'
import moon from '../assets/destination/image-moon.png'

const info = data.destinations

const Component = (props) =>{
    return (
        <>
            <div>
                <img src={props.images.png} alt=''></img>
            </div>
            
            <div>
                <span className="d-block fs-800 ff-serif uppercase">{props.name}</span>
                <p>{props.description}</p>

                <p>{props.distance}</p>
                <p>{props.travel}</p>
            </div>
        </>
    )
}







export const Destination = ()=> {

    console.log(info[0].images.png)

    return(
        <>
            <Navbar/>
            <div className="grid-container">
                <Component {...info[0]}/>
            </div>
        </>
    )
}