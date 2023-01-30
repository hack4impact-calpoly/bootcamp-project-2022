import { Document, Schema, model } from "mongoose";

export interface MyRecipe extends Document {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeSchema = new Schema<MyRecipe>({
  name: {type: String}, 
  description: {type: String}, 
  image: {type: String},
  ingredients: {type: [String]},
  instructions: {type: [String]}
}, {collection: 'Recipes'});

const Recipe = model<MyRecipe>('Recipes', RecipeSchema);

export default Recipe;
