//Data object for Recipe preview cards
export interface RecipePreviewData {
  id: number;
  name: string;
  description: string;
  image: string;
  imgAlt: string;
}

//Using inheritance since both interfaces share properties
export default interface Recipe extends RecipePreviewData {
  ingredients: string[];
  instructions: string[];
}
