import { Document, Schema, model } from "mongoose";

export interface RecipeI extends Document {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeSchema = new Schema<RecipeI>({
  name: {type: String, unique: true, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  ingredients: {type: [String], required: true},
  instructions: {type: [String], required: true},
}, 
{collection: "Recipes"});

const Recipe = model<RecipeI>("Recipe", RecipeSchema);

export default Recipe;