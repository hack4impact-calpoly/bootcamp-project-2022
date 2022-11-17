export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [{
    "name": "Chocolate Chip Cookies",
    "description": "This chocolate chip cookie recipe is a simple chocolate chip cookie recipe that makes super soft chocolate, super yummy chip cookies - no mixer necessary, no chilling needed.",
    "image": "https://sugarspunrun.com/wp-content/uploads/2020/03/The-best-worst-chocolate-chip-cookie-recipe-1-of-1.jpg",
    "ingredients": [
        "1/2 cup butter",
        "1/2 cup granulated sugar",
        "1/4 cup brown sugar packed",
        "2 teaspoons vanilla extract",
        "1 large egg",
        "1 3/4 cups all-purpose flour",
        "1/2 teaspoon baking soda",
        "1/2 teaspoon kosher salt",
        "1 cup semisweet chocolate chips"
    ],
    "instructions": [
        "Preheat the over to 350 F.",
        "Microwave the butter for about 40 seconds. Butter should be completely melted but shouldn't be hot.",
        "In a large bowl, mix butter with the sugars until well-combined.",
        "Stir in vanilla and egg until incoroporated.",
        "Add the flour, baking soda, and salt. Please read the recipe note about properly measuring flour.",
        "Mix dough until just combined. Dough should be soft and a little sticky but not overly sticky.",
        "Stir in chocolate chips.",
        "Scoop out 1.5 tablespoons of dough (medium cookie scoop) and place 2 inches apart on baking sheet.",
        "Bake for 7-10 minutes, or until cookies are set. They will be puffy and still look a little underbaked in the middle."
    ]
    }, { 
    "name": "Brownies",
    "description": "This brownie recipe is simple, quick, and delicious",
    "image": "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-1-1200.jpg",
    "ingredients": [
        "1 cup butter, melted",
        "2 cups white sugar",
        "1/2 cupt cocoa powder",
        "1 teaspoon vanilla extract",
        "4 eggs",
        "1 1/2 cups all-purpose flour",
        "1/2 teaspoon baking powder",
        "1/2 cup walnut halves"
    ] ,
    "instructions": [
        "Preheat the oven to 350 degrees F (175 degrees C). Grease a 9x13-inch pan.",
        "Combine the melted butter, sugar, cocoa powder, vanilla, eggs, flour, baking powder, and salt. Spread the batter into the prepared pan. Decorate with walnut halves, if desired.",
        "Bake in preheated oven for 20 to 30 minutes or until a toothpick inserted in the center comes out with crumbs, not wet. Cool on wire rack."
    ] 
    }, { 
    "name": "Peach Cobbler",
    "description": "This old-fashioned peach cobbler recipe is traditional and easy to make. It is best enjoyed warm, right after it is baked",
    "image": "https://www.jocooks.com/wp-content/uploads/2020/08/peach-cobbler-1-16.jpg",
    "ingredients": [
        "5 peaches, peeled, cored, and sliced",
        "3/4 cups granulated sugar",
        "1/4 teaspoon salt",
        "6 tablespoons butter",
        "1 cup all-purpose flour",
        "1 cup granulated sugar",
        "2 teaspoons baking powder",
        "1/4 teaspoon salt",
        "3/4 cup milk",
        "ground cinnamon"
    ] ,
    "instructions": [
        "Add the sliced peaches, sugar and salt to a saucepan and stir to combine. *(If using canned peaches, skip steps 1 & 2 and follow the directions starting at step 3)",
        "Cook on medium heat for just a few minutes, until the sugar is dissolved and helps to bring out juices from the peaches. Remove from heat and set aside.",
        "Preheat oven to 350 degrees F. Slice butter into pieces and add to a 9x13 inch baking dish. Place the pan in the oven while it preheats, to allow the butter to melt. Once melted, remove the pan from the oven.",
        "In a large bowl mix together the flour, sugar, baking powder, and salt. Stir in the milk, just until combined. Pour the mixture into the pan, over the melted butter and smooth it into an even layer.",
        "Spoon the peaches and juice (or canned peaches, if using) over the batter. Sprinkle cinnamon generously over the top.",
        "Bake at 350 degrees for about 38-40 minutes. Serve warm, with a scoop of ice cream, if desired."
    ]     
}]

export default recipes;