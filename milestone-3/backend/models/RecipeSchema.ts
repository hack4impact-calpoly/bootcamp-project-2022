import { Document, Schema, model } from 'mongoose';

export interface IRecipeSchema extends Document {
    name: string;
    description: string;
    image: string;
    ingredients: [string[]];
    instructions: [string[]];
}

const recipeSchema = new Schema<IRecipeSchema>({
    name: {
        type: String,
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
}, {collection: 'Recipes'});

const RecipeModel = model<IRecipeSchema>('RecipeModel', recipeSchema);

export default RecipeModel