import noodles from './noodles.png'
import peanut_butter from './peanut-butter.png'
import toast from './toast.png'
import site_icon from './site-icon.png'
import "./Home.css"
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div className="page-card-wrapper">
            <div className="page-card">
                <div className="nav-menu"> 
                    <img src={site_icon} className="nav-image" />
                    <Link className="nav-text" to="/about">About</Link>
                </div>

                <div className="recipe-container">
                    <div className="recipe">
                        <img className="recipe-icons" src={toast} />
                        <a href="toast.html"><p className="recipe-text"> Over-toasted buttered toast</p></a>
                    </div>
                    <div className="recipe">
                        <img className="recipe-icons" src={noodles} />
                        <a href="noodles.html"><p className="recipe-text">Barely-undercooked instant noodles</p></a>
                    </div>
                    <div className="recipe">
                        <img className="recipe-icons" src={peanut_butter} />
                        <a href="peanut-butter.html"><p className="recipe-text">Peanut-butter-only sandwich</p></a>
                    </div>
                </div>
            </div>  

            <div className="description-layout-wrapper">
                <div className="logo-text">
                    <span>
                        <em>that</em> easy
                    </span>
                </div>

                <div className="description-text">
                    <span>
                        Straightforward recipes for things you <em>should </em> 
                        know how to cook.
                    </span>
                </div>
            </div>
        </div>
    );
}