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

export default router;
