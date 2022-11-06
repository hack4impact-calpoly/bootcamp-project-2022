import React from "react";
import "./Home.css";
import profile from "./images/profile.jpeg"
export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <section className="home" id="home">
        <div className="max-width">
            
                <div className="home-content">
                    <div className="col left">
                        <div className="text-media">
                            <div className="text-1">Hi, my name is </div>
                            <div className="text-2"><span>Ian Loo</span></div>
                            <a href="#projects">See my favorite foods!</a>
                        </div>
                    </div>
                    <div className="col right">
                        <div className="home-profile-pic">
                            <img src={profile} alt=""/>
                        </div>
                    </div>
                </div>
            
            
        </div>
    
        
    </section>
  );
}