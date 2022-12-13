import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
    name: string;
    image: string;
    description: string;
    imgAltName: string;
    ingredients: string[];
    instructions: string[];
    orig_link?: string; 
    orig_link_name?: string;
    buttonHref: string;
}

const recipeSchema = new Schema<Recipe>({
    name: { type: String }, 
    image: { type: String }, 
    description: { type: String }, 
    imgAltName: { type: String }, 
    ingredients: { type: [String] }, 
    instructions: { type: [String] }, 
    orig_link: { type: String, required: false },  
    orig_link_name:{ type: String, required: false },  
    buttonHref: { type: String}
}, {collection: 'Recipes'});

const Recipe = model<Recipe>('Recipes', recipeSchema);

export default Recipe;