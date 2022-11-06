
import profile from "./images/profile.jpeg"
export default function About(){
    return (
        
        <section className="about" id="about">
                <div className="max-width"/>
                    <h2 className="title">About The Chef</h2>
                    <div className="about-content">
                        <div className="col left">
                            <div className="slideshow-container">
                                    <img src={profile} alt=""/>
                            </div>
                        </div>
                    
                        <div className="col right">
                            <div className="text">
                                Hi! I'm <span>Ian</span> and I'm a sophomore <span>computer science</span> student at <span>California Polytechnic State University San Luis Obispo</span>. 
                            </div>
                    </div>
                </div>
            </section>);

}