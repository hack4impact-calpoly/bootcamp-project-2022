export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    name: "Pumpkin Pie",
    description:
      "My favorite pie. Filled with a smooth pumpkin filling and best served with whipped cream on top.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/FN_Pumpkin-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1386172256183.jpeg",
    ingredients: [
      "1 (15 ounce) can pumpkin puree",
      "1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk",
      "2 large eggs",
      "1 teaspoon ground cinnamon",
      "½ teaspoon ground ginger",
      "½ teaspoon ground nutmeg",
      "½ teaspoon salt",
      "1 (9 inch) unbaked pie crust",
    ],
    instructions: [
      "Preheat the oven to 425 degrees F (220 degrees C).",
      "Whisk pumpkin puree, condensed milk, eggs, cinnamon, ginger, nutmeg, and salt together in a medium bowl until smooth. Pour into crust.",
      "Bake in the preheated oven for 15 minutes.",
      "Reduce oven temperature to 350 degrees F (175 degrees C) and continue baking until a knife inserted 1 inch from the crust comes out clean, 35 to 40 minutes.",
      "Let cool before serving.",
    ],
  },
  {
    name: "Candy Apple",
    description: "Apples in a simple, sweet, coating.",
    image:
      "https://www.thespruceeats.com/thmb/GHEiVqS3sBJEzaJIVHHAyh-FrFA=/1500x1000/filters:fill(auto,1)/candy-apples-520804-hero-01-a95f67ad68994b0c9c7bf4812ab42e93.jpg",
    ingredients: [
      "2 cups granulated sugar",
      "1/4 cup corn syrup",
      "3/4 cup water",
      "1/2 teaspoon red food coloring",
      "8 small-medium apples",
    ],
    instructions: [
      "Insert a stick into the stem end of the apple pushing about halfway through and set aside.",
      "Line a baking sheet with parchment paper and coat generously with cooking spray.",
      "In a large saucepan over high heat, stir together the sugar, syrup and water. Bring the mixture to a boil and turn the heat to medium. Stir in the food coloring. Insert a candy thermometer and continue to boil until the mixture reaches Hard Crack stage (from 300-310 degrees), approximately 15-20 minutes.",
      "Remove the sugar mixture from the heat and quickly dip the apples in the sugar mixture turning to coat.",
      "Transfer to the baking sheet to cool completely.",
    ],
  },
  {
    name: "Mashed Potato",
    description: "Pretty much exactly what it sounds like...",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/12/0/FNM-110111_Neelys-Thanksgiving-045b_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382540862209.jpeg",
    ingredients: [
      "2 pounds baking potatoes, peeled and quarterd",
      "3 cloves garlic, peeled, or to taste (Optional)",
      "1 cup milk",
      "2 tablespoons butter",
      "salt and ground black pepper to taste",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add potatoes and garlic, lower heat to medium, and simmer until potatoes are tender, 15 to 20 minutes.",
      "When the potatoes are almost finished, heat milk and butter in a small saucepan over low heat until butter is melted.",
      "Drain potatoes and return to the pot. Slowly add warm milk mixture, blending it in with a potato masher or electric mixer until potatoes are smooth and creamy. Season with salt and pepper.",
    ],
  },
];

export default recipes;
