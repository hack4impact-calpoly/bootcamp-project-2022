export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {"name": "Salmon Teriyaki",
    "description":  "Get ready for the best healthy-tasty combination: This dish features salmon (ideally alaskan but any will work!) drizzled in teriyaki sauce with a side of broccoli on top of steamed rice. This is a delicious, simple healthy meal that's perfect for weekday dinners. ",
    "image": "https://www.cleaneatingmag.com/wp-content/uploads/2019/07/roasted-salmon-teriyaki-with-broccoli_87-web-2.jpg?crop=4:3&width=1600",
    "ingredients": ["Salmon",  "Broccoli", "Salt", "Pepper", "Extra Virgin Olive Oil", "Teriyaki Sauce", "Rice"],
    "instructions": ["Rice: Clean the rice in a pot with water 2 times", "Fill pot of rice with water about 1 inch higher than the water surface",
"Boil rice for 10-12 minutes on High, then turn on low for 45 min to one hour", 
"Salmon: Wash individual pieces of salmon and dry with paper towel",
"Sprinkle salt and pepper and drizzle Teriyaki sauce over fish",
"Bake on a aluminum foil for 20 min on 425 degrees F",
"Broccoli: Cut broccoli into small pieces",
"Place broccoli in oven at the same time as the fish", "Place all broccoli pieces in plastic bag and add olive oil, salt and pepper- Shake bag until mixed",
"Bake for 30 min at 375 degrees F]"]},

    {"name": "Israeli Meatballs",
    "description":  "Comfort food alert! The combination of spiced meatballs, peas, and white rice is flavor heaven. This Mediterranean dish is full of refreshing middle eastern spices and flavor. This is a perfect meal to have after a long day of school or exercise. Make sure to serve hot! ",
    "image": "http://3.bp.blogspot.com/-D2DWspkCKz8/VI3FgTGDBAI/AAAAAAAAIyY/7PsiQJBOUn8/s1600/1.JPG",
    "ingredients": ["1.5 lb ground beef", "1 egg", "1 potato & 1 sweet potato", "3-4 TBSP dry breadcrumbs", "Parsley", "Barhat spice", "Salt", "1 bag of frozen peas", "1/2 tsp tumeric", "1 medium onion", "3 Garlic cloves", "1 cup rice", "1.5 cups Water"],
    "instructions": ["Grate potatoes and onions", "Mix all ingredients together by hand (let it sit for half an hour)", "Sauce: Cut onions into small pieces and mince garlic, and saute", "Add meatballs, 1 bag frozen peas, salt, tumeric and water", "Broil on low heat for an hour", "Rice instructions: wash rice x2 times", "Boil rice on lite for 10 minutes, then turn to low and let it sit for an hour", "Serve warm and enjoy!"]}, 
    
    {"name": "Cowboy Cookies",
    "description":  "Cowboy cookies are believed to have originated from Texas, popular for withstanding long treks and journeys. Wherever they came from, I can't imagine a more delicious cookie than this. The chocolate, oats, nuts, and coconut combination is to die for. These cookies are the perfect blend of sweet and savory. Warning: once you try one, you will surely be eating a few more after. ",
    "image": "https://www.momskitchenhandbook.com/wp-content/uploads/2016/09/Cowboy-Cookies.jpg",
    "ingredients": ["1 cup butter", "1 cup sugar", "1 cup brown sugar", "2 eggs", "1 tsp vanilla", "Barhat spice", "Salt", "1 bag of frozen peas", "1/2 tsp tumeric", "1 medium onion", "3 Garlic cloves", "1/2 tsp baking soda", "1 cup quick oats", "1 cup crushed unsweetened corn flakes", "1/2 cup shredded sweetened coconut"],
    "instructions": ["Beat sugar and butter together until fluffy", "Add eggs, vanilla", "Add all dry ingredients", "Sift all together if you have time", "Add coconuts, pecans, oatmeal, crushed corn flakes and chocolate chips", "Stir to combine", "Line baking sheets with parchment", "Using a 1/4-cup ice cream scoop, drop dough onto prepared sheets, about 3 inches apart.", "Flatten each ball with palm of hand", "Bake at 350 degrees F for 8-10 min until golden brown", "Serve warm with a glass of milk. :-)"]}
]



export default recipes;