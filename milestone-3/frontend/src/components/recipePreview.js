"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const nachos_webp_1 = __importDefault(require("../imgs/comida/nachos.webp"));
require("./navbar.css");
require("../App.css");
const react_router_dom_1 = require("react-router-dom");
let slugify = require('slugify');
// finding recipes with same category and pushing it into Object's child
function checkMatch(recipes, categoriesString) {
    const categoriesObj = {};
    for (const category of categoriesString) {
        categoriesObj[`${category}`] = [];
    }
    for (const recipe of recipes) {
        categoriesObj[`${recipe.category}`].push(recipe);
    }
    return categoriesObj;
}
function imageChange(src, image_block, image_block2) {
    if (image_block.current && image_block2.current) {
        image_block.current.src = src;
        image_block2.current.src = src;
        console.log('ADDED EVENT LISTENER');
        console.log(image_block2.current.parentNode);
    }
}
function returnRecipesMap(recipeCategories, image_block, image_block2) {
    const keys = Object.keys(recipeCategories);
    return (<>
         <div className="menu-columns width-50">
            {keys.slice(0, 2).map(key => (<div className="menu-columns width-50">
                  <h2>{key}</h2>
                  {recipeCategories[`${key}`].map(item => (<h3 onMouseEnter={() => imageChange(item.image, image_block, image_block2)} className="image-text"><react_router_dom_1.Link to={`/recipes/${slugify(item.name, { replacement: '_', lower: true })}`}>{item.name}</react_router_dom_1.Link><span>{item.image}</span></h3>))}

               </div>))}
            <div className="width-40">
               <div className="absolute hidden">
                  <img ref={image_block2} id="image-block" src={nachos_webp_1.default} alt=""/>
               </div> 
            </div>
         </div>
         <div className="menu-columns width-5 visible">
            {keys.slice(2).map(key => (<div className="menu-columns width-50 visible">
                  <h2>{key}</h2>
                  {recipeCategories[`${key}`].map(item => (<h3 onMouseEnter={() => imageChange(item.image, image_block, image_block2)} className="image-text"><react_router_dom_1.Link to={`/recipes/${slugify(item.name, { replacement: '_', lower: true })}`}>{item.name}</react_router_dom_1.Link><span>{item.image}</span></h3>))}
               </div>))}
         </div>
         </>);
}
function returnRecipesRightHand(recipeCategories, image_block, image_block2) {
    const keys = Object.keys(recipeCategories);
    return (<>
         {keys.slice(2).map(key => (<div className="menu-columns width-50 hidden">
            <h2>{key}</h2>  
            {recipeCategories[`${key}`].map(item => (<h3 onMouseEnter={() => imageChange(item.image, image_block, image_block2)} className="image-text"><react_router_dom_1.Link to={`/recipes/${slugify(`${item.name}`, { replacement: '_', lower: true })}`}>{item.name}</react_router_dom_1.Link><span>{item.image}</span></h3>))}
         </div>))}
         </>);
}
function RecipePrevew(props) {
    let recipeCategories = props.recipes.map((recipe) => recipe.category);
    recipeCategories = recipeCategories.filter((category, index) => recipeCategories.indexOf(category) === index);
    // making an object to store recipes in same category
    const categoriesObj = checkMatch(props.recipes, recipeCategories);
    console.log(categoriesObj);
    const image_container = (0, react_1.useRef)(null);
    const image_container2 = (0, react_1.useRef)(null);
    const images_div = (0, react_1.useRef)(null);
    //returning all available categories
    return (<>
      <div ref={images_div} id='menu-items' className="flex-container">
        <div className="menu_rows width-50">
            {returnRecipesMap(categoriesObj, image_container, image_container2)}
         </div>
         <div className="menu-columns width-40">
            <div className="width-40">
                  <div className="absolute">
                     <img ref={image_container} id="image-block" src={nachos_webp_1.default} alt=""/>
                  </div>
            </div>
            {returnRecipesRightHand(categoriesObj, image_container, image_container2)}
         </div>
      </div>

      </>);
}
exports.default = RecipePrevew;
