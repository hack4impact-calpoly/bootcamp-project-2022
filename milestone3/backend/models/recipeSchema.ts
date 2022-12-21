import { Document, Schema, model } from "mongoose";

export interface IRecipe extends Document {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[]; // type not capitalized
  
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
            unique: true,
            required: true,
        },
        image: {
            type: String, 
            unique: true,
            required: true,
        },
        ingredients: {
            type: [String],
            required: true,
        },
        instructions: {
            type: [String],
            required: true
        }
    }, 
    
{collection: 'Recipes'});

const Recipe = model<IRecipe>('Recipes', RecipeSchema);

export default Recipe;