export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
 }
  
 const recipes: Recipe[] = 
 [
    {
        "name": "Scrambled Eggs",
        "description": "This is a quick and easy breakfast that anyone can make with eggs.",
        "image": "https://www.allrecipes.com/thmb/AaXqiBlXf6WslwwwiLl4PHNAlO4=/2000x2000/filters:no_upscale()/272293-fluffy-microwave-scrambled-eggs-ddmfs-1x1-1-9cae0f1150174b4eb8877870edf6804b.jpg",
        "ingredients": [
            "2 eggs",
            "2 tsp milk (just eyeball it)",
            "butter",
            "salt"
        ],
        "instructions": [
            "First, crack the two eggs into a medium sized bowl.",
            "Next, use a fork or a whisk to mix the eggs. Mix until blended.",
            "Add in a splash of milk. If you have added milk to the point where the color of the mixture is now a very light yellow, you have added too much milk. Start again from step 1.",
            "Add salt as needed.",
            "Heat pan on medium heat and put roughly 1 tsp of butter on it. Let melt.",
            "Pour egg onto the pan.",
            "Slowly mix the eggs in the pan with a wooden utensil. DO NOT overmix or overheat.",
            "Remove eggs from pan and eat."
        ]
    },
    {
        "name": "Bland Quesadilla",
        "description":  "A quick and easy quesadilla for those who feel like eating something simple.",
        "image": "https://recipetineats.com/wp-content/uploads/2018/06/Quesadillas_4.jpg",
        "ingredients": [
            "2 flour or corn tortillas (flour tastes better)",
            "3 shredded cheese mix from Costco (or any shredded cheese)",
            "pinto or black beans",
            "butter"
        ],
        "instructions": [
            "First heat your quesadilla maker and add butter. If you don't have one, you can probably use a stove",
            "Place one tortilla on and put cheese and beans",
            "Place other tortilla on top.",
            "Close quesadilla maker.",
            "Turn over after you hear the beep.",
            "Take quesadilla out, add guac if you want, and eat."
        ]
    },
    {
        "name": "Bland Pasta",
        "description": "A pasta recipe I learned in 7th grade when I was bored.",
        "image": "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg",
        "ingredients": [
            "pasta",
            "2 ginger cloves",
            "handful of spinach leaves",
            "1 tomato",
            "1 bell pepper",
            "half an onion",
            "green olives (if you like olives)",
            "vegetable oil",
            "oregano",
            "love"
        ],
        "instructions": [
            "First, boil the pasta in salt water for 10 minutes. Depends how hot your stove is though.",
            "While the pasta is boiling, we create our saute.",
            "Chop your onion, tomato, and garlic into very small pieces.",
            "Bring a pan of 3 spoonfuls of vegetable oil to a simmer on your stove.",
            "Add in the tomato, garlic, and onion. Cook all until golden/brown.",
            "Drain pasta and pour into pan. Start stirring.",
            "Add in spinach and olives. Stir until spinach is wilted.",
            "Add seasoning of your choice for flavoring.",
            "Tell the pasta you love it, pour into bowl, and eat."
        ]
    }
 ];
  
 export default recipes;
 
 