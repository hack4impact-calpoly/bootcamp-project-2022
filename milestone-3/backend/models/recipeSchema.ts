import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
  recipeName: string; // type not capitalized
  description: string;
  image: string;
  ingredients: [string];
  instructions: [string];
}

const RecipeSchema = new Schema<IRecipe>({
  recipeName: {type: String},
  description: {type: String},
  image: {type: String},
  ingredients: {type: [String]},
  instructions: {type: [String]},
});

const Recipe = model<IRecipe>('Recipes', RecipeSchema);

export default Recipe;