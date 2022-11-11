
export interface Recipe {
	name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
	    {name: "Grilled Chicken & Salad",
        description: "This grilled chicken salad is tender marinated chicken that’s grilled to perfection then served over lettuce with bacon, avocado, corn, blue cheese and tomatoes. A hearty salad that’s packed with flavor and also happens to be full of nutrition.",
        image: "https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg",
        ingredients: ["2-3 lb: Chicken Breasts", "1: Lemon", "2 Tsp: Olive Oil", "3: Garlic Cloves", "2 tsp: Oregano", "1/2 tsp: Salt", "2-3 lb: Black Pepper", "1/2 tsp: Chicken Breasts"],
        instructions: ["Cut chicken breasts", "Marinate chicken w/ lemon, oil, garlic, oregano, salt black pepper for 30 min", "Preheat grill on medium-high", "Grease pan w/ oil", "Place chicken on grill", "Close lid and grill for 8-10 min turn half-way", "Remove from grill, cover w/ foil, let rest for 5 min"]},
        {name: "Seven Layered Dip",
        description: "7 layer dip is one of the best party appetizers ever. Layers of fresh salsa, refried beans, guacamole, and cheddar cheese.  I serve this 7 layer bean dip recipe with some tortilla chips and veggies (which can also go alongside other dips like spinach dip for a great party spread",
        image: "https://modernmealmakeover.com/wp-content/uploads/2021/04/7-Layer-Dip.jpg",
        ingredients: ["1 can: Refried Beans", "Olives", "Sliced tomatoes", "Guac & lemon", "Cheddar cheese", "Green onions", "Sour cream", "Taco seasoning", "Cilantro", "Green onions", "Garlic salt", "Black pepper"],
        instructions: ["Bottom layer: Cooked refried beans", "Layer: Olives", "Layer: Sliced tomatoes", "Layer: Guac & lemon", "Layer: Cheddar cheese", "Layer: Green onions", "Layer: Green onions", "Layer: Mix of sour cream, taco seasoning, cilantro garlic salt, black pepper"]},
        {name: "Zucchini/Chicken Skillet Tex Mex",
        description: "This grilled chicken salad is tender marinated chicken that’s grilled to perfection then served over lettuce with bacon, avocado, corn, blue cheese and tomatoes. A hearty salad that’s packed with flavor and also happens to be full of nutrition.",
        image: "https://ifoodreal.com/wp-content/uploads/2017/07/chicken-and-zucchini-4.jpg",
        ingredients: ["1 Tsp: Avacado/ coconut oil", "1: Onion", "3: Garlic cloves, mince", "2: Bell Peppers, chop", "2: Bell Peppers, chop", "1 lb: Chicken breast", "1 cup: Corn", "2: Zucchini", "14 oz: Black beans", "14 oz: Diced tomatoes", "1 tsp: Taco Seasoning", "1 Tsp: Cumin", "1/2 tsp: Salt", "1 tsp: Black pepper", "1 cup: Tex Mex cheese", "1/2 cup: Green onions", "1/2 cup: Cilantro"],
        instructions: ["Preheat large deep skillet on low – medium heat and swirl oil to coat.", "Add onion, garlic and bell pepper; saute for 3 minutes, stirring occasionally", "Move vegetables to the side of the skillet and add chicken", "Add with 1 tsp cumin, salt & black pepper, cook 5 min", "Add corn, beans, tomatoes, zucchini, taco seasoning remaining cumin to skillet", "Stir, cover & cook on low-medium for 10 minutes", "Sprinkle with cheese, cover & cook for a few minutes or until cheese has melted", "Top with green onion and cilantro", "Serve hot, on its own or with brown rice or quinoa"]}
	
];

export default recipes; // This will allow us to access this data anywhere!
