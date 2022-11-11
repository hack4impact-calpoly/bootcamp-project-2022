export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {name: "Carameilzed Pork & Eggs",
    description: "A dish made with caramelized pork, braised until tender in coconut juice, with soft and flavorful eggs. Serve this authentic dish over fluffy white rice and crunchy vegetables.",
    image: "https://images.food52.com/pp2ABj0NxvrSTzcBlKOz-e5x88M=/1200x1200/8364ea06-c08c-45b7-bd78-51a2eec002da--2021-1008_sponsored_erath_big-feast_recipe_thit-kho-trung_branded_3x2_bette-blau-187.jpg",
    ingredients: ["10 eggs (or to preference)", "1 kg pork belly", "6 tbsp fish sauce (or to taste)", "5 tsp sugar (or to taste)", "2 tbsp chicken bouillon powder", "US cup coconut water", "3/4 US cup water"],
    instructions: ["Boil the eggs for 12 minutes or until hardboiled, then peel them and set aside in a bowl.", "Cut the meat into 5cm or 2\" chunks.", "Note: If you like the pieces in Thit Kho smaller, cut them to your liking.", "Extract the juice from the coconuts. If you're using fresh coconuts, lay them on their side and chop the cleaver down about 3cm (or 1″) from the coconut’s point. Rotate the coconut and repeat until the whole tip is removable.", "Pull the top off and pour the juice into a bowl and repeat for all the coconuts.", "On a high heat, add the sugar and stir continuously until it begins clumping together.", "Pour in a tablespoon of water and stir until combined. Repeat this step a tablespoon at a time with the remaining water. By the end, you will have a dark brown caramel sauce.", "Add the fish sauce in and stir until well combined.", "While the heat is still on high, put the eggs in and roll them through the sauce until they're evenly coated and have turned a slight golden color.", "Scoop the eggs out and set them aside in a bowl.", "Add the pork belly into the sauce and brown them on all sides.", "Pour the coconut water in and season with chicken bouillon powder. Stir well then bring to a boil with the lid partially on. As soon as it boils, turn the heat to medium and let it gently simmer for 20 minutes.", "After 20 minutes of simmering, put the eggs back into the pot.", "Simmer on low heat for another 10 minutes or until the pork is tender."]
    },
    {name: "Vietnamese Pizza",
    description: "This dish consists of a crispy grilled rice paper sheet topped with egg, sausage, and plenty of green onions. It is then generously drizzled with mayo and sweet chili sauce.",
    image: "https://fullofplants.com/wp-content/uploads/2021/06/vegan-banh-trang-nuong-rice-paper-vietnamese-pizza-with-mayo-and-chili-sauce-thumb.jpg",
    ingredients: ["1 Rice paper sheets", "1 egg", "1 spring onion / green onion chopped, divided into 2 portions", "95 g tuna canned, in oil", "kewpie mayonnaise", "sriracha"],
    instructions: ["Heat cast iron pan on low to medium heat. While that's heating, mix egg and half of the chopped spring onion.", "Place one sheet of rice paper in the pan and pour on the egg mix, spreading to the edges immediately with the back of a spoon. Rotate the pizza a few times with tongs to make sure it's not sticking.", "Break up the tuna and sprinkle over the pizza.", "Swirl as much mayonnaise and sriracha as you'd like on the top and leave the pizza to cook for an extra minute or two, rotating every now and then until nice and crispy. Sprinkle over with the remaining spring onion.", "Serve by either cutting into slices OR - or a more authentic experience - fold the pizza in half / thirds and wrap in newspaper to eat by hand."]
    },
    {name: "Squash Soup with short pork ribs",
    description: "A dish of flavorful broth made with kabocha squash, simple seasonings of fish sauce, bouillon and short pork ribs. It is finished with some pepper and green onion.",
    image: "https://bunbobae.com/wp-content/uploads/2020/12/IMG_5260.jpg",
    ingredients: ["1 lb (500g) pork spare ribs", "2 cloves (5g) garlic, minced", "1 small shallot, minced (10g)", "3 tablespoon fish sauce", "6 cups (420 ml) water", "ground black pepper to taste", "2.5 lb (1kg) kabocha squash, deseeded and chopped"],
    instructions: ["Par boil your ribs. Add your spare ribs to some room temp water and throw in a handful of salt (about a tablespoon will do). Turn on the stove and take the ribs off the heat once it comes to a boil.", "Rinse the ribs under running water and add the ribs to a slow cooker with the garlic, shallot, water and pepper. Cook on high 1 ½ hours or on low for 3.", "After the 1 ½ - 3 hours is up, add the kabocha squash chunks to the slow cooker. Continue to cook on high for another hour or on low for another 2 hours.", "When the squash is fork tender, or a knife easily pierces the orange flesh, your soup is ready. Serve with a hot bowl of white rice!"]
    }
];

export default recipes; // This will allow us to access this data anywhere!