import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
  name: string, // type not capitalized
  description: string,
  image: string,
  ingredients: string[],
  instructions: string[];
}

const RecipeSchema = new Schema<IRecipe>({
    name: {
		type: String, // type capitalized here
		require : true, // this is optional
	}, 
    description: {
		type: String, 
		require : true, 
	},
    image: {
		type: String, 
		require : true, 
	},
    ingredients: {
		type: [],
		require : true,
	},
    instructions: {
		type: [], 
		require : true,
	},
}, {collection: 'Recipes'});

const Recipe = model<IRecipe>('Recipes', RecipeSchema);

export default Recipe;