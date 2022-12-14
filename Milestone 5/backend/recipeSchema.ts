import {Document, Schema, model} from "mongoose";

export interface ARecipe extends Document {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}
const RecipeSchema = new Schema<ARecipe>(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        ingredients: {type: [String], required: true},
        instructions: {type: [String], required: true},
    },
    {collection: "RecipeDB"}
);

const Recipe = model<ARecipe>("Recipe", RecipeSchema);

export default Recipe;