
export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }
const recipes: Recipe[] = [
    {name: 'Spicy Vodka Pasta', 
    description: 'Spice up your home cooking with this irresistible low FODMAP pasta!', 
    image: 'https://www.kimscravings.com/wp-content/uploads/2021/01/creamy-pasta-sauce-7.jpg', 
    ingredients:['2 tbs garlic infused olive oil', '1/4 cup tomato paste', '1/3 cup reduced fat cream (lactose-free if necessary)', '1/4 cup vodka', '1 tsp chilli flakes', '1 tsp butter', '1/4 cup parmesan cheese', 'Basil leaves', '1/2 cup spring onion greens'], 
    instructions:['Bring a large pot of salted water to the boil and cook pasta until al dente.', 'In a large pan or saucepan over medium heat, heat the olive oil. Add tomato paste and cook for 1-2 minutes.', 'Add in the cream and vodka, and cook for 2 minutes. Add the red chilli flakes and butter and stir for a minute or until the butter has melted through.', 'Add 2 tbs of water if the sauce appears too thick, then stir through the parmesan cheese. Stir in the cooked pasta until well combined.', 'Serve immediately and garnish with spring onion greens, basil, salt and pepper.']}, 
    {name: 'Lemon Chicken & Rice', 
    description: 'A cozy main dish flavored with Italian herbs and fresh lemon juice.', 
    image: 'https://funwithoutfodmaps.com/wp-content/uploads/2022/01/2022-Low-FODMAP-Lemon-Chicken-and-Rice-3.jpg', 
    ingredients:['1 1/2 lbs boneless, skinless chicken thighs',  'Salt and pepper', '2 tbsp garlic infused olive oil', '1 cup long grain white rice', '2 cups low FODMAP chicken or vegetable broth', '3 tbsp freshly squeezed lemon juice', '2 tbsp low FODMAP Italian seasoning', '1 tbsp chopped fresh parsely'], 
    instructions:[ 'Season the chicken thighs with salt and pepper.', 'Heat olive oil in a large skillet (with a cover) over medium-high heat. Add chicken thighs and sear for 2 minutes on each side until golden brown. Remove chicken from the pan.',  'To the now-empty pan, add rice, chicken broth, lemon juice, and Italian seasoning. If the chicken broth you are using is unsalted, add ½ teaspoons salt. Stir to mix. Return the chicken to the pan, placing it on top of the rice mixture.',  'Cover the skillet and bring it to a brief boil over medium-high heat. Once boiling, reduce heat to medium-low or the temperature-setting that maintains a steady, gentle simmer. Try to use the lowest setting while maintaining a simmer to help prevent sticking or burning. Cook for 15 minutes or until all of the liquid has been absorbed into the rice, and the chicken is completely cooked. The USDA considers chicken to be fully cooked when a food thermometer inserted into the thickest part reads 165°F. Remove from heat and adjust flavor with additional salt and pepper as needed.',  'Serve the chicken and rice warm topped with optional parsley.']}, 
    {name: 'Garlic Tofu Veggie Bowl', 
    description: 'With a tummy-friendly garlic infused oil, enjoy garlic in your low FODMAP diet!', 
    image: 'https://alittlebityummy.com/wp-content/uploads/2021/05/Low-FODMAP-Sticky-Garlic-Tofu-Veggie-Bowl.jpg.webp', 
    ingredients:['120g carrots', '70g sweet potatoes', '2 tsp olive oil', '100g firm tofu', '2 tsp corn starch', '1 tsp soy sauce', '2 tsp pure maple syrup', '1/4 tsp sesame seeds', '2 tsp garlic infused oil', '180g pre-cooked grain brown rice', '30g spinach', '2 tbsp green onions/scallions'], 
    instructions:['Preheat the oven to 200ºC (355ºF) fan bake function. Line a roasting tray with baking paper.', 'Peel the carrot and sweet potato, then cut into small chunks. Place in the roasting tray, drizzle in olive oil and season generously with salt and pepper. Place in the oven. Cook for ten minutes and then flip and cook for a further 5 to 10 minutes until golden brown and tender.', 'While the veggies roast, cook the tofu. Cut the tofu into small cubes and place in a bowl. Sprinkle with the cornflour/starch and mix until well covered (it’s okay if there is still some flour left in the bottom of the bowl. Drizzle over the soy sauce, maple syrup and sesame seeds. Mix to combine.', 'Cook the tofu. Place a medium-sized non-stick frypan over medium-high heat. Add the garlic infused oil. Add the tofu and scrape any sauce into the pan. Quickly push the tofu through the sauce so it caramelises onto the tofu. Cook for 2 minutes, then flip and cook for another 2 minutes (the outside of the tofu should go golden brown). Add the spinach to the pan and wilt for 1 minute. Remove from heat.', 'Heat the precooked rice in the microwave until hot.',  'Add the roasted veggies, brown rice, sticky tofu, and spinach to a bowl. Season with black pepper. Top with chopped spring onion/scallion leaves and season with black pepper.']} 
];
export default recipes;
