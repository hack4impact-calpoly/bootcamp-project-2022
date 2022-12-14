import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
    name: string;
    image: string;
    description: string;
    info: string[];
    intro: string;
    ingredients: string[];
    instructions: string[];
    image2: string;
}

const RecipeSchema = new Schema<IRecipe>({
    name: { type: String, required: true, },
    image: { type : String, required: true, },
    description: { type: String, required: true, },
    info: { type : [String], required: true, },
    intro: { type : String, required: true, },
    ingredients: { type : [String], required: true, },
    instructions: { type: [String], required: true, },
    image2: { type : String, required: true, }
}, {collection: "Recipes"});

const Recipe = model<IRecipe>("Recipes", RecipeSchema);

export default Recipe;