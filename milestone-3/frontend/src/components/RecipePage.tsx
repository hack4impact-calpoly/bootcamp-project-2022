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
    const [changeRec, setChangeRec] = useState(false)
    const [changeInstr, setChangeInstr] = useState(false)
    const white_space_regex: RegExp = /[\w]/;
    const min_length: number = allIngredients.ingredients[0].ingredients.length;
    const [newIndexIng, setNewIndexIng] = useState(min_length)
    const [newIndexInstr, setNewIndexInstr] = useState(0)

    const [name, setName] = useState('');
 

    const {id} = useParams();
    const recipeUndefined: Recipe | undefined = props.recipes.find((recipe) => (recipe.slug === id))
    let indexCategory = useRef(-1)
    let indexList = useRef(-1)



    function deleteCategory(index: number){

        if (allIngredients.ingredients.length > 1){
            const confirmation = window.confirm('Do you wish to delete this category?')
            if(confirmation){
            fetch(`http://localhost:3010/recipes/${name}/ingredients`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"position": [index]})
            }).then(response => console.log(response.json()))
            allIngredients.ingredients.splice(index, 1);
            indexCategory.current = -1;
            setAllIngredients({...allIngredients});
        }
        }
        else{
            alert("Minimum 1 Category")
        }
        
    }

    function deleteIngredient(index: number, indexInner: number){

        if (allIngredients.ingredients[index].ingredients.length > 1){
            const confirmation = window.confirm('Do you wish to delete this ingredient?')
            if(confirmation){
                fetch(`http://localhost:3010/recipes/${name}/ingredients`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({"position": [index, indexInner]})
                }).then(response => console.log(response.json()))
                allIngredients.ingredients[index].ingredients.splice(indexInner, 1);
                setAllIngredients({...allIngredients});    
            }

        }
        else{
            deleteCategory(index);
        }


    }

    function addIngredient(){
        if (white_space_regex.test(newIngredient)){
            if ( indexCategory.current === -1 && newCategory !== ''){
                
                fetch(`http://localhost:3010/recipes/${name}/ingredients`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({indexCat: indexCategory.current, indexIng: newIndexIng, ingredient: newIngredient, category: newCategory})
                }).then(response => console.log(response.json()))
                allIngredients.ingredients.push({title: newCategory, ingredients: [newIngredient]})
                setAllIngredients(allIngredients)
            }
            else{
               
                fetch(`http://localhost:3010/recipes/${name}/ingredients`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({indexCat: indexCategory.current, indexIng: newIndexIng, ingredient: newIngredient})
                }).then(response => console.log(response.json()))
                allIngredients.ingredients.at(indexCategory.current)?.ingredients.splice(newIndexIng, 0, newIngredient);
                setAllIngredients(allIngredients)  
            }
            setChangeRec(!changeRec)
            setNewCategory('')
            setNewIngredient('')

        }     
        else{
            alert('NOT AN INGREDIENT!')
        }

    }

    function deleteInstructionCat(index:number){
        
        if (allIngredients.instructions[index].subList.length<= 1){
            const confirmation = window.confirm('Do you wish to delete this category?')
            if(confirmation){
            fetch(`http://localhost:3010/recipes/${name}/instructions`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"position": [index]})
            }).then(response => console.log(response.json()))
            indexList.current = -1;
            allIngredients.instructions.splice(index, 1);
            setAllIngredients({...allIngredients});
        }
        }
    }
    function deleteInstruction(index: number, indexInner:number){

        if (allIngredients.instructions[index].subList.length + 1> 1){
            const confirmation = window.confirm('Do you wish to delete this instruction?')
            if(confirmation){
                fetch(`http://localhost:3010/recipes/${name}/instructions`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({"position": [index, indexInner]})
                }).then(response => console.log(response.json()))
                allIngredients.instructions[index].subList.splice(indexInner, 1);
                setAllIngredients({...allIngredients});    
            }

        }
        else{
            deleteInstructionCat(index)
        }

    }

    function addSubList(){ 
        
        if (white_space_regex.test(newMainList)){
            fetch(`http://localhost:3010/recipes/${name}/instructions`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ indexInstr: newIndexInstr, instruction: newSubList, category: newMainList})
            }).then(response => console.log(response.json()))

            allIngredients.instructions.splice(newIndexInstr, 0, {mainList: newMainList, subList: [newSubList]})
            setAllIngredients(allIngredients)

            
            setChangeInstr(!changeInstr)
            setNewMainList('')
            setNewSubList('')
        }  
        else{
            
            fetch(`http://localhost:3010/recipes/${name}/instructions`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ indexInstr: newIndexInstr, instruction: newSubList})
            }).then(response => console.log(response.json()))
            
            if (newIndexInstr===0){
                const max_length = allIngredients.instructions[newIndexInstr].subList.length;
                allIngredients.instructions[newIndexInstr].subList.splice(max_length, 0, newSubList)
            }
            else{
                const max_length = allIngredients.instructions[newIndexInstr - 1].subList.length;
                allIngredients.instructions[newIndexInstr - 1].subList.splice(max_length, 0, newSubList)
            }
            setAllIngredients(allIngredients)
       
    
            setChangeInstr(!changeInstr)
            setNewMainList('')
            setNewSubList('')
        }

            



    }


    function createIndexes(params: {value: string, index: number, compareIngr?: Recipe, compareInst?: Recipe} ){
       
        if (params.compareIngr){
            console.log("Index: " +params.index)
            const max_length = params.compareIngr.ingredients.length - 1
            
            if (params.index !== -1){
               return  Array.from(Array(params.compareIngr.ingredients[params.index].ingredients.length + 1).keys()).map(index => (<option>{index}</option>))
            }
            else if (white_space_regex.test(params.value) && params.index===-1){
                return (<option>0</option>)
            }
            else{
                indexCategory.current = params.compareIngr.ingredients.length - 1;
                return [...Array.from(Array(params.compareIngr.ingredients[max_length].ingredients.length + 1).keys()).map(index => (<option>{index}</option>))]
            }
        }
        if (params.compareInst){
            return [...Array.from(Array(params.compareInst.instructions.length + 1).keys()).map(index => (<option>{index}</option>))]
            
        }

    }

    useEffect(() => {
        if (recipeUndefined){
            setAllIngredients(recipeUndefined)
  
        }     
        
        setName(allIngredients.name);
    
        
        indexCategory.current = allIngredients.ingredients.length - 1;
    }, [recipeUndefined, allIngredients.ingredients])

    useEffect(()=> {
        if (indexCategory.current !== -1){
            setNewIndexIng(allIngredients.ingredients[indexCategory.current]?.ingredients.length )
            console.log('Ingredients length: ' + newIndexIng)
            console.log(indexCategory.current)
        }
        else{
            if(!white_space_regex.test(newCategory)){
            console.log('Updated indexCategory | ')
            const length = allIngredients.ingredients.length
            indexCategory.current = length - 1;
            setNewIndexIng(allIngredients.ingredients[length - 1].ingredients.length)
            }
            
        }
  
    }, [newCategory, allIngredients, changeRec])

    useEffect(()=> {
        setNewIndexInstr(allIngredients.instructions.length)
    }, [allIngredients, changeInstr])

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
                            <h2 className="white">{index === 0 && <div className="flex-container"><p>Ingredients:</p></div>}</h2>
                            <h3 onClick={() => deleteCategory(index)} className="white70">{items.title}</h3>
                            <ul>
                                {items.ingredients.map((ingredient, indexInner) => { 

                                    if (indexInner === newIndexIng && indexCategory.current === index){
                                        return [(<li onClick={() => {deleteIngredient(index, indexInner)}}>{newIngredient}</li>),(<li>{ingredient}</li>)]
                                    }
                                    else if (indexInner + 1  ===  newIndexIng && newIndexIng  ===  allIngredients.ingredients[index].ingredients.length && indexCategory.current  ===  index){
                                        return [(<li onClick={() => {deleteIngredient(index, indexInner)}}>{ingredient}</li>),(<li>{newIngredient}</li>)]
                                    }
                                    else{
                                        return (<li onClick={() => {deleteIngredient(index, indexInner)}}>{ingredient}</li>)
                                    }
                                    })}
                                {/* {(indexCategory.current  ===  index && newIndexIng  ===  items.ingredients.length || !white_space_regex.test(newCategory) && newIndexIng  ===  items.ingredients.length) && <li>{newIngredient}</li>} */}
                            </ul>
                            </div>
                            </>
                                ))}
                            {(indexCategory.current  === -1 && newCategory !==  '') && 
                                <div className="ingredient">
                                <h3 className="white70">{newCategory}</h3>
                                <ul>
                                {newIngredient ? <li>{newIngredient}</li> : ''}
                                </ul>
                                </div>}
                            { (     
                            <div className="flex-container center width-100">
                                <div className="index-container">
                                <select className="height-100" title="index" value={newIndexIng} onChange={(e) => {setNewIndexIng(Number(e.target.value))}}>
                                    {createIndexes({value: newCategory, index: indexCategory.current,  compareIngr: allIngredients})}
                                </select>
                                <input className="height-80" placeholder="Category" value={newCategory} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewCategory(e.target.value);
                                    indexCategory.current = allIngredients.ingredients.findIndex((item) => (item.title.toLowerCase() === e.target.value.toLowerCase()));
 
                                }}/>
                                </div>
                                <input placeholder="Ingredient" value={newIngredient} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewIngredient(e.target.value)
                                }}/>
                                <div className="width-100 flex-container center margin-top20">
                                <button className="long-width" onClick={addIngredient}>Add New Ingredient</button>
                                </div>
                               
                            </div>
                            )}  
                        
                </div>
                <div id="directions" className="flex-container">
                    <div>
                        <h2>Directions:</h2>
                        <ol>
                        {allIngredients.instructions.map((items, index) => {
                            console.log(newIndexInstr, index)
                            if ((newIndexInstr === index) || (index === 0 && newIndexInstr === 0)){
                                console.log(index)
                                if (white_space_regex.test(newMainList))
                                
                                {
                                    console.log('no white')
                                    return(                             
                                        <>
                                        <li>
                                            {newMainList}
                                            <p>{newSubList}</p>
                                        </li>
                                        <li onClick={() => {deleteInstructionCat(index)}}>{items.mainList}
                                            {items.subList.map((subItem, indexInner) => (
                                                <p  onClick={() => {deleteInstruction(index, indexInner)}} key={index}>{subItem}</p>
                                            ))}
                                        </li>
            
                                        </>)
                                }
                                else{
                                    return (
                                        <>
                                        <li onClick={() => {deleteInstructionCat(index)}}>{items.mainList}
                                            {items.subList.map((subItem, indexInner) => (
                                                <p onClick={() => {deleteInstruction(index, indexInner)}} key={index}>{subItem}</p>
                                            ))}
                                            <p>{newSubList}</p> 
                                        </li>
            
                                        </>
                                    )
                                }
   

                            }
                            else{
                                if (index + 1 === allIngredients.instructions.length && newIndexInstr === index + 1 ){
                                    if (white_space_regex.test(newMainList))
                                    {
                                        return(                             
                                            <>
        
                                            <li onClick={() => {deleteInstructionCat(index)}}>{items.mainList}
                                                {items.subList.map((subItem, indexInner) => (
                                                    <p  onClick={() => {deleteInstruction(index, indexInner)}} key={index}>{subItem}</p>
                                                ))}
                                            </li>
                                            <li>
                                                {newMainList}
                                                <p>{newSubList}</p>
                                            </li>
                                            </>)
                                    }
                                    else{
                                        return(
                                        <>
                                        <li onClick={() => {deleteInstructionCat(index)}}>{items.mainList}
                                            {items.subList.map((subItem, indexInner) => (
                                                <p onClick={() => {deleteInstruction(index, indexInner)}}  key={index}>{subItem}</p>
                                            ))}
                                            <p>{newSubList}</p>
                                        </li>
            
                                        </>   
                            )    
                                    }
                                }
                                else{
                                    return (
                                        <>
                                        <li onClick={() => {deleteInstructionCat(index)}}>{items.mainList}
                                            {items.subList.map((subItem, indexInner) => (
                                                <p onClick={() => {deleteInstruction(index, indexInner)}} key={index}>{subItem}</p>
                                            ))}
                                           
                                        </li>
            
                                        </>
                                    )
                                }

                            }
})}
                        <li>ENJOY!</li>
                        </ol>

                    </div>
                    {(
                    <div className="flex-container center width-100">
                                <select value={newIndexInstr} title="index" onChange={e => {setNewIndexInstr(Number(e.target.value))}}>
                                    {createIndexes({value: newMainList, index: indexList.current, compareInst: allIngredients})}
                                </select>
                                <input placeholder="Main-list" value={newMainList} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewMainList(e.target.value)
                                }}/>
                                <input placeholder="Sub-list" value={newSubList} onChange={(e: ChangeEvent<HTMLInputElement> ) => {
                                    setNewSubList(e.target.value)
                                }}/>
                                <button onClick={() =>{addSubList()}}>Add New Instruction</button>
                            </div>
                            )}
                </div>
            </div>
            </>
        )
    }

}