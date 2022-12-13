import Recipe from "./collections";
import { IRecipe } from "./collections";
function getRecipes() {
  return Recipe.find({}).lean().exec();
}

function getRecipe(name: string) {
  return Recipe.findOne({ name })
    .lean()
    .exec();
}

function createRecipe(body: IRecipe) {
  return Recipe.create(body);
}

function addIngredient(
  body: {
    name: string;
    ingredient: string;
  }
) {
  if (!body.name) {
    throw new Error("Name is required");
  }
  if (!body.ingredient) {
    throw new Error("Ingredient is required");
  }
  return Recipe.findOneAndUpdate(
    { 
      name: body.name
    },
    { $push: { ingredients: body.ingredient } },
    { new: true }
  ).lean().exec();
}

function addInstruction(
  body: {
    name: string;
    instruction: string;
  }
) {
  if (!body.name) {
    throw new Error("Name is required");
  }
  if (!body.instruction) {
    throw new Error("Instruction is required");
  }

  return Recipe.findOneAndUpdate(
    { 
      name: body.name
    },
    { $push: { instructions: body.instruction } },
    { new: true }
  ).lean().exec();
}

export default {
  getRecipes,
  getRecipe,
  createRecipe,
  addIngredient,
  addInstruction
};