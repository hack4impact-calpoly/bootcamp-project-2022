export interface Recipe {
   name: string;
   description: string;
   image: string;
   ingredients: string[];
   instructions: string[];
 }


 const recipes: Recipe[] = [
    {
       name: "Tacos al Pastor",
       description: "Who doesn't know what a taco is?! This will teach you how to make homemade mexican tacos. (Please dont show my grandma.)",
       image: "https://www.seriouseats.com/thmb/EAwyskovb4VA2HjXLc4xald4cZ8=/1500x1125/filters:fill(auto,1)/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
       ingredients: ["Tortillas", "Cilantro", "Salsa verde", "Onion", "Seasoned Pork", "Lime" , "Oil"], 
       instructions: ["Begin by perparing all of the condiments for the taco.",
       "This includes: cutting up limes, onions, and cilantro.",
       "Season meat as perferred.",
       "Continue by placing a thin layer of oil to a pan on a stove top.",
       "Let the oil heat up and continue by placing the meat on the pan.",
       "Stir meat and continue to heat until it reaches a brown color.",
       "Afterwards, you will want to set a dash of oil onto a griddle.",
       "Continue by cooking tortillas for approximately 1 minute. Make sure to flip them aswell.",
       "Finally, place your cooked meat onto the tortillas and add all the cut up condiments that were previously prepared and and salsa verde."]
    },

    {
        name: "Omelette",
        description: "A staple of easy yet tasty breakfasts. I will show you how to cook an omelette that is sure to impress everyone expect those who can actually cook.",
        image: "http://www.nishkitchen.com/wp-content/uploads/2012/09/Spinach-Omelette-2B.jpg",
        ingredients: ["3 Eggs", "Oil", "Salt and pepper", "Onion", "Spinach", "Mushrooms"],
        instructions: ["Begin by perparing all of the indgrients that will be placed in the omelette.", 
        "This includes: cutting up the onions, spinach, and mushrooms into small pieces.",
        "Place some oil into a pan and cook the vegetables until they begin to smell.",
        "Afterwards, crack the three eggs into a bowl and season with salt and pepper.",
        "Continue by whisking the eggs until the yolk is no longer clearly visible.",
        "Heat up a thin layer of oil on a pan. Make sure there is enough oil present as we do not want the eggs to stick to the pan.",
        "Place your stirred eggs into the pan and allow them to cook for approximately 30 seconds. The eggs will begin to become solid. This is your cue to proceed to the next step.",
        "Add your previously cooked veggies into the center of the omelette in a straight line.",
        "Now we have arrived at the most difficult step. Get a pair of tongs or a laddle and attempt to wrap one side of the omelette over the veggies in the middle to form a taco sort of shape.",
        "Flip the omelette onto the other side and enjoy!"]
    },

    {
       name:"Quesadilla", 
       description: "A perfect quick snack for everyone with the exception of those who are lactose intolerant.", 
       image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Quesadilla_2.jpg", 
       ingredients: ["Tortillas", "Cheese"],
       instructions:[ "Out of all the foods I have included so far, this will be the easiest by far.", 
       "Obtain a cheese of your choosing, but monterrey jack or cheddar are perferred", 
       "Place your tortilla on a griddle and begin to let it heat up for about 20 seconds.",
       "Now flip your tortilla and add cheese.",
       "Fold the tortilla into a taco shape and cook until the cheese melts. "]
    }

];

export default recipes;

