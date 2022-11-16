export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    // id: string;
}

const recipes: Recipe[] = [
    {name: "Chicken Sandwich",
    description: "This perfectly seasoned boneless chicken thigh is freshly breaded and served on a brioche bun with pickles, red cabbage, pickles, and creamy chipotle sauce.",
    image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2022/02/Fried-Chicken-Sandwich-5.jpg",
    ingredients: ["4 boneless skinless chicken thighs", "1 cup buttermilk", "1 teaspoon Siracha", "2 teaspoons kosher salt", "4 to 6 cups vegetable oil", "1 1/2 cups all-purpose flour", "2 tablespoons cornstarch", "2 teaspoons baking powder", "1 teaspoon smoked paprika", "1/2 teaspoon garlic powder", "1/4 teaspoon onion powder", "1/4 teaspoon black pepper"],
    instructions: ["Use a knife to trim any membranes or fat off the chicken. Place the chicken thighs, one at a time, in a plastic freezer bag, removing as much air as possible. Pound the chicken to 1/4-inch thickness with a rolling pin or meat mallet. With a sharp knife, cut the pounded chicken In half. If the pieces are too large to fit a bun, you can trim off the ends. You can cook the smaller pieces to make chicken nuggets.", "Put all the pounded chicken in the bag and add the buttermilk, Siracha, and 1 teaspoon of kosher salt. Refrigerate for 2 to 4 hours or overnight.", "Pour the vegetable oil in a Dutch oven or high-sided pot. The oil should be about 1-inch deep. Heat the oil over medium high heat until shimmering, about 350 degrees F. Line a large plate with paper towels and set aside.", "In a shallow bowl, whisk together the flour, cornstarch, baking powder, paprika, garlic powder, onion powder, remaining 1 teaspoon salt, and pepper.", "Remove a piece of chicken from the marinade, letting the excess drip off and dip it into the flour mixture, turning a few times and pressing firmly so the flour sticks to the chicken. Set aside on a baking sheet and repeat with remaining chicken pieces.", "Carefully place the breaded chicken into the hot oil, without crowding the pan. I recommend doing 2 pieces at a time. Cook turning a few times, until golden brown and crispy on both sides, about 4 to 5 minutes total.", "Place the cooked chicken on the paper towel lined plate and continue frying the other pieces of chicken. Make sure the oil doesn’t get too hot or cool down, adjust temperature if necessary.", "To make the sauce, in a small bowl, whisk together the mayonnaise, BBQ sauce, Dijon mustard, and Siracha, if using.", "To toast the buns, spread butter on the inside of the buns. Place under the broiler for 2 minutes or until light golden brown. Don’t walk away, watch them closely.", "Assemble the sandwiches: Spread some of the sauce on the inside of the toasted buns. Top the bottom bun with a piece of fried chicken. Top with slaw and a few pickles, if desired. Close the sandwich with the top bun and serve immediately."]
    ,
    // id: "sammy"  
    },
    {name: "Chicken Tenders",
    description: "These juicy oven fried chicken tenders are soaked in lemon  garlic flavors and coated in a golden parmesan panko breading to create the perfect crunch.",
    image: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2016/01/healthy-baked-chicken-tenders-22-7.jpg",
    ingredients: ["1 large egg", "2 tablespoons olive oil", "2 tablespoons lemon juice (or juice of 1/2 a lemon)", "1 tablespoon fresh chopped parsley", "2 teaspoons minced garlic", "3/4 teaspoon salt to season", "1/4 teaspoon cracked black pepper", "28 ounces (800 g) chicken tenders", "1 cup Panko breadcrumbs", "1/2 cup regular breadcrumbs (garlic, herb or Italian seasoned for extra flavour)", "1 teaspoon mild paprika (or sweet, smoky, spicy)", "1/2 teaspoon garlic powder", "1/2 teaspoon onion powder", "1/4 cup fresh grated parmesan cheese"],
    instructions: ["Preheat oven to 400°F (200°C). Lightly grease a baking tray / sheet with cooking oil spray, or a light coating of oil. Set aside.", "In a large bowl, whisk together the egg, oil, lemon juice, parsley, garlic, salt and pepper.", "Dip chicken tenders into egg mixture and let sit for 5 minutes while preparing crumb mixture.", "In another bowl, combine both breadcrumbs, paprika, garlic powder, onion powder and parmesan cheese.", "Dredge the egg coated chicken in the breadcrumb/parmesan mixture, lightly pressing to evenly coat.", "Arrange tenders on the baking sheet / tray and lightly spray with cooking oil spray.", "Bake for 10 minutes. Flip and bake for a further 5-10 minutes or until cooked through. (Broil in the last 2-3 minutes for a golden crispy crumb!)"]
    ,
    // id: "tenders"
    },
    {name: "Cornbread",
    description: "This irresistible golden cornbread has a toasted crust and sweet tender center, drizzled with honey and topped with butter.",
    image: "http://www.thecomfortofcooking.com/wp-content/uploads/2021/08/Honey_Butter_Cornbread-4.jpg",
    ingredients: ["1 cup all-purpose flour", "1 cup yellow cornmeal", "⅔ cup granulated sugar", "1 teaspoon salt", "3 ½ teaspoons baking powder", "⅓ cup neutral oil or melted butter", "1 large egg", "1 cup milk"],
    instructions: ["Grease a 9-inch round cake pan or cast iron skillet well and set aside. Preheat the oven to 400 degrees.", "In a medium mixing bowl, add the flour, cornmeal, sugar, salt, and baking powder. Whisk to combine well.", "Make a well in the center of your dry ingredients and add your oil or butter, milk, and egg. Stir just until the mixture comes together and there are only a few lumps remaining.", "Pour the batter into the prepared pan and bake for 20-25 minutes until the top is a deep golden brown and a toothpick inserted into the center comes out clean.", "Serve hot."]
    ,
    // id: "cornbread"
    }
];

export default recipes;