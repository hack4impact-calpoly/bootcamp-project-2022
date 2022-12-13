import { Document, Schema, model } from 'mongoose';

export interface IRecipeSchema extends Document {
    name: [string];
    description: [string];
    image: [string];
    ingredients: [string[]];
    instructions: [string[]];
}

const recipeSchema = new Schema<IRecipeSchema>({
    name: {
        type: [String],
        require: true,
    },
    description: {
        type: [String],
        require: true,
    },
    image: {
        type: [String],
        require: true,
    },
    ingredients: {
        type: [Array<String>],
        require: true,
    },
    instructions: {
        type: [Array<String>],
        require: true,
    },
}, {collection: 'RecipesDB.Recipes'});

const RecipeModel = model<IRecipeSchema>('RecipeDB.Recipes', recipeSchema);

export default RecipeModel