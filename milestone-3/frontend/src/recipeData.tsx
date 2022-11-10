import internal from "stream";

export interface Recipe{
    name: string; 
    description: string; 
    image: string; 
    ingredients: string[];
    instructions: string[];
    idx: number;
}

const recipes: Recipe[] = [
    {name: "Spicy Tonkatsu Ramen", 
    description: "Tonkotsu ramen is a Japanese noodle soup made with a pork bone broth—ton means pork and kotsu means bone. When collagen-rich pig parts like pork trotters and neck bones are cooked in water over high heat, the collagen in the connective tissue transforms into gelatin, which gives bone broth its silky texture.", 
    image: "ramen", 
    ingredients: ["pork neck bones", "chicken carcass, onions"], 
    instructions: ["Place the pork bones into a large stock pot, and cover with water. Bring the water to a boil and cook for 10 minutes.",
                    "Skim all of the gunk off of the top of the water. Dump the whole pot out, saving the bones, and fill with fresh water. This is cleaning the bones and will make a better stock.", 
                    "Let cool for a while, and then remove all of the solids you can with tongs and a slotted spoon. Next, strain the broth with cheesecloth or a large clean kitchen towel. I have found the easiest way to do this is to place the cheesecloth in several layers over a large bowl that will fit all of the broth, pour the broth in, and then gather the edges of the cloth together to pull all of the solids out of the broth. You can do this however is easiest for you though!"],
    idx: 0
    },
    {name: "Malaysian Satay", 
    description: "Malaysian satay is typically chicken or beef and is served with a thick peanut sauce, chopped red onion, cucumber, and little squares of compressed rice known as ketupat.",
    image: "satay",
    ingredients: ["lemongrass", "garlic", "shallots", "turmeric powder"],
    instructions: ["Cut the chicken meat into small cubes. Set aside.",
                    "Blend all the he Marinade ingredients in a food processor. Add a little water if needed.",
                "Combine the chicken and the Marinade together, stir to mix well. Marinate the chicken for 6 hours in the fridge, or best overnight. When ready, thread 3-4 pieces of the chicken meat onto the bamboo skewers.",
                    "Grill the chicken satay skewers for 2-3 minutes on each side until the meat is fully cooked and the surface is nicely charred, on both sides. Baste and brush with some oil while grilling. Serve hot with peanut sauce the fresh cucumber pieces and onions."],
    idx: 1
    },
    {name: "Singaporean Laksa", 
    description: "Laksa is a spicy noodle dish popular in Southeast Asia. Laksa consists of various types of noodles, most commonly thick rice noodles, with toppings such as chicken, prawn or fish. Most variations of laksa are prepared with a rich and spicy coconut soup or a broth seasoned with sour asam bleh.",
    image: "laksa",
    ingredients: ["8 king prawns, de-shelled", "1 tablespoon palm sugar", "1 tablespoon fish sauce"],
    instructions: ["Remove the heads and shells from prawns and set aside in a bowl, then devein and set the prawn meat aside in a separate bowl.",
                    "To make the prawn stock, add cooking oil to a large saucepan on medium-high heat. Add prawn heads and shells then stir for 5 minutes, crushing the heads to release the flavour.",
                "Add water and chicken stock, then simmer for 45 minutes allowing the stock to reduce."],
    idx: 2
    }
]

export default recipes; 