export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }


  const recipe1: Recipe = {
    name: "Garlic Naan",
    description: "Indian flatbread",
    image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-restaurant-style-indian-garlic-naan-3-ways-video-recipe.jpg",
    ingredients: ["1/4 cup warm water",
    "teaspoons granulated sugar",
    "cup warm milk",
    "cup vegetable oil",
    "teaspoon baking powder",
    "cloves minced garlic",
    "4 cups flour",
    "1 1/2 teaspooons active dry yeast",
    "cup plain Greek yogurt"],
    instructions: ["Combine together the water, sugar and yeast",
    "Let sit for 5-10 minutes",
    "Add in milk, yogurt, oil, garlic, baking powder, salt",
    "Mix until dough comes together",
    "Turn dough out onto lightly floured surface. Use floured hands to knead the dough until smooth, about 3 to 5 minutes.",
    "Lightly grease the same mixing bowl with a small spray of cooking oil. Transfer dough to the bowl and cover with plastic wrap. Let rest at room temperature for about an hour until doubled in size",
    "When ready to cook, divide the dough into 10 equal pieces. Roll into balls, then use a rolling pin to roll each piece of dough into a large oval, about 6-inches long and 1/8-inch thick. Repeat with remaining dough.",
    "Heat a large cast iron skillet over medium-high heat. Grease skillet all over with 1/2 teaspoon of the extra oil.",
    "Place one piece of the naan on the oiled hot skillet and cook until bubbles form on top, about 1-2 minutes. While cooking, brush the top with a little oil",
    "Flip and cook for another 1-2 minutes, until large golden spots appear on the bottom",
    "Remove from the skillet and wrap in a clean kitchen towel. Repeat with the remaining naan (keep them wrapped in a towel while you work",
    "Enjoy!"]
}


const recipe2: Recipe = {
    name: "Paneer Butter Masala",
    description: "Paneer dish traditionally served with Naan",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-Recipe-1-500x500.jpg",
    ingredients: ["1 tablespoon oil",
    "2 green cardamoms",
    "1 cup onions",
    "1 1/2 cup tomatoes",
    "3/4 teaspoon salt",
    "3/4 teaspoon sugar",
    "12-14 cashews",
    "1 teaspoon red chili powder",
    "3/4 teaspoon garam masala",
    "1 1/4 tablespoon butter",
    "Ginger garlic paste",
    "200 grams panner",
    "3 tablespoons cream"],
    instructions: ["Heat 1 tablespoon oil in pan",
    "Add 1 cup onions and stir often",
    "Add 1 1/2 cup tomatoes and salt",
    "Cook until onions and tomatoes are soft",
    "Add 3/4 teaspoon garam masala, 12 cashews, and red chili powder",
    "Fry for 2-3 minutes",
    "Transfer to blender with 1 cup water",
    "Add 1 1/2 tablespoon butter to a pan",
    "Add in garlic and giner and stir for 1 minute",
    "Pour the blended puree into the pan, add water, and mix",
    "Add paneer to pan and cook for 3 minutes",
    "And cream and mix well",
    "Enjoy!"]
}


const recipe3: Recipe = {
    name: "Gobi Manchurian",
    description: "Fried cauliflower dish",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/gobi-manchurian-dry-recipe-1.jpg",
    ingredients: ["250 grams cauliflower florets",
    "1/2 cup flour",
    "1/4 cup cornstarch",
    "1 teaspoon red chili powder",
    "1/4 teaspoon black pepper",
    "1/4 teaspoon salt",
    "1/2 cup water",
    "1 tablespoon garlic",
    "1/3 cup onions",
    "1/4 cup bell pepper",
    "1 tablespoon soy sauce",
    "1/2 rice vinegar"],
    instructions: ["Bread caulifower florets and set aside",
    "Add oil to the pan",
    "When oil is hot, add small amounts of batter to florets and drop in oil",
    "After they are golden brown drain them with a tissue",
    "Mix chili powder and water to a paste",
    "Heat 1/2 teaspoon oil to another pan",
    "Add ginger garlic paste and saute",
    "Add soy sauce, red chili sauce, and paste and rice vinegar",
    "Cook on medium heat until sauce thickens",
    "Add in fried cauliflower and stir until combined",
    "Enjoy!"]
}

const recipes: Recipe[] =[
    recipe1, recipe2,recipe3
];

export default recipes;

