export default interface Recipe {
    _id: string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
};

export const NONE:Recipe = {
    _id: "NULL",
    name: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: []
};