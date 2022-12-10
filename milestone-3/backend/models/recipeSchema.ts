import { Document, Schema, model } from "mongoose";

export interface RecipeInterface extends Document {
  name: string; // type not capitalized
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipeSchema = new Schema<RecipeInterface>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: {type: [String], required: true },
  instructions: {type: [String], required: true }

}, {collection: 'Recipes'});

const Recipe = model<RecipeInterface>('Recipes', recipeSchema);

export default Recipe;