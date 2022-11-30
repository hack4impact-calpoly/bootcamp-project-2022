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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./App.css");
const home_1 = __importDefault(require("./components/home"));
const react_router_dom_1 = require("react-router-dom");
const navbar_1 = __importDefault(require("./components/navbar"));
const RecipePage_1 = __importDefault(require("./components/RecipePage"));
const NoMatch_1 = __importDefault(require("./components/NoMatch"));
const About_1 = __importDefault(require("./components/About"));
const slugify = require("slugify");
function isRecipe(obj) {
    let ingBool = true;
    for (let ing in obj.ingredients) {
        ingBool = ingBool && (typeof ing == 'string');
    }
    let instrBool = true;
    for (let instr in obj.instructions) {
        instrBool = ingBool && (typeof instr == 'string');
    }
    return (obj &&
        typeof obj == 'object' &&
        typeof obj.description == 'string' &&
        typeof obj.image == 'string' &&
        ingBool && instrBool &&
        typeof obj.name == 'string' && (typeof obj.category != 'string'));
}
function convertRecipe(data) {
    const huRecipes = data;
    const new_recipes = [];
    for (let recipe of huRecipes) {
        if (isRecipe(recipe)) {
            new_recipes.push(Object.assign(Object.assign({}, recipe), { category: 'Lunch', ingredients: [{ title: '', ingredients: recipe.ingredients }], instructions: recipe.instructions.map((instruction) => ({ mainList: instruction, subList: [''] })), slug: slugify(recipe.name, { replacement: '_', lower: true }) }));
        }
        else {
            new_recipes.push(Object.assign(Object.assign({}, recipe), { slug: slugify(recipe.name, { replacement: '_', lower: true }) }));
        }
    }
    return new_recipes;
}
function App() {
    const [externalRecipes, setExternalRecipes] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const recipeURLS = ["https://bootcamp-milestone-4.onrender.com/recipe", "http://localhost:3010/recipes"];
    (0, react_1.useEffect)(() => {
        const fetch_data = (urls) => __awaiter(this, void 0, void 0, function* () {
            const json = yield (yield fetch(urls[1])).json();
            const json2 = yield (yield fetch(urls[0])).json();
            setExternalRecipes([...externalRecipes, ...convertRecipe(json), ...convertRecipe(json2)]);
            setLoading(false);
        });
        // fetch_data(recipeURLS[1]).then(() => setLoading(false))
        // fetch_data(recipeURLS[0])
        fetch_data(recipeURLS);
        console.log('reload');
    }, []);
    if (loading) {
        return <div className='flex-container center'><p>Loading...</p></div>;
    }
    return (<react_router_dom_1.BrowserRouter>
      <navbar_1.default />
      <react_router_dom_1.Routes> 
        <react_router_dom_1.Route path='/' element={<home_1.default recipes={externalRecipes}/>}/>
        <react_router_dom_1.Route path='about' element={<About_1.default />}/>
        <react_router_dom_1.Route path="recipes/:id" element={<RecipePage_1.default recipes={externalRecipes}/>}/>
        <react_router_dom_1.Route path='/*' element={<NoMatch_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
