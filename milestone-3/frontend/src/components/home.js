"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recipePreview_1 = __importDefault(require("./recipePreview"));
function Home(props) {
    console.log("RECIPES:");
    console.log(props.recipes);
    return (<>
        <h1 className="flex-container center">Jesus' Grill</h1>
        <hr />
        <recipePreview_1.default recipes={props.recipes}/>
    </>);
}
exports.default = Home;
