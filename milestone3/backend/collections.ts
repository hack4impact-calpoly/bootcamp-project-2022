import mongoose from "mongoose";

const Recipe = mongoose.model("recipes", new mongoose.Schema({
  name: "string",
  description: "string",
  image: "string",
  ingredients: [String],
  instructions: [String]
}));

export interface IRecipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export default Recipe;
