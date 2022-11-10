import { Recipe } from "../recipeData";
import React, { useRef} from "react";
import nachos from '../imgs/comida/nachos.webp'
import './navbar.css'


import '../App.css';
import { Link } from "react-router-dom";

interface Recipes{
   recipes: Recipe[]
}

interface RecipeKeys{
   [key: string]: Recipe[]
}





// finding recipes with same category and pushing it into Object's child
function checkMatch(recipes: Recipe[], categoriesString: string[]): RecipeKeys{
   
   const categoriesObj: RecipeKeys = {}

   for (const category of categoriesString){
      categoriesObj[`${category}`] = [];
   }
   
   for (const recipe of recipes){
      categoriesObj[`${recipe.category}`].push(recipe)
   }
   
   return categoriesObj
}

function imageChange(src: string, image_block: React.RefObject<HTMLImageElement>, image_block2: React.RefObject<HTMLImageElement>){
   if (image_block.current && image_block2.current){
      image_block.current.src = src
      
      image_block2.current.src = src
      console.log('ADDED EVENT LISTENER')
      console.log(image_block2.current.parentNode)
   }
   
}

function returnRecipesMap(recipeCategories: RecipeKeys, image_block: React.RefObject<HTMLImageElement>, image_block2: React.RefObject<HTMLImageElement>){
      const keys: string[] = Object.keys(recipeCategories);
      let slugify = require('slugify');
      return (
         <>
         <div>
            {keys.slice(0, 2).map(key => (
               <div className="menu-columns width-50">
                  <h2>{key}</h2>
                  {recipeCategories[`${key}`].map(item => (
                  <h3 onMouseEnter={() => imageChange(item.image, image_block, image_block2)} className="image-text"><Link to={`/recipes/${slugify(item.name, {replacement: '_', lower: true})}`}>{item.name}</Link><span>{item.image}</span></h3>
                  ))}

               </div>
            ))}
            <div className="width-40">
               <div className="absolute hidden">
                  <img ref={image_block2} id="image-block" src={nachos} alt="" />
               </div> 
            </div>
         </div>
         <div>
            {keys.slice(2).map(key => (
               <div className="menu-columns width-50 visible">
                  <h2>{key}</h2>
                  {recipeCategories[`${key}`].map(item => (
                  <h3 onMouseEnter={() => imageChange(item.image, image_block, image_block2)} className="image-text"><Link to={`/recipes/${slugify(item.name, {replacement: '_', lower: true})}`}>{item.name}</Link><span>{item.image}</span></h3>
                  ))}
               </div>
            ))}
         </div>
         </>
      )


      
   }

   function returnRecipesRightHand(recipeCategories: RecipeKeys, image_block: React.RefObject<HTMLImageElement>, image_block2: React.RefObject<HTMLImageElement>){
      const keys: string[] = Object.keys(recipeCategories);
      let slugify = require('slugify');

      return (
         <>
         {keys.slice(2).map(key => (
         <div className="menu-columns width-50 hidden">
            <h2>{key}</h2>  
            {recipeCategories[`${key}`].map(item => ( 
            <h3 onMouseEnter={() => imageChange(item.image, image_block, image_block2)} className="image-text"><Link to={`/recipes/${slugify(`${item.name}`, {replacement: '_', lower: true})}`}>{item.name}</Link><span>{item.image}</span></h3>
            ))}
         </div>

         ))}
         </>
      )


      
   }


export default function RecipePrevew(props: Recipes){


   let recipeCategories: string[] = props.recipes.map((recipe) => recipe.category)
   recipeCategories = recipeCategories.filter((category, index) => recipeCategories.indexOf(category) === index)
   console.log(recipeCategories)

   // making an object to store recipes in same category

   const categoriesObj: RecipeKeys = checkMatch(props.recipes, recipeCategories);
   console.log(categoriesObj);

   const image_container = useRef<HTMLImageElement>(null);
   const image_container2 = useRef<HTMLImageElement>(null);
   const images_div = useRef<HTMLDivElement>(null);


   //returning all available categories
   return (
      <>
      <div ref={images_div} id='menu-items' className="flex-container">
        <div className="menu_rows width-50">
            {returnRecipesMap(categoriesObj, image_container, image_container2)}
         </div>
         <div className="menu-columns width-40">
            <div className="width-40">
                  <div className="absolute">
                     <img ref={image_container} id="image-block" src={nachos} alt="" />
                  </div>
            </div>
            {returnRecipesRightHand(categoriesObj, image_container, image_container2)}
         </div>
      </div>

      </>
   )
}   


