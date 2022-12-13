export interface Recipe
{
    _id?: any;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    __v?: any;
}

export interface RecipePreviewProps extends Recipe
{
    ext: boolean
}