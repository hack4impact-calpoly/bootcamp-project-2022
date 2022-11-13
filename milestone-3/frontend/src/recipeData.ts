import { Recipe } from './components/RecipePreview'

const recipeData: Recipe[] = [
    {
        name: "Pumpkin Chocolate Chip Muffins",
        desc: "Just as stated, pumpkin chocolate chip muffins! A great Halloween snack.",
        image: "https://hips.hearstapps.com/delish/assets/15/38/1442507902-mini-pumpkin-chocolate-chip-muffins-delish-2-3.jpg",
        alt: "Pumpkin Chocolate Chip Muffins",
        url: "pumpkin-muffin",
        ingredients: ["1 cup sugar", "2 eggs", "1/2 cup softened butter", "3/4 cup pumpkin", "1 3/4 cup flour",
        "1 tsp cinnamon", "1 tsp salt", "1/2 tsp nutmeg", "1/2 tsp ground cloves", "3/4 cup chocolate chips",],
        steps: [
            "Blend sugar, butter, and eggs",
            "Add pumpkin",
            "Mix dry ingredients in separate bowl",
            "Combine dry ingredients with pumpkin mixture.",
            "Add chocolate chips",
            "Cook for 28 minutes at 350",
        ],
        source: "From mom :)"
    },
    {
        name: "Homemade Icecream",
        desc: "A personal favorite, good even when it's cold out.",
        image: "https://hips.hearstapps.com/vidthumb/images/delish-homemade-ice-cream-still001-1527189218.jpg?crop=0.790xw:0.704xh;0.122xw,0.219xh&resize=1200:*",
        alt: "Ice Cream",
        url: "ice-cream",
        ingredients: [
            "2 cups heavy whipping cream",
            "2 cups half-and-half cream",
            "1 cup sugar",
            "2 tsp vanilla extract"
        ],
        steps: [
            "Combine ingredients into bowl",
            "Fill cylinder of ice cream maker no more than 2/3 full",
            "Freeze acording to manufacturer's directions",
            "Serve immediately or store in covered container in freezer"
        ],
        source: "https://www.tasteofhome.com/recipes/homemade-vanilla-ice-cream/"
    },
    {
        name: "Cakepops",
        desc: "Somewhat hard to make but very worth it.",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/27/0/FNK_Cake-Pops_H1.jpg.rend.hgtvcom.616.462.suffix/1582853049838.jpeg",
        alt: "Cakepops",
        url: "cakepop",
        ingredients: [
            "1 2/3 cups all purpose flour",
            "1/2 tsp baking powder",
            "1/4 tsp baking soda",
            "1/2 tsp salt",
            "1/2 cup unsalted softened butter",
            "1 cup sugar",
            "1 egg",                
            "2 tsp pure vanilla extract",
            "1 cup whole milk",
            "frosting (whatever kind you like)",
            "32 oz candy melts, coating, or white chocolate",
            "Sprinkles"
        ],
        steps:
        [
            "Preheat oven to 350",
            "Mix flour, baking powder, baking soda, and salt",
            "In separate bowl, mix butter, sugar, egg, and vanilla extract",
            "Combine dry and wet ingredients",
            "Pour cake batter into pan and bake for 30-36 minutes",
            "Once done, crumble cooled cake into bowl on top of frosting. Stir together",
            "Roll cake-frosting mixture into 1 tbsp-sized balls",
            "Melt the candy melts/coating in bowl",
            "Dip lollypop stick into melted coating and insert into center of each cakepop ball",
            "Decorate with sprinkles or other candies" 
        ],
        source: "https://sallysbakingaddiction.com/homemade-cake-pops/"
    }
]

export default recipeData;
