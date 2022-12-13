export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipeData: Recipe[] = [
    {
        name: "Sweet and Easy Corn on the Cob",
        description: "Corn on the cob is cooked in boiled water with a little sugar and lemon juice for the sweetest, tastiest corn! My mother-in-law gave me this easy recipe.",
        image: "https://www.allrecipes.com/thmb/ktvwE0kT-UXKrtyaBenmSw-to_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222352-jamies-sweet-and-easy-corn-on-the-cob-rae-1x1-1-b9082581de2e4f34b3271f6646bcc7c6.jpg",
        ingredients: [
            "2 tablespoons white sugar",
            "1 tablespoon lemon juice",
            "6 ears corn on the cob, husks and silk removed"
        ],
        instructions: [
            "Fill a large pot about 3/4 full of water and bring to a boil. Stir in sugar and lemon juice until sugar is dissolved.",
            "Gently place ears of corn into boiling water, cover the pot, turn off the heat, and let corn cook in the hot water until tender, about 10 minutes."
        ]
    },
    {
        name: "Old Fashioned Onion Rings",
        description: "Onion rings are a popular appetizer at many restaurants, and with this recipe, you can satisfy your craving at home. This is an actual recipe from a former employee of a popular drive-in restaurant. Sweet and tender on the inside, crispy and crunchy on the outside — just like the pros make!",
        image: "https://www.allrecipes.com/thmb/XDBl689ofF9yFpU8vHNyBguhfNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/207422_Old-Fashioned-Onion-Rings_82659_Photo-by-Tricia-Winterle-Jaeger-2000-a96820e27cb64cafa8c4925ad027a59d.jpg",
        ingredients: [
            "1 large Vidalia or other sweet onion",
            "1 quart oil for frying, or as needed",
            "1 ¼ cups all-purpose flour",
            "1 teaspoon baking powder",
            "1 teaspoon salt",
            "1 cup milk, or as needed",
            "1 large egg",
            "¾ cup dry bread crumbs",
            "⅛ teaspoon seasoned salt, or to taste"
        ],
        instructions: [
            "Slice onion into 1/4-inch-thick rings.",
            "Heat oil in a deep-fryer to 365 degrees F (185 degrees C). Place a wire rack over a sheet of aluminum foil.",
            "Prepare breading station by setting out 3 wide, shallow dishes. Whisk flour, baking powder, and salt together in the first dish. Whisk milk and egg together in the second dish. Place bread crumbs in the third dish.",
            "Dip each onion ring into the flour mixture, turning several times until fully coated with flour. Transfer to the egg mixture and use a fork to turn until coated. Lift onion with the fork and shake gently so excess liquid drips back into the dish. Place onion in the bread crumbs and turn several times to coat, scooping crumbs over the ring if necessary. Lift again with the fork, tap any excess bread crumbs back into the dish, and place on the wire rack while you prepare the remaining onion rings.",
            "Deep-fry 3 to 4 onion rings at a time in the preheated oil until golden brown, 2 to 3 minutes. Drain on paper towels while you deep-fry the remaining rings.",
            "Sprinkle with seasoning salt before serving."
        ]
    },
    {
        name: "Crispy Hash Browns",
        description: "Good, old-fashioned, restaurant-style hash browns. Perfect with hot pepper sauce and ketchup!",
        image: "https://www.allrecipes.com/thmb/OMseVoLMl9d2CHP7FOBLX5vQu34=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4486722_Emilys-Famous-Hash-Browns-1x1-1-7b771f56425f472f9706ad841400e217.jpg",
        ingredients: [
            "2 medium russet potatoes, shredded",
            "½ medium onion, finely chopped",
            "¼ cup all-purpose flour",
            "1 egg",
            "1 cup oil for frying, or as needed",
            "salt and pepper to taste"
        ],
        instructions: [
            "Rinse shredded potatoes until water is clear, then drain and squeeze dry. Place shreds in a bowl and mix in the onion, flour, and egg until evenly distributed.",
            "Heat about 1/4 inch of oil in a large heavy skillet over medium-high heat. When oil is sizzling hot, place potatoes into the pan in a 1/2 inch thick layer. Cover the whole bottom of the pan, or make separate piles like pancakes.",
            "Cook until nicely browned on the bottom, then flip over and brown on the other side. It should take at least 5 minutes per side. If you are cooking them in one big piece, it can be cut into quarters for easier flipping.",
            "Remove from pan, and drain on paper towels. Season with salt and pepper and serve immediately."
        ]
    }
]

export default recipeData;