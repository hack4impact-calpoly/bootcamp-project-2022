import { Document, Schema, model } from "mongoose";

export interface Recipe extends Document {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    altDesc: string;
}

const RecipeSchema = new Schema<Recipe>(
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
      required: true,
    },
    altDesc: {
        type: String,
        required: true,
    }
  },
  { collection: "Recipes" }
);

const Recipe = model<Recipe>("Recipes", RecipeSchema)
export default Recipe;
