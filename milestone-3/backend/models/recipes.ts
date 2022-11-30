import {Document, Schema, model, InferSchemaType, Collection} from 'mongoose'


export interface ingredientsObj {
    title: string;
    ingredients: string[];
}

export interface instructionsObj {
    mainList: string;
    subList: string[];
}
const ingredientsSchema = new Schema<ingredientsObj>({
    title: {type: String, required: true},
    ingredients: {type: [String], required: true},
})

const instructionsSchema = new Schema<instructionsObj>({
    mainList: {type: String, required: true},
    subList: {type: [String], required: true},
})

export interface RecipeInterface {
    category: string;
    name: string;
    description: string;
    image: string;
    ingredients: ingredientsObj[];
    instructions: instructionsObj[];
    slug?: string;
}

const recipeSchema = new Schema<RecipeInterface>({
   category: {type: String, required:true},
   name: {type: String, required:true},
   description: {type: String, required:true},
   image: {type: String, required:true},
   ingredients: {type: [{title: String, ingredients: [String]}], required: true},
   instructions: {type: [{mainList: String, subList: [String]}], required: true},
   slug: String
}, {collection: 'Recipes'})


export const Recipe = model<RecipeInterface>('Recipes', recipeSchema, 'Recipes')
