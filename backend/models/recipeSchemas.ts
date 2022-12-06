import { Schema, Document, model } from 'mongoose';

export interface Recipe extends Document {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeSchema = new Schema<Recipe>(
  {
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
  },
  { collection: 'Recipes' }
);

const Recipe = model<Recipe>('Recipes', RecipeSchema);

export default Recipe;