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
const react_router_dom_1 = require("react-router-dom");
require("./recipePage.css");
const recipeData_1 = require("../recipeData");
const NoMatch_1 = __importDefault(require("./NoMatch"));
const react_1 = __importStar(require("react"));
function RecipePage(props) {
    const [newIngredient, setNewIngredient] = (0, react_1.useState)('');
    const [newCategory, setNewCategory] = (0, react_1.useState)('');
    const [allIngredients, setAllIngredients] = (0, react_1.useState)(recipeData_1.errorObject);
    const [newMainList, setNewMainList] = (0, react_1.useState)('');
    const [newSubList, setNewSubList] = (0, react_1.useState)('');
    const { id } = (0, react_router_dom_1.useParams)();
    const recipeUndefined = props.recipes.find((recipe) => (recipe.slug === id));
    let indexCategory = (0, react_1.useRef)(-1);
    let indexList = (0, react_1.useRef)(-1);
    (0, react_1.useEffect)(() => {
        if (recipeUndefined) {
            setAllIngredients(recipeUndefined);
            console.log(allIngredients.ingredients);
        }
    }, [recipeUndefined, allIngredients.ingredients]);
    if (allIngredients === recipeData_1.errorObject) {
        return (<NoMatch_1.default />);
    }
    else {
        return (<>
            <h1 className="flex-container center">{allIngredients.name}</h1>
            <hr />
            <div className="flex-container">
                <div className="flex-container card larger_image">
                    <img src={allIngredients.image} alt="" width="100%"/>
                    <p>{allIngredients.description}</p>
                </div>
                <div className="flex-container card space_between border ">

                            {allIngredients.ingredients.map((items, index) => (<>
                            <div className="ingredient">
                            <h2 className="white">{index === 0 ? 'Ingredients:' : ''}</h2>
                            <h3 className="white70">{items.title}</h3>
                            <ul>
                                {items.ingredients.map((ingredient) => (<li>{ingredient}</li>))}
                                {((items.title.toLowerCase() === newCategory.toLowerCase()) || (newCategory === '' && (index + 1 === allIngredients.ingredients.length))) && <li>{newIngredient}</li>}
                            </ul>
                            </div>
                            </>))}
                            {(indexCategory.current === -1 && newCategory !== '') &&
                <div className="ingredient">
                                <h3 className="white70">{newCategory}</h3>
                                <ul>
                                {newIngredient ? <li>{newIngredient}</li> : ''}
                                </ul>
                                </div>}

                            <div className="flex-container center width-100">
                                
                                <input placeholder="Category" value={newCategory} onChange={(e) => {
                setNewCategory(e.target.value);
                indexCategory.current = allIngredients.ingredients.findIndex((item) => (item.title.toLowerCase() === e.target.value.toLowerCase()));
                console.log(indexCategory);
            }}/>
                                <input placeholder="Ingredient" value={newIngredient} onChange={(e) => {
                setNewIngredient(e.target.value);
            }}/>
                                <button onClick={() => {
                var _a;
                if (indexCategory.current === -1 && newCategory !== '') {
                    allIngredients.ingredients.push({ title: newCategory, ingredients: [newIngredient] });
                }
                else {
                    (_a = allIngredients.ingredients.at(indexCategory.current)) === null || _a === void 0 ? void 0 : _a.ingredients.push(newIngredient);
                }
                setNewCategory('');
                setNewIngredient('');
                console.log(newIngredient);
            }}>Add New Ingredient</button>
                            </div>
                        
                </div>
                <div id="directions" className="flex-container">
                    <div>
                        <h2>Directions:</h2>
                        <ol>
                        {allIngredients.instructions.map(items => (<>
                            <li>{items.mainList}
                                {items.subList.map((subItem, index) => (<p key={index}>{subItem}</p>))}
                                {items.mainList.toLowerCase() === newMainList.toLowerCase() ? <p>{newSubList}</p> : ''}
                            </li>

                            </>))}
                        {(indexList.current === -1 && newMainList !== '') && <li>{newMainList} <p>{newSubList}</p></li>} 
                        <li>ENJOY!</li>
                        </ol>

                    </div>
                    <div className="flex-container center width-100">
                                <input placeholder="Main-list" value={newMainList} onChange={(e) => {
                setNewMainList(e.target.value);
                indexList.current = allIngredients.instructions.findIndex((item) => (item.mainList.toLowerCase() === e.target.value.toLowerCase()));
            }}/>
                                <input disabled={newMainList === ''} placeholder="Sub-list (optional)" value={newSubList} onChange={(e) => {
                setNewSubList(e.target.value);
            }}/>
                                <button onClick={() => {
                var _a;
                if (indexList.current === -1 && newMainList !== '') {
                    allIngredients.instructions.push({ mainList: newMainList, subList: [newSubList] });
                }
                else {
                    (_a = allIngredients.instructions.at(indexList.current)) === null || _a === void 0 ? void 0 : _a.subList.push(newSubList);
                }
                console.log(newSubList);
                setNewMainList('');
                setNewSubList('');
            }}>Add New Ingredient</button>
                            </div>
                </div>
            </div>
            </>);
    }
}
exports.default = RecipePage;
