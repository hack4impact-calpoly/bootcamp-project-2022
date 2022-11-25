import express, { Request, Response, Router } from 'express';
import Recipe from '../models/recipeSchema';

const router: Router = express.Router();

// get all recipes
router.get('/', async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  console.log(recipes);
  res.send(recipes);
});

// get recipe by name
router.get('/:name', async (req: Request, res: Response) => {
  const recipes = await Recipe.find({ name: req.params.name });
  console.log(recipes);
  res.send(recipes);
});

// add a new recipe
router.post('/', async (req: Request, res: Response) => {
  const { name, description, image, ingredients, instructions } = req.body;
  let recipe = new Recipe({
    name,
    description,
    image,
    ingredients,
    instructions,
  });
  try {
    recipe = await recipe.save();
    res.send(`Added new recipe - ${name}`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`Failed to add recipe: ${error.message}`);
  }
});

// add an ingredient to a given recipe
router.put('/:name/ingredient', async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findOne({ name: req.params.name });
    if (recipe) {
      recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
      await recipe.save();
      res.send('Added ingredient');
    }
  } catch (error) {
    res.status(400).send(error);
    console.log('Failed to add ingredient');
  }
});

// add am instruction to a given recipe
router.put('/:name/instruction', async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findOne({ name: req.params.name });
    if (recipe) {
      recipe.instructions = [...recipe.instructions, req.body.instruction];
      await recipe.save();
      res.send('Added instruction');
    }
  } catch (error) {
    res.status(400).send(error);
    console.log('Failed to add instruction');
  }
});

export default router;
