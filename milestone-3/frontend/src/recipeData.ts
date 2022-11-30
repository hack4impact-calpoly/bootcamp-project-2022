
export interface ingredientsObj {
    title: string;
    ingredients: string[];
}

export interface instructionsObj {
    mainList: string;
    subList: string[];
}

let slugify = require("slugify");

export interface Recipe {
    category: string;
    name: string;
    description: string;
    image: string;
    ingredients: ingredientsObj[];
    instructions: instructionsObj[];
    slug?: string;
}

export interface defaultRecipe {
    category: string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    slug?: string;
}



export const errorObject: Recipe = {
    category: "ERROR",
    name: "ERROR",
    description: "ERROR",
    image: "ERROR",
    ingredients: [{title: "ERROR", ingredients: ["ERROR"]}],
    instructions: [{mainList: "Error", subList:["ERROR"]}]
    
}







const recipeObject1: Recipe = {
    "category": "Breakfast",
    "name": "Conchas",
    "description": "Looking for a new desert to pair with your coffee?! Then look no further! The warm and sweet flavors of the concha melts in your mouth when you dip it in your favorite coffee. Make enough for your family to have seconds and thirds, trust me on that!",
    "image": "https://www.acozykitchen.com/wp-content/uploads/2019/03/ConchasRecipe-9.jpg",
    "ingredients": [{"title": "Bread", "ingredients": ["500 grams (3-¾ cups) of All-Purpose Flour, plus extra for dusting", "125 grams (½ cup + 2 tablespoon) white Sugar", "7.5 grams ( 2- ½ teaspoon) Instant Dry Yeast", "3 grams (½ teaspoon) Salt", "100 grams ( ½ cup) Non-Salted Butter, at room temperature", "100 ml Eggs*(use a measuring cup, it equals about 6-½ Tbps )", "5 ml (1 teaspoon) Vanilla extract*", "120 ml (½ cup) Milk (warm)."]}, {"title": "Topping", "ingredients": ["100 grams (½ cup plus 1 teaspoon) Vegetable Shortening (extra to grease the dough and baking sheets)", "100 grams ( ⅞ of a cup) Confectioner Sugar", "120 grams (1 cup) All-Purpose Flour", "5 grams ( 2-½ teaspoon) Cocoa powder (for half of the topping, if desired)", "2.5 grams ( 1 teaspoon) Cinnamon (optional for the white topping)"]}],
    "instructions": [{"mainList": "Mix the all-purpose flour, yeast, sugar, and salt in a bowl or mixer.", "subList": []}, {"mainList": "Mix in the wets.", "subList": ["Stir in butter.", "Mix in eggs and vanilla with splashes of milk.", "Stir for around 7 minutes or until dough is soft and slightly sticky."]}, {"mainList": "Allow dough to rest for three hours or until double in size.", "subList":[]}, {"mainList": "Sugar topping:", "subList":["Soften shortening with spatula.", "Mix in confectioners sugar.", "Mix in cinnamon and flour little by little until pasty."]}, {"mainList": "Oven time:", "subList": ["Add shortening to top of conchas.", "Place paste firmy on conchas.", "Preheat oven to 320 F", "Allow conchas to rest for another hour!", "Time to place in oven for 30 minutes or until bottom is golden brown."]}]
}

const recipeObject2: Recipe = {
    "category": "Appetizers",
    "name": "Nachos",
    "description": "These amazing nachos aren't just tasty, they're packed with protein and the rich seasonings make it have a kick that will leave you addicted and yearning for more!",
    "image": "https://www.simplyrecipes.com/thmb/bpZ7NUOVo7DGexWfnrHwAlgDA2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Nachos-LEAD-3-e6dd6cbb61474c9889e1524b3796601e.jpg",
    "ingredients": [{"title": "Spice Mix", "ingredients": ["2 tablespoons chili powder","1 1/2 teaspoons kosher salt","1 teaspoon granulated garlic","1 teaspoon granulated onion","1 teaspoon ground cumin","1/2 teaspoon dried oregano","1/4 teaspoon black pepper","Pinch of cayenne pepper (optional)"]}, {"title": "Nachos", "ingredients": ["1 teaspoon vegetable oil","1 pound ground beef (80:20 lean-to-fat ratio)","16 ounces (2 cups) refried beans, canned or homemade","1/4 cup water","1 large bag of tortilla chips","4 ounces cheddar cheese, grated (about 2 cups), plus more for topping","4 ounces Colby Jack cheese, grated (about 2 cups), plus more for topping","1 cup pico de gallo, store-bought or homemade, plus more for topping","1/4 cup chopped cilantro","1 jalapeño (pickled or fresh), sliced"]}],
    "instructions": [{"mainList": "Preheat the oven to 350°F.", "subList": []}, {"mainList": "Make the taco spice blend:", "subList": ["Combine all spices in a bowl."]}, {"mainList": "Make the beef and bean topping:", "subList":["Heat vegetable oil on pan.", "Add ground beef and stir until brown.", "Drain fat from ground beef.", "Return meat to pan and add beans/water.", "Set heat to low while making chips."]}, {"mainList": "Toast chips", "subList":["Place tortilla chips on sheet pan.", "Toast chips at 350 degrees F, for 5 minutes."]}, {"mainList": "Assemble and bake nachos:", "subList": ["Top off tortilla chips with half the cheese.", "Wait until it melts.", "Top off with beef and beans.", "Sprinkle rest of cheese."]} ]

}

const recipeObject3: Recipe = {
    "category": "Lunch",
    "name": "Camarones A La Diabla",
    "description": "Love spicy food? This is the perfect combo of sweet and spicy and is certain to appease even the pickiest of eaters. This rich meal packs a punch and will have you drinking glasses of water to get it down.",
    "image": "https://www.isabeleats.com/wp-content/uploads/2018/09/camarones-a-la-diabla-small-4.jpg",
    "ingredients": [{"title": "", "ingredients": ["8 dried guajillo chiles, rinsed, stems and seeds removed","3 dried chile de arbol chiles, rinsed, stems removed","3 Roma tomatoes, chopped","2 cloves garlic","1/2 medium white onion, roughly chopped","1 teaspoon coarse kosher salt","4 tablespoons olive oil","1.5 pounds large raw shrimp, peeled, deveined and tail-on","salt and pepper, to taste"]}],
    "instructions": [{"mainList":"Mix in bowl:", "subList": ["Add dried guajillo and arbol chiles.","","Add very hot or boiling water until chiles are fully submerged.","","Cover with a lid or large plate and let sit for 15 minutes, until chiles have softened."]}, {"mainList": "Blend!", "subList":["Add the tomatoes, garlic, onion and salt.","","Puree until smooth.","","Taste and season with more salt, if necessary. If the sauce is too spicy, add more tomatoes."]}, {"mainList": "Pan on medium heat!", "subList":["Add olive oil and shrimp.","","Cook shrimp for 1 minute per side, or until shrimp is light pink."]}, {"mainList": "ADD SAUCE!", "subList":[]}, {"mainList": "Wait until sauce is bubbling & hot!", "subList": []}]
}



export const recipeObj: Recipe[] = [recipeObject1, recipeObject2, recipeObject3].map((recipe) => ({...recipe, slug:slugify(recipe.name, {replacement: "_", lower: true})}));
