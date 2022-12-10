import { Document, Schema, model } from "mongoose";

const COLLECTION_NAME = "Recipes";

export interface RECIPE extends Document {
    _id: string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipeSchema = new Schema<RECIPE>({
    _id: {type: String},
    name: {type:String},
    description: {type:String},
    image: {type:String},
    ingredients: {type:[String]},
    instructions: {type:[String]}
}, {collection: COLLECTION_NAME});

const RecipeModel = model<RECIPE>(COLLECTION_NAME, recipeSchema);

export default RecipeModel;