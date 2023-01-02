import { Document, Schema, model } from "mongoose";

export interface RecipeInterface extends Document {
	name: string
    description: string,
    image: string,
    ingredients: string[],
    instructions: string[]
}

const recipeSchema = new Schema<RecipeInterface>({
	name: String,
    description: String,
    image: String,
    ingredients: [],
    instructions: []
}, {collection: 'Recipes'});

const Recipe = model<RecipeInterface>('Recipes', recipeSchema);

export default Recipe;