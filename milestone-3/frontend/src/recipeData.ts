export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

const recipes: Recipe[] =[

    //recipe 1
    {
        name: "Crispy Garlic Roasted Potatoes",
        description: "Buttery, garlicky, fluffy inside with crisp, golden edges… crispy garlic roasted potatoes are a super simple side dish perfect with anything! No need for bowls or pans when you can prepare AND cook your potatoes on one pan!",
        image: "../assets/Crispy-Garlic-Roasted-Potatoes.jpg",
        ingredients: [
            "Potato of choice",
            "Garlic",
            "Sea Salt",
            "Parsley",
            "Fresh Chopped Rosemary",
            "Thyme",
            "Basil",
        ],
        instructions:[
            "Finely chop your rosemary",
            "Slice your potatoes into small cubed chunks",
            "Soak your potato cubes in warm water",
            "Grate garlic or (finely chop them) and mix with potatoes in a large bowl",
            "Mix in your parsley, thyme, basil, and rosemary into your bowl of potatoes",
            "All ingredients are measured to your taste, so experiment with ingredient amounts!",
            "Spray baking pan with cooking oil or butter your pan",
            "Spread potatoes evenly across pan",
            "Sprinkle a light amount of sea salt over potatoes",
            "Optional Step: Peel potatoes before roasting (or leave them on)",
            "Preheat oven to 400°F for 45-55 minutes",
            "Place potatoes in oven, turn them occasionally to make sure they crisp evenly",
            "Take your potatoes out and add more sea salt if needed",
            "Serve and enjoy!"    
        ]
    }

    //recipe 2
]