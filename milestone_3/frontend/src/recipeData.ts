export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

const recipes: Recipe[] = [
  {name: "Chocolate Chip Cookies!", description: "A mouthwatering classic. Filled with pockets of chocolate throughout, will be sure to impress", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIP1jzvw5Q8a2ZsDED6TJBvOygkEDalsFHQ&usqp=CAU", ingredients: ["2 cups white sugar,  ", "1 ¼ cups margarine, softened, ", "2 large eggs, ", "2 teaspoons vanilla extract, ", "2 cups all-purpose flour, ", "3/4 cup unsweetened cocoa powder, ", "1 teaspoon baking soda, ", "1/8 teaspoon salt, ", "1 cup chopped walnuts "], instructions: ["Preheat the oven to 350 degrees F (175 degrees C), ", "Cream sugar and margarine in a large bowl until light and fluffy. Beat in eggs, one at a time, then stir in vanilla, ", "Combine flour, cocoa, baking soda, and salt in a separate bowl. Add to the creamed mixture and mix until just blended. Stir in walnuts. Drop spoonfuls of dough 2 inches apart onto ungreased cookie sheets, ", "Bake in the preheated oven until edges are set and centers are soft, 8 to 10 minutes. Let sit briefly before transferring to wire racks to cool completely"]},
	{name: "Lemon Cookies!", description: "These soft iced lemon cookies have lemon juice and lemon zest stirred in to the cookie dough, making these a hit with everyone.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8H73WDslZnm0lTw87xWIvgisT1Jx8x2u-5A&usqp=CAU", ingredients: ["1/2 cup Unsalted Butter, ","3/4 cup Granulated sugar, ","2 tablespoons Light brown sugar, ", "1 Egg, ", "1 tablespoon Lemon extract, ", "2 tablespoons Lemon juice and zest, ", "1 tablespoon Honey, ", "Yellow food coloring (optional), ", "2 cupsw All purpose flour, ", "2 teaspoons Cornstarch, ", "Pinch of Salt, ", "1 teaspoon Baking Soda"], instructions: ["Cream together the butter, sugars, egg, and lemon extract. Add in the lemon zest, honey, and optional food coloring, followed by the dry ingredients, ", "Using a 1/4 cup measure, scoop the cookie dough into balls and chill for at least 3 hours. Once the cookie dough has chilled, bake until the edges have set and the tops are just set, even if slightly undercooked, pale, and glossy in the center, ", "Let these lemon cookies cool for 10 minutes on the baking sheet, then dust with confectioners’ sugar, if desired"]},
	{name: "Red Velvet Cookies!", description: "If you love red velvet cake, this easy one-bowl red velvet cookie recipe has your name written all over it. The cookies have just the right balance of crispy edges, soft middles, and big chocolate flavor, with the prettiest shade of red in the land and crunchy sparkle from sanding sugar.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCGDoJlE1f95i2j2Yu-vaoj2ui-8TADaarg&usqp=CAU", ingredients: ["1½ cups (packed; 300 g) light brown sugar, ", "1 cup (2 sticks) unsalted butter, melted, slightly cooled, ", "2 chilled large egg yolks, ", "1½ tsp. vanilla extract, ", "⅔ cup (54 g) unsweetened Dutch-process cocoa powder, ", "1 tsp. baking soda, ", "1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt, ", "2 tsp. red gel food coloring, ", "2 cups (250 g) all-purpose flour, ", "½ cup red sanding sugar (preferably Betty Crocker; about 2 oz.)"], instructions: ["Place racks in upper and lower thirds of oven; preheat to 350°. Vigorously whisk 1½ cups (packed; 300 g) light brown sugar and 1 cup (2 sticks) unsalted butter, melted, slightly cooled, in a large bowl until lightened in color and smooth and glossy, about 30 seconds. Whisk in 2 chilled large egg yolks and 1½ tsp. vanilla extract. Adding one at a time and whisking after each addition, sprinkle in ⅔ cup (54 g) unsweetened Dutch-process cocoa powder, 1 tsp. baking soda, and 1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt. Whisk in 2 tsp. red gel food coloring, then add 2 cups (250 g) all-purpose flour and fold in with a rubber spatula just until the last streak of flour disappears (be careful not to overmix), ", "Pour ½ cup red sanding sugar (preferably Betty Crocker; about 2 oz.) into a small shallow bowl. Divide dough into 16 equal portions (about 3 Tbsp. or 55 g each) and roll each portion into a ball. Roll each ball in sanding sugar to evenly coat, then divide between 2 parchment-lined baking sheets, spacing 2 apart, ", "Bake cookies, rotating baking sheets top to bottom and front to back after 6 minutes, until puffed up and tops begin to crack, 12–14 minutes. Let cookies cool on baking sheets 5 minutes (they will collapse as they cool), then transfer to wire racks and let cool completely. Do ahead: Cookies can be baked 3 days ahead. Store airtight at room temperature, or freeze in a resealable plastic bag for up to 1 month"]}
];


export default recipes;

