import { Document, Schema, model } from "mongoose";

export interface RecipeInterface extends Document {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const RecipeSchema = new Schema<RecipeInterface>({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
  },
  { collection: "Recipes" }
);

const Recipe = model<RecipeInterface>('Recipes', RecipeSchema);

export default Recipe;