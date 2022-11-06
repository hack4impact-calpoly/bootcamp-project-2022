export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {name: "test1", description: "test", image: "test", ingredients: ["test"], instructions: ["test"]},
    {name: "test2", description: "test", image: "test", ingredients: ["test"], instructions: ["test"]},
    {name: "test3", description: "test", image: "test", ingredients: ["test"], instructions: ["test"]}
]

export default recipes;