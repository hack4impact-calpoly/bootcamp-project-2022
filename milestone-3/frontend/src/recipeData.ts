import foodPic1 from "./images/Instant-Pot-Chicken-Marinara-with-Polenta-12.jpeg"
import foodPic2 from "./images/Broccoli-Pesto-Pasta-7.jpeg"
import foodPic3 from "./images/Lemon-Chicken-7.jpeg"

export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }
  
  const recipes: Recipe[] = [
    {name: "Instant Pot Marinara Chicken with Polenta", 
    description: "Instant pot marinara chicken with polenta, sounds pretty good and fast to make, might try this! I like chicken too so it should be pretty good.", 
    image: foodPic1, 
    ingredients: [
    "8 boneless, skinless chicken thighs (2 lbs)", 
    "2 tsp salt", 
    "4 cups chicken stock or broth", 
    "1 cup stone ground polenta or yellow cornmea"],
    instructions: [
    "Sprinkle the chicken thighs with 1 teaspoon salt and add them along with the tomato sauce to your pressure cooker, giving it a quick stir to combine.", 
    "Cover with the lid. Turn to manual (pressure cook) mode. Cook on high (full pressure) for 5 mins.", 
    "Let the pressure release naturally for 10 minutes. Then do a quick release for any remaining pressure. While the chicken is cooking bring the chicken stock to a boil in a medium sized pot.", 
    "Whisk in polenta and cook, while stirring, until polenta has absorbed all the liquid, about 12-14 minutes.", 
    "Stir in remaining 1 teaspoon salt and remove from heat. Cover with a lid until ready to serve. Use two forks to shred the thighs in the tomato sauce.", 
    "Serve over polenta and enjoy!"]},
    {name: "Brocolli Pesto Pasta", 
    description: "Brocolli pesto pasta, doesn't sound the best, but it's very green, and apprently tastes pretty good too so I might try this.", 
    image: foodPic2, 
    ingredients: [
    "Broccoli florets", 
    "Fresh basil", 
    "Fresh garlic", 
    "Pine nuts", 
    "Extra virgin olive oil", 
    "Parmigiano-Reggiano", 
    "And one secret ingredient: reserved pasta cooking water"],
    instructions: [
    "Prep all of your broccoli pesto ingredients—rinse the basil leaves, grate your Parmigiano, peel your garlic. Bring a big pot of salted water to a boil.", 
    "Boil the broccoli. After two minutes, remove the florets, and add your pasta.", 
    "While the pasta cooks, make the pesto! Blend the broccoli, basil, garlic, pine nuts, extra virgin olive oil, salt and parmigiano reggiano until it's nice and smooth." , 
    "When the pasta is done, scoop out a cup of that liquid gold (aka pasta water) and add it slowly to the pesto as you blend it a bit more.", 
    "Toss the pasta with the broccoli pesto and dig in!"]},
    {name: "Lemon Chicken", 
    description: "Easy lemon chicken, it's very tasty no cap", 
    image: foodPic3, 
    ingredients: [
    "LEMON", 
    "GARLIC", 
    "HERBS"],
    instructions: ["Make a lemon chicken marinade. Well, it's really more like a rub or a paste, because our lemon chicken recipe requires no actual marinating (yay!). But basically, we coat the chicken breasts in a thick, olive oil-based herb paste flavored with oregano, thyme, garlic powder, salt and pepper.",
    "Make the lemon chicken sauce! Stir together all of the zingy things—white wine, fresh garlic, lemon zest, lemon juice—to make the sauce that the chicken breasts will bake in. You'll also use this sauce to baste the chicken as it bakes, ensuring that these bright flavors have a chance to be absorbed by the chicken (without having to actually marinate the chicken).", 
    "Bake! Until you get that internal temperature reading of 165°F. Then it's time to dig in!"]}];

  export default recipes; // This will allow us to access this data anywhere!