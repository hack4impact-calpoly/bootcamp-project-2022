import ratatouille from "./images/ratatouille.jpg"
import tacoSoup from "./images/taco-soup.jpg"
import beefAndBrocolli from "./images/beef-and-broccoli.jpg"
import bananaBread from "./images/banana-bread.jpg"
import ratatouille2 from "./images/ratatouille-1.jpg"
import tacoSoup2 from "./images/taco-soup-1.jpg"
import beefAndBrocolli2 from "./images/beef-and-broccoli-1.jpg"
import bananaBread2 from "./images/banana-bread-1.jpg"

export interface Recipe {
    path: string
    name: string;
    desc: string;
    image: string;
    image2: string
    info: string[];
    intro: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {
        path: "Ratatouille",
        name: "Ratatouille",
        image: ratatouille,
        image2: ratatouille2,
        desc: "It’s ratatouille season! Ratatouille is a classic end-of-summer French stew that’s fun to say (rat-tuh-TOO-ee) and fun to make. It’s packed with fresh produce: tomatoes, eggplant, zucchini and yellow squash, and bell pepper.",
        info: [
            "Prep Time: 20 mins",
            "Cook Time: 40 mins",
            "Total Time: 1 hr",
            "Servings: 4-6 servings"
        ],
        intro: "Learn how to make the best French ratatouille with this foolproof recipe! The trick is to roast the vegetables, then add them to a simmering tomato sauce. Recipe yields 4 generous or 6 more modest servings.",
        ingredients: [
            "2 pounds ripe red tomatoes (6 medium or 4 large)", 
            "1 medium eggplant (1 pound), diced into 1/2-inch cubes",
            "1 large red, orange, or yellow bell pepper (about 8 ounces), cut into 3/4-inch squares",
            "1 medium-to-large zucchini (about 8 ounces), diced into 1/2-inch cubes",
            "1 large yellow squash (about 8 ounces), diced into 1/2-inch cubes",
            "5 Tablespoons + 1 teaspoon extra-virgin olive oil, divided",
            "3/4 teaspoon fine sea salt, divided, more to taste",
            "1 medium yellow onion, chopped",
            "4 cloves garlic, pressed or minced",
            "1/4 cup chopped fresh basil",
            "1/4 teaspoon red pepper flakes, more or less to taste",
            "1/4 teaspoon dried oregano",
            "Freshly ground black pepper, to taste"
        ],
        instructions: [
            "Preheat the oven to 425 degrees Fahrenheit with one rack in the middle of the oven and one in the upper third of the oven. Line two large, rimmed baking sheets with parchment paper for easy clean-up, if desired.",
            "To prepare your tomatoes, remove any woody cores with a paring knife. Then, grate them on the large holes of a box grater into a bowl (this is easiest if you hold the tomato at a diagonal), and chop any remaining tomato skin. Or, blitz the tomatoes in a food processor until they are broken into a frothy pulp. Set aside.",
            "On one baking sheet, toss the diced eggplant with 2 Tablespoons of the olive oil until lightly coated. Arrange the eggplant in a single layer across the pan, sprinkle with 1/4 teaspoon of the salt, and set aside.",
            "On the other baking sheet, toss the bell pepper, zucchini and yellow squash with 1 Tablespoon of olive oil and 1/4 teaspoon salt. Arrange the vegetables in a single layer. Place the eggplant pan on the middle rack and the other vegetables on the top rack. Set the timer for 15 minutes.",
            "Meanwhile, warm 2 Tablespoons of the olive oil in a large Dutch oven or soup pot over medium heat. Add the onion and 1/4 teaspoon salt. Cook, stirring occasionally, until the onion is tender and caramelizing on the edges, about 8 to 10 minutes.",
            "Add the garlic, stir, and cook until fragrant, about 30 seconds. Add the tomatoes, and use a wooden spoon or sturdy silicone spatula to stir any browned bits stuck to the bottom of the pan into the mixture. Reduce the heat to medium-low, or as necessary to maintain a gentle simmer.",
            "Once 15 minutes are up, remove both pans from the oven, stir, and redistribute the contents of each evenly across the pans. This time, place the eggplant on the top rack and other vegetables on the middle rack.",
            "Bake until the eggplant is nice and golden on the edges, about 10 more minutes (the eggplant will be done sooner than the rest). Remove the eggplant from the oven, and carefully stir the eggplant into the simmering tomato sauce.",
            "Let the squash and bell pepper pan continue to bake until the peppers are caramelized, about 5 to 10 more minutes. Then, transfer the contents of the pan into the simmering sauce. Continue simmering for 5 more minutes to give the flavors time to meld.",
            "Remove the pot from the heat. Stir in 1 teaspoon olive oil, the fresh basil and red pepper flakes. Crumble the dried oregano between your fingers as you drop it into the pot. Season to taste with additional salt (I usually add 1/4 teaspoon more) and black pepper.",
            "Serve in bowls, perhaps with a little drizzle of olive oil, additional chopped basil, or black pepper on top (all optional). Like all stews, this ratatouille’s flavor improves as it cools. It’s even better reheated the next day. Ratatouille keeps well in the refrigerator, covered, for 4 days, or for several months in the freezer."
        ]
    },
    {
        path: "TacoSoup",
        name: "Taco Soup",
        image: tacoSoup,
        image2: tacoSoup2,
        desc: "This Taco Soup recipe is a fall and winter staple! It’s an easy, protein packed soup full of zesty, crave-worthy flavor, plus it’s perfectly hearty and filling. It’s like chili’s soupier cousin and it’s loaded with all the best taco style ingredients!",
        info: [
            "Prep Time: 10 mins",
            "Cook Time: 35 mins",
            "Total Time: 45 mins",
            "Servings: 7 servings"
        ],
        intro: "This easy taco soup recipe is so hearty, filling and just the perfect comfort food. And the deliciously spiced, beefy flavor will have everyone craving more! Makes about 10 1/2 cups.",
        ingredients: [
            "2 teaspoons olive oil",
            "1 1/4 pounds lean ground beef",
            "1 medium yellow onion chopped (1 1/2 cups)",
            "2 cloves garlic, minced (2 teaspoons)",
            "1 jalapeno, seeded and finely chopped (optional)",
            "2 (14.5 ounces) cans diced tomatoes with green chiles",
            "1 (14 ounces) can low-sodium beef broth",
            "1 (8 ounces) can tomato sauce",
            "2 Tablespoons taco seasoning",
            "1 1/2 cups frozen corn",
            "1 (14.5 ounces) can black beans, drained and rinsed",
            "1 (14.5 ounces) can can pinto beans, drained and rinsed",
            "Toppings: Shredded Mexican blend cheese, chopped green or red onions, diced avocados and corn tortilla strips/chips"
        ],
        instructions: [
            "Heat a largr pot over medium-high heat drizzle lightly with oil.",
            "Add ground beef in a large along with chopped onion, crumbling and stirring occasionally until browned. Add jalapeno and garlic and saute 1 minute longer.",
            "Drain excess fat from beef mixture. ",
            "Stir in tomatoes with chiles, beef broth, tomato sauce, chili powder, cumin, paprika, oregano, ranch dressing mix and season with salt and pepper to tastes. Cover pot with lid and simmer 30 minutes, stirring occasionally.",
            "Add in corn, black beans and pinto beans and cook until heated through. Add 1/2 cup water to thin soup if desired. Stir in cilantro and lime if using.",
            "Serve warm finished with desired toppings."
        ]
    },
    {
        path: "BeefandBroccoli",
        name: "Beef and Broccoli",
        image: beefAndBrocolli,
        image2: beefAndBrocolli2,
        desc: "Beef and Broccoli is an easy meal that is loaded with fresh broccoli, tender nutrition-packed beef, and the best stir fry sauce.",
        info: [
            "Prep Time: 10 mins",
            "Cook Time: 10 mins",
            "Total Time: 20 mins",
            "Servings: 4 servings"
        ],
        intro: "Skip the takeout and whip up a fast and fresh recipe for easy beef and broccoli in 20 minutes or less. Serve with some rice and enjoy! Makes about 4 servings.",
        ingredients: [
            "3 Tablespoons cornstarch, divided",
            "1 pound flank steak, cut into thin 1-inch pieces",
            "1/2 cup low sodium soy sauce",
            "3 Tablespoons packed light brown sugar",
            "1 Tablespoon minced garlic",
            "2 teaspoons grated fresh ginger",
            "2 Tablespoons vegetable oil, divided",
            "4 cups small broccoli florets",
            "1/2 cup sliced white onions"
        ],
        instructions: [
            "In a large bowl, whisk together 2 tablespoons cornstarch with 3 tablespoons water. Add the beef to the bowl and toss to combine.",
            "In a separate small bowl, whisk together the remaining 1 tablespoon cornstarch with the soy sauce, brown sugar, garlic and ginger. Set the sauce aside.",
            "Heat a large nonstick sauté pan over medium heat. Add 1 tablespoon of the vegetable oil and once it is hot, add the beef and cook, stirring constantly until the beef is almost cooked through. Using a slotted spoon, transfer the beef to a plate and set it aside.",
            "Add the remaining 1 tablespoon of vegetable oil to the pan and once it is hot, add the broccoli florets and sliced onions and cook, stirring occasionally, until the broccoli is tender, about 4 minutes.",
            "Return the beef to the pan then add the prepared sauce. Bring the mixture to a boil and cook, stirring, for 1 minute or until the sauce thickens slightly. Serve with rice or noodles."
        ]
    },
    {
        path: "BananaBread",
        name: "Banana Bread",
        image: bananaBread,
        image2: bananaBread2,
        desc: "This banana bread recipe is so easy to make and super soft and moist! This is the very best way to use up overripe bananas. It makes the bread tender and packed full of flavor.",
        info: [
            "Prep Time: 15 mins",
            "Cook Time: 1 hr",
            "Total Time: 1 hr 15 mins",
            "Servings: 1 loaf"
        ],
        intro: "To make the very best banana bread that comes out super moist, it is important to start out with those ugly, overripe bananas! Cut the loaf into slices and serve to friends and family.",
        ingredients: [
            "1 stick (1/2 Cup) butter",
            "3 large ripe bananas",
            "2 large eggs",
            "1 teaspoon vanilla extract",
            "2 cups all purpose flour",
            "1 cup granulated sugar",
            "1 teaspoon baking soda",
            "½ teaspoon salt",
            "½ teaspoon cinnamon"
        ],
        instructions: [
            "Preheat oven to 350 degrees. Spray a loaf pan with non-stick cooking spray or grease with butter and set aside.",
            "Add the stick of butter to a large bowl and microwave for 1 minute, or until melted.",
            "Add the bananas to the same bowl and mash with a fork.",
            "Add the vanilla extract and egg to the bowl and use the same fork to mash and stir until no yellow streaks of egg remain.",
            "In a second large bowl whisk together the flour, sugar, baking soda, salt, and cinnamon.",
            "Add the dry ingredients to the wet ingredients and mix together with a spatula just until combined.",
            "Pour the batter into prepared loaf pan and bake for 45-55 minutes until a toothpick inserted in the center of the bread comes out clean."
        ]
    }
];

export default recipes;