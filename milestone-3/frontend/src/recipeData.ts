export interface Recipe
{
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

export interface RecipePreviewProps extends Recipe
{
    ext: boolean
}

export const recipes: Recipe[] = [
    {
        "name": "Over-toasted buttered toast",
        "description": "Toast that's been toasted for way too long",
        "image": "./toast.png",
        "ingredients": [
            "Bread (ideally stale and a week old--why else would you make toast?",
            "A toaster", 
            "Forgetfulness", 
            "Butter straight from the fridge that will not spread",
        ],
        "instructions": [
            "Remove the bread from bag, if necessary.",
            "Place in toaster and press down on tab, ensuring that the heat setting is too low.",
            "Wait until the toast is done.",
            "Notice that the toast is undertoasted and press down on the tab again to continue toasting.",
            "Find a distraction until the second toasting cycle completes, making sure to entirely ignore any odd smells.",
            "Return to a charred piece of toast, ready for buttering.",
            "Destroy this piece of toast with butter straight from the fridge.",
            "Ignore the mistakes; class starts soon.",
        ],
    },
    {
        "name": "Barely-undercooked instant noodles",
        "description": "A cup of cup noodles that's quite a bit short of al dente",
        "image": "./noodles.png",
        "ingredients": [
            "Cup of instant noodles",
            "Water (boiled in a teakettle)",
            "A steady hand",
            "Impatience",
        ],
        "instructions": [
            "Boil approximately two cups of water in a teakettle.",
            "Place the cup of raw noodles, lid half-open, on a non-stable surface (ideally, carpet).",
            "Shakily pour the boiling water from the teakettle, being sure to burn yourself and waste some of the needed noodle-cooking water.",
            "Ignore all manufacturer instructions and wait for exactly 50 seconds (rather than a whole minute).",
            "Enjoy at an unreasonable rate, being sure to burn the roof of your mouth.",
        ],
    },
    {
        "name": "Peanut-butter-only sandwich",
        "description": "Two pieces of bread and a LOT of peanut butter",
        "image": "./peanut-butter.png",
        "ingredients": [
            "Over-toasted toast (refer to the burnt toast recipe)",
            "Peanut butter",
            "A lack of jelly",
        ],
        "instructions": [
            "Gather burnt toast.",
            "Add a mountain of peanut butter to the toast with the intention of balancing with just as much jelly later.",
            "Open the fridge to find no jelly.",
            "Consume the peanut-butter-only sandwich anyway, sealing your mouth shut for all eternity.",
        ],
    }
];