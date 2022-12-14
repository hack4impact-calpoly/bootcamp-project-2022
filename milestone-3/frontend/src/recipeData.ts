export interface Recipe {
    name: string;
    description: string;
    image: string;
    type: string;
    ingredients: string[];
    instructions: string[];
}

let recipes: Recipe[] = [
    {
        name: "Damon's Cheerios Basic",
        description: "A classic blend of cheerios, sugar, milk, and fruit",
        type: "basic",
        image: "cheerios_basic.jpg",
        ingredients: ["Cheerios", "Sugar", "Strawberries", "Blueberries", "Milk"],
        instructions: ["Pour Milk", "Add Cereal", "Sprinkle Sugar", "Add Fruits"]
    },
    {
        name: "Damon's Cheerios Supreme",
        description: "Flipping the cereal game on its head, revolutionizes the breakfast industry with its avant garde perception of time, space, and reality through cereal. Gordon Ramsay wouldn't ever touch this.",
        type:"supreme",
        image: "cheerios_supreme.jpg",
        ingredients: ["Fruit Loops", "Orange Juice", "Strawberries", "Blueberries"],
        instructions: ["Pour Orange Juice", "Add Fruit Loops", "Add Fruits"]
    },
    {
        name: "Damon's Cheerios Ultimate",
        description: "A chocolately twist on the original: cheerios, sugar, chocolate milk, and fruit",
        type: "ultimate",
        image: "cheerios_ultimate.jpg",
        ingredients: ["Cheerios", "Sugar", "Strawberries", "Blueberries", "Chocolate Milk", "Sprinkles"],
        instructions: ["Pour Chocolate Milk", "Add Cereal", "Sprinkle Sugar", "Add Fruits", "Add Sprinkles"]
    }

]
    
export default recipes;