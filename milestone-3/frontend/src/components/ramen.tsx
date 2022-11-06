
import ramen from "./images/ramen.jpeg"
import laksa from "./images/laksa.jpeg"
import satay from "./images/satay.jpeg"
import { Recipe } from "../recipeData";
import { Link } from "react-router-dom";

export default function SubPage(props: Recipe){
    return (
        
    <section className="huffman-page"id="huffman-page">
    <body>
        <div className="max-width">
            <div className="top-sec">
                <Link to='/'>Home</Link>
                <h2 className="title">{props.name}</h2>
                
            </div>
            <div className="huffman-content">
                
                    
                    {/* <!-- <h2 className="huffman-sec">Huffman Encoding/Decoding (python)</h2> -->
                    <!-- go back button to go back to the index.html --> */}
                    <div className="col left">
                        <img src= {props.image}/>

                    </div>

                    <div className="col right">
                        <div className="first">
                            <p> 
                                <h2>INGREDIENTS</h2>
                                <ul>
                                    <li>{props.ingredients}</li>
                                    
                                </ul>
                            </p>

                            <p>
                                <h2>PREPARATION</h2>
                                <ol>
                                    <li>{props.instructions}</li>
                                    
                                </ol>
                            </p>
                    </div>
                </div>
            </div>
            </div>
        </body>
    </section>);

}