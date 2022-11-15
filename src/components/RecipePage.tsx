import {Recipe} from "../recipeData"
import './recipePage.css'
import { useParams } from "react-router-dom";
import recipes from "../recipeData";


export default function RecipePage(){

    const { id } = useParams();

    let target = recipes.find(element => (element.name == id))

    if(target == undefined){return (<>error!</>)}
    
    return(

        <main>

        

        <div className="card">
       

            <h1 className="title2">{target.name  }</h1>

            <div className="card-body">

                <img className="card-img" src={target.image} /> 

                <ul className="card-text"> 
                

                 {target.ingredients.map(function(name, index) {
                return <li key={index}>{name}</li>;
                    })}


                </ul>
            </div>
        </div>

        <div className="card">

            <div className="preparations-title"> 

            <p>Steps</p>

                       
            </div>

                         {/* was prepartions-body but couldnt find that in my original style sheet {*/}

                    
            <ol className ="card-text">

                        {target.ingredients.map(function(name, index) {
                            return <li key={index}>{name}</li>;
                        })}

            </ol>
            

            </div>

            </main>

        
        
            
        
                    

    )
}



{/*}
    <main>

        

        <div className="card">
       

            <h1 className="title2">{target.name  }</h1>

            <div className="card-body">

                <img className="card-img" src={target.image} /> 

                <ul className="card-text"> 
                    {target.ingredients.map((ingredients) => (
                    <li> ingredients</li>
                    ))};
                </ul>
            </div>
        </div>

        <div className="card">

            <div className="preparations-title"> 

            <p>Steps</p>

                       
            </div>

                         {/* was prepartions-body but couldnt find that in my original style sheet 

                    
            <ol className ="preparations">

                {target.instructions.map((steps) => ( <li> steps </li>)) }

            </ol>
            

            </div>

            </main>


{*/}