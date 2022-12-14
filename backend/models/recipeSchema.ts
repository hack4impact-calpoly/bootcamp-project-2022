import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
    name: string
    image: string
    description: string
    ingredients: string[]
    instructions: string[]
}

const RecipeSchema = new Schema<Recipe>({
    name: { type: String },
    image: { type: String },
    description: { type: String },
    ingredients: { type: [String] },
    instructions: { type: [String] }
});

const Recipe = model<Recipe>("RecipeDoc", RecipeSchema);

export default Recipe;