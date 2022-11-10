import React from 'react';
import "./Home.css";

export default function Home() {
    return (
        <header>
            <h1 className="title-header">Welcome to Nick's Filipino Feasts!</h1>
            <div className="description-box">
                <a href="recipe-pages/adobo.html" className="food-name">Chicken Adobo</a>
                <br/>
                <span className="content">
                    <img src="https://www.sandravalvassori.com/wp-content/uploads/2022/05/Adobo-chicken-9894-2.jpg" alt="Adobo pic" className="pic"/>
                    <p>Chicken Adobo is a tangy chicken stew marinated in soy sauce and spices, pan-fried, and stewed.</p>
                </span>
            </div>
            <div className="description-box">
                <a href="recipe-pages/lumpia.html" className="food-name">Beef and Pork Lumpia</a>
                <br/>
                <span className="content">
                    <img src="https://img.buzzfeed.com/video-api-prod/assets/cca4d5ea049a4ba08f5e26a0272dbe25/BeautyShotbeautyTemplate.jpg" alt="Lumpia pic" className="pic"/>
                    <p>Beef and Pork Lumpia is a type of crunchy egg roll filled with ground meat and various seasoned vegetables.</p>
                </span>
            </div>
            <div className="description-box">
                <a href="recipe-pages/sotanghon.html" className="food-name">Chicken Sotanghon</a>
                <br/>
                <span className="content">
                    <img src="https://salu-salo.com/wp-content/uploads/2014/06/Chicken-Sotanghon-Soup-Bean-Thread-Noodle-Soup-3.jpg" alt="Sotanghon pic" className="pic"/>
                    <p>Chicken Sotanghon is the Filipino chicken noodle soup made with vegetables, rice noodles, and flavorful fish sauce.</p>
                </span>
            </div>
        </header>
    );
}