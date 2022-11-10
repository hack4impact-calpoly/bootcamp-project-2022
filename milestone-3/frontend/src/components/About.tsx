import "./about.css"
import { useRef , useEffect} from "react"
import Navbar from "./navbar";



export default function About(){
    const button = useRef<HTMLButtonElement>(null);
    


    return (

        <>
            <h1 className="flex-container center">About The Grill Master</h1>
            <hr/>
            <h2 className="humble">Started from humble begginings, taught by Gordan Ramsey but raised by Martha Stewart, this culinary genius embodies what every chef inspires to be.</h2>
            <br/>
            <h2 className="humble">You should press my face lol.</h2>
        </>
    )
}