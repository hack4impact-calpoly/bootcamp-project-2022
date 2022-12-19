export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

  const recipes: Recipe[] = [
	{name: "Peanut Butter and Yogurt",
  description: "Two non-Newtonian liquids band together for the concoction of all time.",
  image: "/pby.png",
  ingredients: ["1 jar of Peanut Butter (preferably Crunchy)","1 cup of Beijing Yogurt (may substitute with regular or Greek, but YMMV)"],
  instructions:["Open the cup of Beijing Yogurt.","Open the jar of peanut butter.", "Add 3-4 spoonfuls (or however many you want) of peanut butter into the Beijing yogurt.","Bask in the glory of the non-Newtonian<sup>2</sup> liquid."]

  },

  {name: "Cucumbers with Ketchup",
  description: "A spinoff of the classic Celery with Ranch!",
  image: "/honggua.jpeg",
  ingredients:["1-2 cucumbers","Ketchup"],
  instructions:["Position the cucumber so that its length is horizontal; you should see something akin to a minus sign.", "Cut the cucumber vertically into slices.", "Open your ketchup container. If necessary, find a platform to place the condiment onto.","Consume the cucumber and ketchup akin to how you would consume celery and ranch."]
},

  {name: "Grilled Cheese Sandwich",
  description: "It's like a Protein Style Burger, but with cheese!",
  image: "/cheese.webp",
  ingredients:["2 squares of American cheese (may be substituted with other kinds of cheese)","2 sticks of String Cheese (may be substituted with other kinds of cheese)"],
  instructions:["Put a String Cheese on a pan.", "Heat the pan until the String Cheese starts to melt.", "Put 2 squares of American cheese on top of the String Cheese.", "Wait for the American cheese to start to melt.", "Put the other String Cheese on top of the American cheese.", "Heat the pan until the second String Cheese is fully melted.", "Enjoy your String Cheese Style grilled cheese sandwich!"]
  }];
export default recipes; 