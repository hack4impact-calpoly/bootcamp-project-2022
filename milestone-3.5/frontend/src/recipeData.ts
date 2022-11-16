export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    name: 'Strawberry Poke Cake',
    description:
      'We make this beloved dessert with not-too-sweet buttermilk cake and very lightly sweetened whipped cream. The cake tastes best just slightly chilled, so let it sit out to warm up a bit while you whip the cream for the topping.',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/1/29/1/FN_Strawberry-Poke-Cake_s4x3.jpg.rend.hgtvcom.826.620.suffix/1393874276855.jpeg',
    ingredients: [
      '2 sticks (1 cup) unsalted butter at room temperature, plus more for greasing the pan',
      '2 1/2 cups all-purpose flour, 1/2 teaspoon baking powder',
      '1/2 teaspoon baking soda',
      '1/2 teaspoon fine salt',
      '1 1/4 cups buttermilk, well shaken',
      '2 teaspoons pure vanilla extract',
      '2 cups sugar',
      '3 large eggs, at room temperature, lightly beaten',
      'One 3-ounce box strawberry gelatin',
      '2 pounds strawberries',
      '3 tablespoons sugar',
      '2 cups heavy cream, cold',
      '1 tablespoon sugar',
      '2 teaspoons pure vanilla extract',
    ],
    instructions: [
      'For the cake: Position an oven rack in the lower third of the oven and preheat to 350 degrees F. Butter the bottom and sides of a 9-by-13-inch pan.',
      'Whisk the flour, baking powder, baking soda and salt in a medium bowl; set aside. Whisk the buttermilk and vanilla in a spouted measuring cup; set aside.',
      'Beat the sugar and butter in a stand mixer (or a large bowl if using a hand mixer) at medium speed until very light in color and fluffy, about 5 minutes, scraping down the side of the bowl as needed. Slowly add the eggs and beat until fully incorporated. Reduce the speed to the lowest setting; with the mixer running, alternate beating in the flour mixture in three additions and the buttermilk mixture in two, starting and ending with the flour mixture. Scrape down the side of the bowl, and beat until the batter is well mixed. Spread into the prepared pan.',
      'Bake the cake until golden brown and a toothpick inserted in the center comes out clean, about 30 minutes, rotating the pan halfway through. Let cool in the pan for 30 minutes. Using a fork, poke holes in the top and all the way through the cake.',
      'Bring 1 cup water to a boil, pour over the gelatin in a small bowl and stir until completely dissolved, about 2 minutes. Stir in 1/2 cup cold water. Pour the mixture evenly over the cooled cake. Refrigerate for 2 hours. Put a large bowl (for whipping the cream) in the refrigerator.',
      'For the sweetened berries: While the cake chills, hull and quarter the strawberries. Toss with the granulated sugar in a medium bowl, and set aside until soft and juicy, about 1 hour.',
      'For the topping: Remove the cake from the refrigerator. Whip the cream with the sugar and vanilla in the chilled bowl until fluffy. Spread it over the cake, slice the cake and serve with the strawberries.',
    ],
  },
  {
    name: 'Fruit Pizza',
    description:
      'Use any combination of ripe summer fruit you can find for this fresh fruit "pizza." The crust is one big sugar cookie that can be baked a day ahead and kept well wrapped until you\'re ready to spread it with the cream-cheese topping (which you can also make a day ahead). The dough could double as your go-to sugar cookie recipe too--just form it into balls and bake at 350 degrees F for a soft, chewy treat.',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/07/08/FNK_Sugar-Cookie-Fruit-Pizza_s12x9.jpg.rend.hgtvcom.826.620.suffix/1594232618992.jpeg',
    ingredients: [
      '3/4 cup granulated sugar',
      '1 stick (8 tablespoons) unsalted butter at room temperature',
      '1 teaspoon freshly grated lemon zest',
      '1 teaspoon pure vanilla extract',
      '1 large egg',
      "1 3/4 cups all-purpose flour (see Cook's Note)",
      '1 1/2 teaspoons baking powder',
      '1/4 teaspoon fine salt',
      '8 ounces cream cheese, at room temperature',
      '4 tablespoons unsalted butter, at room temperature',
      '1 tablespoon honey',
      '1 teaspoon pure vanilla extrac',
      "2 cups confectioners' sugar, sifted, plus more for dusting",
      '4 to 5 cups mixed fresh summer fruit, such as whole raspberries, blackberries and blueberries, quartered strawberries and sliced stone fruit',
    ],
    instructions: [
      'For the sugar cookie crust: Preheat the oven to 350 degrees F.',
      'Beat the granulated sugar and butter in a large bowl with an electric mixer on high speed until light and fluffy, 1 to 2 minutes. Add the lemon zest, vanilla and egg and beat until incorporated. Add the flour, baking powder and salt and mix on low speed until just combined. Scrape the dough into a large (12-inch) nonstick skillet and press into an even layer to cover the entire bottom of the skillet. (If the dough becomes too soft to work with, pop the skillet in the refrigerator to chill for 10 minutes before proceeding.) Prick the dough all over with a fork, leaving a 1-inch border.',
      'Bake the crust until golden and the edges are set, 22 to 24 minutes. Let cool in the skillet on a wire rack, then loosen the edges of the crust with a butter knife and invert onto a platter or cutting board to unmold. Invert again so the crust is right-side up. (To make ahead, let cool, then wrap well in plastic wrap and keep at room temperature.) ',
      "For the topping: Clean out the mixer bowl and add the cream cheese and butter. Beat on medium speed until light and smooth, about 1 minute. Add the honey and vanilla and beat to combine. Add the confectioner's sugar and beat on low speed until just combined. Increase the speed to high and beat until fluffy, 1 to 2 minutes. Refrigerate the topping, covered, until ready to use (stir again until smooth). ",
      "To assemble the fruit pizza, spread the cream cheese topping on the crust in an even layer, leaving a border for the crust. Top with the fruit in a random pattern. Dust with more confectioner's sugar if using just before serving, then cut into slices. ",
    ],
  },
  {
    name: 'Peanut Butter-Chocolate No-Bake Cookies',
    description:
      'These simple drop cookies give your oven a break: they start on the stovetop – where all the ingredients are mixed – and then finish and set in the fridge. They are also perfect for making with kids: all of the ingredients are pantry staples, clean-up is easy and there are no raw eggs. If your household has allergy concerns, then swap the peanut butter out with your favorite smooth nut or seed butter like almond, cashew or sunflower butter. Refrigerate the cookies in an airtight container and have chilled treats for after school or as special snacks. This recipe also makes a generous amount of cookies (5 dozen!) so keep it in mind the next time you need a giftable sweet.',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/7/1/CL9455_no-bake-cookies_s4x3.jpg.rend.hgtvcom.231.174.suffix/1371597379025.jpeg',
    ingredients: [
      '2 cups sugar',
      '1/2 cup milk',
      '1 stick (8 tablespoons) unsalted butter',
      '1/4 cup unsweetened cocoa powder',
      '3 cups old-fashioned rolled oats',
      '1 cup smooth peanut butter',
      '1 tablespoon pure vanilla extract',
      'Large pinch kosher salt',
    ],
    instructions: [
      'Line a baking sheet with wax paper or parchment.',
      'Bring the sugar, milk, butter and cocoa to a boil in a medium saucepan over medium heat, stirring occasionally, then let boil for 1 minute. Remove from the heat. Add the oats, peanut butter, vanilla and salt, and stir to combine.',
      'Drop teaspoonfuls of the mixture onto the prepared baking sheet, and let sit at room temperature until cooled and hardened, about 30 minutes. Refrigerate in an airtight container for up to 3 days.',
    ],
  },
];

export default recipes;
