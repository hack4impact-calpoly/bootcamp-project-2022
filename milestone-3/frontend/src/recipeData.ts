export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
	{name: "Tomato and Egg: the only recipe on this site worth following because I found it on the internet",
    description: "I'm lazy most days so what's better than cooking the bare minimum.",
    image: "https://twoplaidaprons.com/wp-content/uploads/2022/06/tomato-egg-sitr-fry.jpg",
    ingredients: ["1.5 lb tomato",
    "4 eggs",
    "5 slices of ginger",
    "1 tbsp cornstarch",
    "4 tbsp water",
    "2 tbsp oil",
    "3 tbsp water",
    "1 tsp salt",
    "2 tbsp brown sugar",
    "2 tbsp ketchup"],
    instructions: ["Cut each tomato into 8 slices",
    "Thinly cut ginger and then julienne into thin strips",
    "Crack eggs, season with 0.5 tbsp salt, mix well",
    "Mix cornstarch and water together to make cornstarch slurry.",
    "Stir fry tomato with ginger, water, ketchup, salt, and brown sugar till tomatos are soft",
    "In a new pan, scramble the eggs",
    "Once eggs are close to being fully cooked, toss in tomato mixture"

]},
	{name: "Avocado Toast",
    description: "It's way too overpriced at restaurants so make your own.",
    image: "https://cookieandkate.com/images/2012/04/avocado-toast-recipe-3.jpg",
    ingredients: ["1 Avocado","Bread (whatever suits your fancy)","Balsamic Vinegar","Fancy Salt","2 Eggs"],
    instructions: ["Cut avocado into slices",
    "Put slices of avocado on bread",
    "Put bread in toaster at whatever temp you normally make toast",
    "Make sunny side up eggs",
    "Once eggs and toast are done, place eggs on toast",
    "Dress with balsamic vinegar and fancy salt."]
},
	{name:"Oatmeal",
    description:"I once tried microwaving instant oatmeal. \bLong story short, it took a while to clean up my microwave.", 
    image:"https://feelgoodfoodie.net/wp-content/uploads/2019/01/How-to-Make-Oatmeal-10.jpg",
    ingredients: [
        "Some oatmeal",
        "Water",
        "Berries",
        "Dried fruits"
    ],
    instructions:[
    "Toss oatmeal and water in a bowl",
    "Microwave your potion and hope for the best",
    "Clean up your microwave",
    "Decorate whatever you have left of your oatmeal with the berries, dried fruits, or any other topping"
    ]
    }
  ]

export default recipes; // This will allow us to access this data anywhere!
