// Define and export the Recipe interface
export interface Recipe {
    external: boolean;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

// Create separate Recipe objects for each recipe
  const recipe_1: Recipe = {
    name: "Haryali Chicken Biryani",
    description: "Hariyali Chicken Biryani is marinated in the combination of green ingredients like coriander leaves, mint leaves and green chillies.",
    image: "https://myfoodstory.com/wp-content/uploads/2018/09/The-Best-Chicken-Biryani-Recipe-2.jpg",
    ingredients: [
        "500 gms Chicken Pieces",
        "1 tbsp Biryani Masala",
        "1 tsp Red Chilli powder",
        "2 tbsp Yogurt",
        "2 tbsp Ghee",
        "1 cup Fried Onions",
        "1 tbsp Lemon Juice",
        "1 tsp Cumin Seeds",
        "1 tsp Black Peppercorns",
        "2-3  Green Chillies (Slit)",
        "1 cup Mint leaves",
        "2 cups Coriander Leaves and stems",
        "1 cup Blanched Spinach",
        "2 tbsp Ginger-Garlic Paste",
        "1 cup Water",
        "1 tbsp Chopped Ginger",
        "1 tbsp Chopped Garlic",
        "1 and a half cups Soaked Basmati rice",
        "1  Star Anise",
        "3  Green Cardamom",
        "2  Black Cardamom",
        "1 Inch  Cinnamon",
        "2 tsp Milk infused with Saffron"
    ],
    instructions: [
        "For Green Paste: Grind all the ingredients like cumin seeds, pepper corns, green chillies, ginger garlic, blanched spinach, coriander and mint leaves, lemon juice, together in a grinder until a smooth paste. Add a little amount of water.",
        "For Marination: Then, marinate the chicken pieces with the salt, biryani masala, chilli powder and fried onions. Add half of the green paste and marinate for at least for 2 hours.",
        "In a heavy bottom pan, add the ghee and chicken pieces. Cook the chicken until the chicken turns brown. Once brown add the rest of the green ground masala cover and cook for 10-12 mins.",
        "Now, add a piece of burnt coal inside a piece of foil and drizzle some ghee or oil on it and cover the pan with the lid for a few minutes so the gravy has a smoky flavour.",
        "Add yogurt, mix it and turn off the heat.",
        "In another steel bowl, add water along with the whole spices, green chillies, and salt and allow it to boil.",
        "Add the rice and cook till 70% done. Drain the excess water and pour the rice over the chicken gravy.",
        "Add the fried onions, saffron milk, boiled eggs (optional), tomato slices (4-5) and roasted cashew nuts over the top.",
        "Cover with a heavy lid and allow this to steam for about half an hour.",
        "Serve and enjoy!"
    ],
    external: false
  }
  const recipe_2: Recipe = {
    name: "Chole Samosa Chaat",
    description: "Chole samosa chaat is made with crispy smashed samosa, layered with spicy chole (chickpea curry), tangy sauces, dahi, and a host of other spices.",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/09/Samosa-Chaat-Recipe.jpg",
    ingredients: [
        "1  Chole Curry",
        "1 and a half cup All Purpose Flour",
        "2-3  Mashed Potatoes",
        "1/2 tsp Chaat Masala",
        " to taste Salt",
        "1/2 tsp Red Chilli Powder",
        "1/2 tsp Jeera Powder",
        "1/2 tsp Garam Masala",
        "1 tbsp Mint Chutney",
        "2 tbsp Dahi",
        "1 tbsp Tamarind Chutney",
        "1 tbsp Sev",
        "1 tbsp Coriander Leaves",
        "1 tbsp Pomegranate Kennels"
    ],
    instructions: [
        "Firstly, knead a dough by using all purpose flour. Once done, set aside.",
        "Then for the samosa filling, mash potatoes and add all the dry ingredients mentioned in the ingredients list above.",
        "Take a small portion from the dough, roll it out, and fill it with aloo mixture.",
        "Heat oil in a pan and deep fry the samosas.",
        "To assemble the chaat, smash the samosa, pour chole over it along with chutneys and dahi.",
        "Sprinkle some pomegranate kennels, sev and garnish with coriander leaves",
        "Your chaat is ready!"
    ],
    external: false
  }
  const recipe_3: Recipe = {
    name: "Gajar Ka Halwa",
    description: "One of the most popular Indian desserts, 'Gajar ka Halwa' is known to have originated in Punjab. It is a delicious delight during the winter months.",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2015/01/Gajar-Halwa-Indian.jpg",
    ingredients: [
        "1 Kg Carrot",
        "1 1/2 litre Milk",
        "8  Green cardamoms",
        "5-7 tbsp Ghee",
        "2 tbsp Raisins",
        "1 tbsp Almonds, shredded",
        "2 tbsp Dates, chopped",
        "5-7 tbsp Sugar",
    ],
    instructions: [
        "Peel and grate the carrots.",
        "Simmer in milk with the cardamom until liquid evaporates.",
        "Heat ghee in a heavy pan and add the carrot mixture.",
        "Cook over a gentle flame for 10-15 minutes.",
        "Stir in sugar and continue cooking until the halwa turns deep reddish color.",
        "Stir in dried fruit and serve."
    ],
    external: false

  }

// Create an array containing all Recipe objects
  const recipes: Recipe[] = [
	recipe_1,
	recipe_2,
	recipe_3
];

export default recipes;