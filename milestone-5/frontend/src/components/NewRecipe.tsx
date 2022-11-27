import { FieldValues, useForm } from "react-hook-form";

interface NewRecipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export default function NewRecipe() {
  const { register, handleSubmit } = useForm();

  function addRecipe(recipe: FieldValues) {
    const formatRecipe: NewRecipe = {
      name: recipe.name,
      description: recipe.description,
      image: recipe.image,
      ingredients: recipe.ingredients.split(","),
      instructions: recipe.instructions.split(","),
    };
    console.log(formatRecipe);
    fetch("http://localhost:3001/recipe/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formatRecipe),
    });
  }
  return (
    <main>
      <h1>Add a Recipe</h1>
      <div className="recipe-container">
        <div className="recipe-content">
          <p>
            You can contribute to the recipe collection by submitting a recipe
            here!
          </p>
          <div className="recipe-form">
            <form onSubmit={handleSubmit((data) => addRecipe(data))}>
              <input
                type="name"
                placeholder="Recipe Name"
                {...register("name")}
              />
              <input
                type="description"
                placeholder="Recipe description"
                {...register("description")}
              />
              <input
                type="imageURL"
                placeholder="Image URL"
                {...register("image")}
              />
              <input
                type="ingredients"
                placeholder="Ingredients"
                {...register("ingredients")}
              />
              <input
                type="instructions"
                placeholder="Instructions"
                {...register("instructions")}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
