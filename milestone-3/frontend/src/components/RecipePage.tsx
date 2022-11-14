import { Recipe } from "../recipeData"
import { useParams } from "react-router-dom"
import './recipePage.css'
import { errorObject } from "../recipeData";
import NoMatch from "./NoMatch";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";


interface Props{
    recipes: Recipe[]
}


export default function RecipePage(props: Props){
    const [newIngredient, setNewIngredient] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [allIngredients, setAllIngredients ]= useState(errorObject)
    const [newMainList, setNewMainList] = useState('')
    const [newSubList, setNewSubList] = useState('')

    const {id} = useParams();
    const recipeUndefined: Recipe | undefined = props.recipes.find((recipe) => (recipe.slug === id))
    let indexCategory = useRef(-1)
    let indexList = useRef(-1)

    useEffect(() => {
        if (recipeUndefined){
            setAllIngredients(recipeUndefined)
            console.log(allIngredients.ingredients)
        }       
    }, [recipeUndefined, allIngredients.ingredients])


    if (allIngredients === errorObject){
        return (
            <NoMatch/>
        )
    }
    else{
        return (
            <>
            <h1 className="flex-container center">{allIngredients.name}</h1>
            <hr/>
            <div className="flex-container">
                <div className="flex-container card larger_image">
                    <img src={allIngredients.image} alt="" width="100%"/>
                    <p>{allIngredients.description}</p>
                </div>
                <div className="flex-container card space_between border ">

                            {allIngredients.ingredients.map((items, index) => (
                            <>
                            <div className="ingredient">
                            <h2 className="white">{index === 0 ? 'Ingredients:': ''}</h2>
                            <h3 className="white70">{items.title}</h3>
                            <ul>
                                {items.ingredients.map((ingredient, index) => (
                                    <li>{ingredient}</li>
                                ))}
                                {((items.title.toLowerCase() === newCategory.toLowerCase() )|| (newCategory === '' && (index+ 1 === allIngredients.ingredients.length))) && <li>{newIngredient}</li>}
                            </ul>
                            </div>
                            </>
                                ))}
                            {(indexCategory.current === -1 && newCategory !== '') && 
                                <div className="ingredient">
                                <h3 className="white70">{newCategory}</h3>
                                <ul>
                                {newIngredient ? <li>{newIngredient}</li> : ''}
                                </ul>
                                </div>}

                            <div className="flex-container center width-100">
                                
                                <input placeholder="Category" value={newCategory} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewCategory(e.target.value);
                                    indexCategory.current = allIngredients.ingredients.findIndex((item) => (item.title.toLowerCase() === e.target.value.toLowerCase()));
                                    console.log(indexCategory)
                                }}/>
                                <input placeholder="Ingredient" value={newIngredient} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewIngredient(e.target.value)
                                }}/>
                                <button onClick={() =>{
                                    
                                    if ( indexCategory.current === -1 && newCategory !== ''){
                                        allIngredients.ingredients.push({title: newCategory, ingredients: [newIngredient]})
                                    }
                                    else{
                                        allIngredients.ingredients.at(indexCategory.current)?.ingredients.push(newIngredient);
                                    }
                                    setNewCategory('')
                                    setNewIngredient('')
                                    console.log(newIngredient)

                                }}>Add New Ingredient</button>
                            </div>
                        
                </div>
                <div id="directions" className="flex-container">
                    <div>
                        <h2>Directions:</h2>
                        <ol>
                        {allIngredients.instructions.map(items => (
                            <>
                            <li>{items.mainList}
                                {items.subList.map((subItem, index) => (
                                    <p key={index}>{subItem}</p>
                                ))}
                                {items.mainList.toLowerCase() === newMainList.toLowerCase() ? <p>{newSubList}</p> : ''}
                            </li>

                            </>
                        ))}
                        {(indexList.current === -1 && newMainList !== '') && <li>{newMainList} <p>{newSubList}</p></li>} 
                        <li>ENJOY!</li>
                        </ol>

                    </div>
                    <div className="flex-container center width-100">
                                <input placeholder="Main-list" value={newMainList} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewMainList(e.target.value)
                                    indexList.current = allIngredients.instructions.findIndex((item) => (item.mainList.toLowerCase() === e.target.value.toLowerCase()));
                                }}/>
                                <input disabled={newMainList === ''} placeholder="Sub-list (optional)" value={newSubList} onChange={(e: ChangeEvent<HTMLInputElement> ) => {
                                    setNewSubList(e.target.value)
                                }}/>
                                <button onClick={() =>{
                                    
                                    if ( indexList.current === -1 && newMainList !== ''){
                                        allIngredients.instructions.push({mainList: newMainList, subList: [newSubList]})
                                    }
                                    else{
                                        allIngredients.instructions.at(indexList.current)?.subList.push(newSubList)
                                    }
                                    console.log(newSubList)
                                    setNewMainList('')
                                    setNewSubList('')


                                }}>Add New Ingredient</button>
                            </div>
                </div>
            </div>
            </>
        )
    }

}