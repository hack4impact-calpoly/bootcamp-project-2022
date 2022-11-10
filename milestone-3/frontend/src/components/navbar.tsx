import React, {useRef, useEffect, useState, forwardRef} from 'react'
import faceImg from '../imgs/chef_icon.png'
import { Link } from 'react-router-dom';



export default function Navbar(){

    const face = useRef<HTMLImageElement | null>(null);
    const [button_count, setButtonCount] = useState(0)
    useEffect(() => {
    if (face.current){
        face.current.addEventListener('click', () => {
            if (face.current != null){
                if (button_count < 3){
                    face.current.width = face.current.width * 1.1;
                    face.current.height = face.current.height * 1.1;
                    setButtonCount(button_count + 1);
                }
                else{
                    face.current.width = face.current.width * 2;
                    face.current.height = face.current.height * 2;
                }
            }
        })
    }
})

    return (
    <>
    <header>
        <img ref={face} className='logo' src={faceImg} alt="logo" width="200px" height="200px" />
        <nav>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        
    </header>

    
    </>
    )

    
}