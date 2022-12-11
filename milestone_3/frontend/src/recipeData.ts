export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  };

let recipeObject1 = {
    name: "Snickerdoodle", 
    description: "Here's a cookie recipe just like mom made! These Classic Snickerdoodle cookies get their signature puffy texture and warm flavor via cream of tartar in the dough and a cinnamon-sugar coating.",
    image: `${process.env.PUBLIC_URL}/images/snickerdoodle.jpg`,
    ingredients: [
        "1 cup butter, softened", 
        "1 ½ cup sugar",
        "1 teaspoon baking soda",
        "1 teaspoon cream of tartar",
        "¼ teaspoon salt",
        "2 eggs",
        "1 teaspoon vanilla",
        "3 cup all-purpose flour",
        "¼ cup sugar",
        "2 teaspoon ground cinnamon"
    ],
    instructions: [
        "In a large mixing bowl beat butter with an electric mixer on medium to high speed for 30 seconds. Add 1-1/2 cups sugar, baking soda, cream of tartar, and salt. Beat until combined, scraping sides of bowl occasionally. Beat in eggs and vanilla until combined. Beat in as much of the flour as you can with the mixer. Using a wooden spoon, stir in any remaining flour. Cover and chill dough about 1 hour or until easy to handle.",
        "Preheat oven to 375°F. In a small bowl combine 1/4 cup sugar and cinnamon. Shape dough into 1-1/4-inch balls. Roll balls in cinnamon-sugar mixture to coat. Place 2 inches apart on an ungreased cookie sheet.",
        "Bake for 10 to 12 minutes or until bottoms are light brown. Transfer cookies to a wire rack; cool."
    ]
};

let recipeObject2 = {
    name: "Oatmeal-Rasin", 
    description: "Oatmeal-Raisin Cookies just like grandma made! Serve with a tall glass of milk for an oatmeal cookie break that will take you back to childhood.",
    image: `${process.env.PUBLIC_URL}/images/oatmeal_rasin.jpg`,
    ingredients: [
        "1 cup butter, softened", 
        "1 ½ cup packed brown sugar",
        "1 teaspoon baking soda",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon salt",
        "2 eggs",
        "1 teaspoon vanilla",
        "1 ½ cup all-purpose flour",
        "3 cup regular or quick-cooking rolled oats",
        "1 cup raisins"
    ],
    instructions: [
        "Preheat oven to 350°F. In a large bowl beat butter with an electric mixer on medium to high speed for 30 seconds. Add brown sugar, baking soda, cinnamon, and salt. Beat until combined, scraping sides of bowl occasionally. Beat in eggs and vanilla until combined. Beat in as much of the flour as you can with the mixer. Stir in any remaining flour. Stir in oats and raisins.",
        "Drop dough by rounded teaspoons or tablespoons 2 inches apart onto ungreased cookie sheets. Or drop dough using a cookie scoop or 1/4-cup measure 3 inches apart onto ungreased cookie sheets.",
        "Bake in the preheated oven about 8 minutes for spoon-size portions (bake about 12 minutes for cookie-scoop or 1/4-cup portions) or until edges are light brown and centers appear set. Cool on cookie sheet for 2 minutes. Transfer to a wire rack; cool completely."
    ]
};

let recipeObject3 = {
    name: "Gingersnaps", 
    description: "Crisp on the edges and slightly chewy on the inside, these snappy ginger-flavor cookies are a favorite any time of the year.",
    image: `${process.env.PUBLIC_URL}/images/gingersnaps.jpg`,
    ingredients: [
        "½ cup oleo (80 percent vegetable oil margarine) or butter, softened", 
        "¼ cup shortening",
        "¾ cup granulated sugar",
        "½ cup packed brown sugar",
        "1 teaspoon baking soda",
        "1 teaspoon ground cinnamon",
        "2 teaspoon ground ginger",
        "¼ teaspoon salt",
        "1 egg",
        "⅓ cup mild-flavor molasses",
        "2 cups all-purpose flour",
        "¼ cup sugar"
    ],
    instructions: [
        "In a large bowl, combine oleo and shortening. Beat with an electric mixer on medium to high speed for 30 seconds. Add the 3/4 cup granulated sugar, brown sugar, baking soda, cinnamon, ginger, nutmeg, cloves, and salt. Beat until combined, scraping bowl occasionally. Beat in egg and molasses until combined. Beat in as much of the flour as you can with the mixer. Using a wooden spoon, stir in any remaining flour. Cover and chill for 2 hours or until dough is easy to handle.",
        "Preheat oven to 350 degrees F. Place the 1/4 cup coarse sugar in a small bowl. Shape dough into 1-inch balls; roll balls in sugar. Place balls 2 inches apart on an ungreased cookie sheet.",
        "Bake in the preheated oven about 10 minutes or until tops are crackled and edges are firm. Transfer cookies to a wire rack; let cool. Makes about 50 cookies."
    ]
};

const recipes: Recipe[] = [
    recipeObject1,
    recipeObject2,
    recipeObject3
];

export default recipes; // This will allow us to access this data anywhere!