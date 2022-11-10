import React from "react";
import "./about.css";

export default function About() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <div className="About-us">
       
            {/* <img src='./img/about.jpg' > */}
            <h1>Our mission is to help you become a food master.</h1>
            
         
        
          <p> Please follow us on: </p>
           <a href="#" className="fa fa-facebook"></a> 
           <a href="#" className="fa fa-twitter"></a> 
           <a href="#" className="fa fa-linkedin"></a> 
          </div>
  );
}