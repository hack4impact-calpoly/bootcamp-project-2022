import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}

const RecipeSchema = new Schema<IRecipe>({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    ingredients: {type: [String], required: true},
    instructions: {type: [String], required: true},
}, {collection: 'Recipes'});

export const Recipe = model<IRecipe>("Recipes", RecipeSchema, 'Recipes');