import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}

const recipeSchema = new Schema<Recipe>({
    name: { type: String, required: true }, 
    image: { type: String, required: true }, 
    description: { type: String, required: true },
    ingredients: { type: [String], required: true }, 
    instructions: { type: [String], required: true }
}, {collection: 'Recipes'});

const Recipe = model<Recipe>('Recipes', recipeSchema);

export default Recipe;