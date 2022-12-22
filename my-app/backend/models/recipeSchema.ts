import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const schemaObj = new Schema<Recipe>({
    name: {
        type: String,
        unique: true,
        required: true
        },
    description: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        unique: true,
        required: true
    },
    ingredients: {
        type: [String],
        unique: true,
        required: true
    },
    instructions: {
        type: [String],
        unique: true,
        required: true
    },
}, {collection: 'Recipes'});

const RecipeModel = model<Recipe>('Recipes', schemaObj);

export default RecipeModel;