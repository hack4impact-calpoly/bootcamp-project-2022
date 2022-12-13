export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

const recipes: Recipe[] = [
	{name: "Lasagna",
  description: "This Lasagna Recipe is easy to make with a creamy ricotta cheese mixture, savory meat sauce, and mozzarella cheese.",
  image: "/images/Lasagna-Recipe.webp",
  ingredients: ["15 oz. ricotta cheese", "1 large egg", "4.5 cups mozzarella cheese",
                "3/4 cup Paremsan cheese, freshly grated", "2 teaspoons Italian seasoning",
                "1/2 teaspoon salt", "1/4 tsp pepper", "1 tbsp olive oil", 
                "1 yellow onion, fineley diced", "3/4 lb. ground beef",
                "3/4 lb. ground Italian sausage", "3 cloves garlic",
                "1/2 cup chicken broth", "40 oz marinara sauce",
                "1 tbsp tomato paste", "1 teaspoon hot sauce",
                "1 teaspoon Worcestershire sauce", "12 lasagna noodels"],
  instructions: ["Combine the cheese filling ingredients in a medium bowl and set aside. Measure out remaining ingredients.",
                "Heat olive oil over medium heat and add the diced onions. Let them soften for 10 minutes.",
                "Add the ground beef and sausage and increase heat to medium-high. Use a spatula to break up the meat so that it’s very fine and crumbled. Cook for 8-10 minutes, or until cooked through. Add garlic during the last minute. Drain excess grease.",
                "Add the chicken broth and use a silicone spatula to “clean” the bottom and sides of the pot. Add the marinara sauce, tomato paste, hot sauce, and Worcestershire sauce. Bring to a boil, then reduce to a simmer. Cover partially and let the sauce simmer gently.",
                "Preheat oven to 375 degrees", "Boil a large pot of of salted pasta water",
                "Once a boil is reached, cook the noodles to al dente",
                "Drain and rinse with cold water", "Put on meat sauce",
                "Put on cheese", "Put on noodles", "Repeat until done",
                "Bake for 30 minutes", "Garnish with parsley"]},
  {name: "Baked Ravioli",
  description: "This Baked Ravioli recipe can be made with refrigerated or frozen ravioli with no boiling required! It’s an easy make-ahead recipe that you can refrigerate or freeze to bake later! The meaty marinara sauce has a hint of cream with simple seasonings and the best flavor enhancers.",
  image: "/images/Baked-Ravioli-1.jpeg",
  ingredients: ["3/4 lb ground beef", 
                "1/2 teaspoon each: onion powder, dried basil, dried oregano, mustard powder, salt", "4.5 cups mozzarella cheese",
                "1 tsp hot sauce", "1 tsp Worcestershire sauce",
                "1 small yellow onion diced", "3 cloves garlic minced",
                "24 oz. marinara sauce", "1/2 cup half and half",
                "2 cups mozzarella cheese, divided", "20 oz. refrigerated ravioli"],
  instructions: ["Preheat oven to 350 degrees",
                  "Add ground beef to large skillet over medium-high heat. Cook and crumble it for 3 minutes.Add the seasonings, hot sauce, Worcestershire sauce, and the onions and cook for 5 more minutes. Add the garlic and cook for 1 more minute. Tilt the skillet and spoon out any excess grease. Reduce heat to low.",
                  "Spread 3/4 cup of marinara sauce on the bottom of a 9 x 13-inch casserole dish and add the rest to the skillet with the meat. Add the half and half and stir to combine. Remove from heat.",
                  "Arrange half of the ravioli on the bottom of the casserole dish and top with half of the meat sauce, then top with ½ cup mozzarella cheese.",
                  "Top with remaining ravioli, then the meat sauce and remaining mozzarella.",
                  "Cover and bake for 35 minutes. If covering with foil, spray one side with non-stick cooking spray to prevent it from sticking to the cheese while it bakes.",
                  "Remove cover and broil at 450 to brown the top slightly. It’ll take just 1-2 minutes, watch it closely during this time.",
                  "Remove from heat and serve!"]},
  {name: "Chicken and Broccoli Pasta",
  description: "This Chicken and Broccoli Pasta has every flavor element incorporated into this delicious cream sauce, including butter, white wine, garlic, lemon, Asiago and Parmesan cheese, and the best seasonings and flavor enhancers. You won’t want to put your fork down!",
  image: "/images/Chicken-and-Broccoli-Pasta-1.webp",
  ingredients: ["1 large boneless skinless chicken breast", "Lemon pepper seasoning",
                "2 tbsps olive oil", "1/2 cup dry white wine", "3 tbsps butter",
                "3 cloves garlic", "2 tbsps flour", "1.25 cups half and half", 
                "1 tsp hot sauce", "2.5 cups Broccoli", "1/2 cup Parmesan", "1/2 cup Asiago", 
                "1/2 lb. Penne", "2 tsps lemon juice", "1 tsp Italian seasoning", "1/2 tsp mustard powder",
                "1 pinch red pepper flakes"],
  instructions: ["Combine seasoning ingredients",
                "Cut the chicken into 3/4 inch pieces and season it in Lemon Pepper Seasoning. Heat olive oil in a large skillet over medium-high heat. Add the chicken and cook on each side for 2-3 minutes, until a brown crust has developed. Remove and set aside.",
                "Bring a large pot of salted pasta water to a boil while you begin to prepare the sauce as outlined below.",
                "Add the white wine to the same pot that you used to cook the chicken and set the heat to medium. Use a silicone spatula to “clean” the bottom of the pot. Let it reduce by half, about 4 minutes.",
                "Add the butter and garlic and cook for 1 minute. Stir in the flour and cook for 1-2 minutes, stirring continuously.",
                "Add chicken broth in small splashes, stirring continuously. Add the half and half in the same manner, then add the hot sauce and seasonings. Bring to a boil, reduce to a simmer and cover it partially.",
                "Boil the pasta to al dente according to package instructions. Add the broccoli to the boiling pasta water during the last 4 minutes, then drain",
                "Reduce heat of sauce to low and slowly stir in the grated cheese.",
                "Remove from heat and stir in the lemon juice. Add the pasta, broccoli, and the chicken and stir to combine. Taste and season with salt if desired. Serve!"]}
];

export default recipes;