import React from 'react'



export interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string [];
    instructions: string [];
}

const recipeData: Recipe[] = [
    {
        "name": "Cheeseburger",
        "image": "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267.jpg",
        "description": "Cheesburger using a brioche bun, pepper jack cheese, freshly picked tomatoes, and iceberg lettuce.",
        "ingredients": [
          "600 g / 1.2 lb beef mince (ground beef) , at least 20% fat (Note 1 for quality)",
          "1.2 kg / 2.4 lb beef mince (ground beef) , at least 20% fat (Note 1 for quality)",
          "1/8 tsp each salt and pepper PER burger",
          "3 tbsp canola oil",
          "4 soft burger buns or rolls , around 10cm/4″ wide (Note 2)",
          "4 - 8 slices burger cheese (American) or other cheese or choice (Note 3)",
          "8 cos/romaine lettuce leaves , torn to size (or shredded iceberg)",
          "2 large tomatoes , cut into eight 7mm/ 1/4",
          "1 red onion , finely sliced into rings (Note 4)",
          "2 large gherkins , finely sliced (Note 5)",
          "Special Burger Sauce (creamy orangey/pink one, quick no cook)"
        ],
        "instructions": [
          "Patties: Separate the beef into 4 equal portions, or 8 if making double cheeseburgers (do it!). Gently roll each portion into balls then press down into round patties that are slightly larger than your bun to allow for shrinkage (12 cm / 4.7 IN wide, 1 cm / 0.4 in thick for a 10cm / 4 IN burger bun).",
          "Prepare: Get all your burger bits and pieces out and ready to use. Don't salt your beef until just before cooking (it toughens the meat).",
          "Toast buns: Preheat the grill to high. Place the bread cut face up on a tray and toast for 3 to 5 minutes until light golden. (If using BBQ, place cut face down on the grill). Set aside.",
          "Dent patty: Sprinkle one side of patties with half the salt and pepper. Flip, then press a dent into the middle of each patty. (Prevents patties doming when cooking and reduces shrinkage!). Sprinkle this dented side with the remaining salt and pepper.",
          "Preheat: If your BBQ hot plate/grill is well seasoned (ie oiled), there is no need to oil before cooking. If not, lightly brush with vegetable or canola oil (or use scrunched up paper towel). Then preheat your BBQ on high until very hot and you see wisps of smoke.",
          "Cook the burgers per above directions for 1 1/2 minutes on each side, topping with cheese as soon as you flip, then resting for 3 minutes. (You can also toast the buns on the grill (face down on the grills, – 3 minutes.)",
          "Slather the base of the bun with your sauce of choice. My order of assembly: lettuce, tomato, burger (x2 for double!), gherkins, onion, sauce on bun lid, jam it on top of the stack."
        ]
      },
      {
        "name": "Ramen",
        "image": "https://www.halfbakedharvest.com/wp-content/uploads/2021/10/Easy-Ginger-Chicken-and-Spinach-Ramen-1.jpg",
        "description": "Ramen served with chicken broth, Taiwaneese noodles, broccoli, pork, and a boiled egg.",
        "ingredients": [
          "1 tablespoon sesame oil",
          "3 teaspoons grated ginger",
          "4 teaspoons grated garlic",
          "4 cups broth (I used chicken, but vegetable would also work)",
          "4 cups water",
          "1 ounce dried shiitake mushrooms",
          "2 packages instant ramen (noodles only!)",
          "1/2 cup chopped scallions or chives",
          "2 cup chopped kale",
          "1 cups shredded carrots",
          "Sriracha to taste",
          "crunchy golden panko crumbs for topping (see FAQs)"
        ],
        "instructions": [
          "Heat the sesame oil in a large skillet over medium low heat. Add the garlic and ginger; stir fry for 2 minutes or until soft and fragrant.",
          "Add the broth and the water. Bring to a simmer; add the mushrooms and simmer for 10 minutes or until the mushrooms have softened and the broth is flavorful.",
          "Add the instant noodles to the hot liquid and simmer for an additional 5 minutes or until the noodles have softened. Add the scallions and stir to combine.",
          "Remove from heat, stir in the kale and carrots, and top with crunchy panko crumbs (see notes) and a soft-boiled egg (optional). Season with chili oil, hot sauce, sesame oil, and/or soy sauce and salt to taste. "
        ]
      },
      {
        "name": "Salmon",
        "image": "https://assets.epicurious.com/photos/62d6c5146b6e74298a39d06a/2:3/w_2222,h_3333,c_limit/BakedSalmon_RECIPE_04142022_9780_final.jpg",
        "description": "Salmon pan fried with red wine and local spices. ",
        "ingredients": [
          "1– 1 ½ lbs. salmon fillet, cut into 4 pieces",
          "Olive oil",
          "¼ c. garlic powder</li>",
          "¼ c. kosher salt</li>",
          "¼ c. dried parsley",
          "¼ c. dried minced onion        ",
          "¼ c. dried basil"
        ],
        "instructions": [
          "Prepare the House Seasoning:",
          "Mix ingredients together and store in an airtight container for up to 6 months.",
          "Prepare the Salmon:",
          "Rub each piece of salmon with olive oil and sprinkle with house seasoning, to taste (I use about 1",
          "teaspoon of olive oil and ¼ teaspoon of seasoning per piece).",
          "Grill the Salmon: Heat coals, gas grill, or grill pan to medium heat. Place salmon on the grill. Cover and grill over medium heat for about 5 minutes per side (maybe a few more minutes, depending on the thickness of your fish). The salmon is done when it flakes easily with a fork."
        ]
      }
]

export default recipeData