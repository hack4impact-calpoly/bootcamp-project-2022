/**
 * Data for the recipes is stored in this file.
 */

//Data object for Recipe preview cards
export interface RecipePreviewData {
  id: number;
  name: string;
  description: string;
  image: string;
  imgAlt: string;
}

//Using inheritance since both interfaces share properties
export interface Recipe extends RecipePreviewData {
  ingredients: string[];
  instructions: string[];
}

let recipeData: Recipe[] = [
  {
    id: 1,
    name: "Chorizo Pasta",
    description: "An easy pasta dish that is fun for all the family!",
    image:
      "https://thymeandlove.com/wp-content/uploads/2018/10/Ed-Post-3-4-720x720.jpg",
    imgAlt: "Delicious pasta",
    ingredients: ["Pasta", "Soy Chorizo", "Pasta Sauce"],
    instructions: [
      "Boil the pasta until al dente",
      "Heat the pasta sauce",
      "Add the soy chorizo to the pasta sauce",
      "Serve",
    ],
  },
  {
    id: 2,
    name: "Autumnal Soup",
    description: "An easy soup dish that is fun for all the family!",
    image:
      "https://www.thelastfoodblog.com/wp-content/uploads/2018/10/autumn-soup-thumb.jpg",
    imgAlt: "Tasty autumnal soup picture",
    ingredients: [
      "Butternut Squash",
      "Pumpkin",
      "Sweet Potatoes",
      "Olive Oil",
      "Onion",
      "Garlic",
      "Vegetable Broth",
    ],
    instructions: [
      "Cut the sweet potatoes, butternut squash, and pumpkin",
      "Drizzle olive oil on them",
      "Roast them at 375°F",
      "Chop 1 onion and 4 cloves of garlic",
      "In a big soup pot, fry the onion and garlic",
      "Add the roast veggies",
      "Add vegetable broth",
      "Boil gently for a while",
      "Serve",
    ],
  },
  {
    id: 3,
    name: "Cereal",
    description: "An easy cereal dish that is fun for all the family!",
    image:
      "https://www.traderjoes.com/content/dam/trjo/products/m20907/36592.png/jcr:content/renditions/webp-1280.webp",
    imgAlt: "A cereal box",
    ingredients: ["Joe O's", "Oat milk"],
    instructions: [
      "Open the Joe O's",
      "Open the oat milk",
      "Pour the oat milk into the Joe O's",
      "No bowl needed, enjoy!",
    ],
  },
];

export default recipeData;
