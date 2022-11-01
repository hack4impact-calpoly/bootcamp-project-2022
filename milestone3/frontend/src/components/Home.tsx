import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <div className="recipe-container">
            <a href="recipe1.html" className="recipe-name">Braised Beef Noodle Soup</a>
            <div className="recipe-info">
                <img src="https://bootcamp-milestone-1.netlify.app/images/beef-noodle-soup.jpg" alt="braised beef noodle soup" />
                <p className="recipe-description">This braised beef noodle soup used Chinese dry aromatics and beef with marbled fat making a delicious rich beef noodle
                soup!</p>
            </div>
        </div>
        <div className="recipe-container">
            <a href="recipe2.html" className="recipe-name">Tomato and Egg</a>
            <div className="recipe-info">
                <img src="https://bootcamp-milestone-1.netlify.app/images/tomato-egg.jpg" alt="tomato and egg" />
                <p className="recipe-description">This 10-minute Chinese tomato egg stir-fry is a dish you'll find on many Chinese home dinner tables. It's fast, easy,
                cheap, and delicious. And vegetarian!</p>
            </div>
        </div>
        <div className="recipe-container">
            <a href="recipe3.html" className="recipe-name">Hot Dry Noodles (Re Gan Mian)</a>
            <div className="recipe-info">
                <img src="https://bootcamp-milestone-1.netlify.app/images/hot-dry-noodles.jpg" alt="hot dry noodles" />
                <p className="recipe-description">Traditional Hot Dry Noodles, or Re Gan Mian (热干面), a sesame noodle dish from Wuhan, capital of Hubei Province in China.</p>
            </div>
        </div>
    </div>
  )
}
