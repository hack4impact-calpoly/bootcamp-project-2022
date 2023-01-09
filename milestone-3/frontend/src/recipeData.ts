export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    altDesc: string;
  }

  const recipes: Recipe[] = [
	{
    name: "Carne Asada Quesadilla",
    description: "Very cheesy and beefy carne asada quesadilla\nPrep Time: 5 minutes | Cook Time: 6 minutes",
    image: "https://www.mommafitlyndsey.com/wp-content/uploads/2022/01/carne-asada-quesadilla-image.png",
    ingredients: [
        "1 Flour Tortilla",
        "1/8 cup Shredded Mexican Cheese Blend",
        "1 cup of Carne Asada",
        "Salsa"
    ],
    instructions: [
        "Heat your pan over medium heat.",
        "Place your tortilla onto the pan once warm.", 
        "Add 1 cup of cooked carne asada to one side of the tortilla and cover with 1/16 cup of cheese.",
        "Add remaining cheese to the other side of the tortilla and fold that side over the steak side.",
        "Allow quesadilla to cook for 2-3 minutes or until nicely golden on the bottom. Flip and cook another 2-3 minutes or until cheese is melted and tortilla is golden brown.",
        "Serve and enjoy with salsa!"
    ],
    altDesc:"Carne asada quesadillas on a plate"
    },

	{
    name: "Sweet Potato Fries",
    description: "Very crispy sweet potato fries\nPrep Time: 30 minutes | Cook Time: 20 minutes",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/07/sweet-potato-fries-5-500x500.jpg",
    ingredients: [
        "1 Medium Size Sweet Potato",
        "1 Tablespoon of Olive Oil",
        "3/4 Tablespoons of Corn Starch",
        "Salt",
        "Black Pepper",
        "Cooking Spray"
    ],
    instructions: [
        "Wash and peel the sweet potato.",
        "Cut the sweet potato into 3/8 inch wide sticks.", 
        "Stir together the salt, pepper, and cornstarch.",
        "Cover the fries in the salt, pepper and cornstarch until coated.",
        "Toss the fries with olive oil until coated.",
        "Place the fries in a single layer on a sheet pan lined with foil and coated with cooking spray.",
        "Bake the fries for 15 minutes at 400 degrees F or until golden.",
        "Turn over the fries and bake for an additional 10 minutes or until golden.",
        "Season with any additional salt and pepper to taste.",
        "Serve and enjoy the fries hot and crispy!"
    ],
    altDesc:"Sweet Potato Fries"
    },

    {
        name: "Mexican Flan",
        description: "Very caramelly Mexican Flan\nPrep Time: 20 minutes | Cook Time: 75 minutes",
        image: "https://cdn7.kiwilimon.com/recetaimagen/2356/40673.jpg",
        ingredients: [
            "1 Cup Evaporated Milk",
            "1 Cup Condensed Milk",
            "2 Eggs",
            "1 Teaspoon Vanilla Extract",
            "6 Tablespoons Sugar",
            "1 Pinch Cinnamon Powder"
        ],
        instructions: [
            "Preheat oven to 347 °F.",
            "In a pot, add sugar and heat over medium heat. Stir continuously until it becomes a caramel.", 
            "Pour caramel on a flan pan while hot and set it aside.",
            "Combine all ingredients in a blender and blend until smooth. Pour into the caramel-lined flan pan.",
            "Place flan pan in the oven on a water bath. Make sure the water does not splash onto the flan!",
            "Bake at 350°F for about 45 minutes or until you can stick a fork in the flan and it comes out clean.",
            "Remove from the oven and let cool. Refrigerate and unmold.",
            "Serve and enjoy the Mexican flan cold!"
        ],
        altDesc:"A Mexican flan on a plate"
        }
];

export default recipes; // This will allow us to access this data anywhere!
