import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipeSchema = new Schema<IRecipe>(
  {
    name: {
      type: String, // type capitalized here
    },
    description: {
      type: String, // type capitalized here
    },
    image: {
      type: String, // type capitalized here
    },
    ingredients: {
      type: [String], // type capitalized here
    },
    instructions: {
      type: [String], // type capitalized here
    },
  },
  { collection: "RecipesDB" }
);

const Recipe = model<IRecipe>("RecipesDB", recipeSchema);

export default Recipe;
