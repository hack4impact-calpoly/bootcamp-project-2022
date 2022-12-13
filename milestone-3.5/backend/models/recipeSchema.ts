import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document{  
    name: string; 
    description: string; 
    image: string; 
    ingredients: string[];
    instructions: string[];
    external?: boolean;
}

const RecipeSchema = new Schema<IRecipe>(
    {
        name: {
            type: String, 
            unique: true, 
            required: true,
        },
        description: {
            type: String, 
            required: true,
        },
        image: {
            type: String, 
            required: true,
        },
        ingredients: {
            type: [String],
            required: true,
        },
        instructions: {
            type: [String],
            required: true,
        },
    },
    { collection: "Recipes" }
);

const Recipe = model<IRecipe>("Recipe", RecipeSchema);

export default Recipe; 
