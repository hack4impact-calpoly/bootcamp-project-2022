export default interface Recipe {
    id: string;
    name: string;
    desc: string;
    imagePath: string;
    ingredients: string[];
    preparation: string[];
};