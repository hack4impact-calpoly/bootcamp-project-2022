import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
  name: string; // type not capitalized
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipeSchema = new Schema<IRecipe>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true }
});

const Recipes = model<IRecipe>('Recipes', recipeSchema);

export default Recipes;