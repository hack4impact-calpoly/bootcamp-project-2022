export interface Recipe {
    name: string;
    image: string;
    description: string;
    imgAltName: string;
    ingredients: string[];
    instructions: string[];
    orig_link?: string; 
    orig_link_name?: string;
    buttonHref: string;
}


 
  const recipeData: Recipe[] = [
	{
        "name": "banana bread", 
        "image": "https://www.allrecipes.com/thmb/GBkEPttyEbnx2x8tcRzkabMGYi0=/2000x2000/filters:no_upscale()/20144-banana-banana-bread-mfs-60-bddcb8e0caac452386de52f6fecf33db.jpg",
        "imgAltName": "Banana Bread Image Here",
        "description": "decadant sweet cake made with bananas. pairs great with a scoop of vanilla ice cream!",
        "ingredients": [
            "2 cups all-purpose flour",
            "1 teaspoon baking soda",
            "¼ teaspoon salt",
            "¾ cup brown sugar",
            "½ cup butter",
            "2 eggs, beaten",
            "⅓ cups mashed overripe bananas"
        ], 
        "instructions":[
            "Preheat the oven to 350 degrees F (175 degrees C). Lightly grease a 9x5-inch loaf pan.",
            "Combine flour, baking soda, and salt in a large bowl. Beat brown sugar and butter with an electric mixer in a separate large bowl until smooth. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture until just combined. Pour batter into the prepared loaf pan.", 
            "Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 60 minutes. Let bread cool in pan for 10 minutes, then turn out onto a wire rack to cool completely."
        ], 
        "orig_link": "https://www.allrecipes.com/recipe/20144/banana-banana-bread/",
        "orig_link_name": "allrecipes.com",
        "buttonHref": "/banana bread" 
    
    },
	{
        "name": "apple pie", 
        "image": "https://www.southernliving.com/thmb/8ZPRxIpiGVngabs8pWizT9qIT3U=/1507x2000/filters:fill(auto,1)/2589601_mailb_mailbox_apple_pie_003_0_0-2000-de5c23bb4c4e433fb6d5547d19cb3bcd.jpg",
        "imgAltName": "Lemon Bar Image Here",
        "description": "delicious apple and cinamon filling wrapped in flaky pie crust. perfect for fall time!",
        "ingredients": [
            "1 recipe for double pie crust",
            "2 1/4 lbs Granny Smith Apples (7 cups thinly sliced)",
            "1 1/2 tsp cinnamon",
            "8 Tbsp unsalted butter",
            "3 Tbsp  all-purpose flour",
            "1/4 cup water",
            "1 cup granulated sugar",
            "1 egg , + 1 Tbsp water, for egg wash"
        ], 
        "instructions":[
            "Make the pie crust recipe and chill per instructions while preparing the filling. Preheat oven to 425˚F.",
            "Melt butter in a medium saucepan over medium heat. Whisk in 3 Tbsp flour then simmer for 1 minute, whisking constantly. Whisk in 1/4 cup water, 1 cup sugar and bring to a boil. Reduce heat and continue simmering 3 minutes, whisking frequently then remove from heat.",
            "Peel, remove cores and thinly slice 7 cups of apples and place them in a large bowl. Sprinkle the top with 1 1/2 tsp cinnamon and toss to combine. Pour the sauce over the apples and stir to coat the apple slices.",
            "Sprinkle your work surface with flour and roll out bottom pie crust to a 12 diameter circle. Wrap it around your rolling pin to transfer it to the 9'' pie plate. Add apple mixture, mounding slightly in the center and being careful not to get the filling on the edges which would make it difficult to seal.",
            "Roll second crust into an 11'' round and cut into 10 even thickness strips using a pizza cutter. Arrange strips in a woven lattice pattern over the top (see video tutorial). Beat together 1 egg and 1 Tbsp water and brush the top with egg mixture.",
            "Bake at 425˚F in the center of the oven for 15 minutes. Reduce the heat to 350˚F and continue baking another 45 minutes or until apples are soft and filling is bubbling through the vents.* Rest at room temp 1 hour before serving."
        ], 
        "orig_link": "https://natashaskitchen.com/apple-pie-recipe/",
        "orig_link_name": "natashaskitchen.com",
        "buttonHref": "/apple pie"  

    },
	{   
        "name": "lemon bars", 
        "image": "https://preppykitchen.com/wp-content/uploads/2020/02/Lemon-Bars-feature-new.jpg",
        "imgAltName": "Lemon Bar Image Here",
        "description": "the perfect mix of tart and sweet. hard to go wrong with a classic lemon bar!",
        "ingredients": [
            "1/2 pound unsalted butter, at room temperature [crust]",
            "1/2 cup granulated sugar [crust]",
            "2 cups flour [crust]",
            "1/8 teaspoon kosher salt [crust]",
            "6 extra-large eggs at room temperature [filling]",
            "3 cups granulated sugar [filling]",
            "2 tablespoons grated lemon zest (4 to 6 lemons) [filling]",
            "1 cup freshly squeezed lemon juice [filling]",
            "1 cup flour [filling]",
            "Confectioners' sugar, for dusting"
        ], 
        "instructions":[
            "Preheat the oven to 350 degrees F.",
            "For the crust, cream the butter and sugar until light in the bowl of an electric mixer fitted with the paddle attachment. Combine the flour and salt and, with the mixer on low, add to the butter until just mixed. Dump the dough onto a well-floured board and gather into a ball. Flatten the dough with floured hands and press it into a 9 by 13 by 2-inch baking sheet, building up a 1/2-inch edge on all sides. Chill.",
            "Bake the crust for 15 to 20 minutes, until very lightly browned. Let cool on a wire rack. Leave the oven on.",
            "For the filling, whisk together the eggs, sugar, lemon zest, lemon juice, and flour. Pour over the crust and bake for 30 to 35 minutes, until the filling is set. Let cool to room temperature.",
            "Cut into squares and dust with confectioners' sugar."
        ], 
        "orig_link": "https://www.foodnetwork.com/recipes/ina-garten/lemon-bars-recipe-1941483",
        "orig_link_name": "foodnetwork.com",
        "buttonHref": "/lemon bars"
    } 
];

export default recipeData;




