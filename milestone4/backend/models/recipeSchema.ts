import { Document, Schema, model } from "mongoose";

export interface RecipeIF extends Document {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipeSchema = new Schema<RecipeIF>({
    name: {
		type: String, // type capitalized here
		required : true // this is optional
	}, 
	description: {
		type: String, // type capitalized here
		required : true // this is optional
	}, 
    image: {
		type: String, // type capitalized here
		required : true, // this is optional
	}, 
    ingredients: {
		type: [String], // type capitalized here
		required : true, // this is optional
	}, 
    instructions: {
		type: [String], // type capitalized here
		required : true, // this is optional
	}, 
}, {collection: 'Recipes'});

const Recipe = model<RecipeIF>('Recipes', recipeSchema);

export default Recipe;