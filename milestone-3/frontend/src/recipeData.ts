export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {name: "Fudgy Brownies", 
    description: "These are the most fudgy brownies you will ever make. Filled with chocolate chunks, these brownies will satisfy anyone who loves all things chocolate.",
    image: "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*",
    ingredients: ["8 oz good-quality chocolate, semi-sweet",
    "12 tablespoons butter, melted", 
    "1 1/4 cups sugar",
    "2 eggs",
    "2 teaspoons vanilla extract",
    "3/4 cup all-purpose flour",
    "1/4 cup cocoa powder",
    "1 teaspoon salt" ],
    instructions: ["Preheat the oven to 350°F (180°C). Line an 8-inch (20 cm) square baking dish with parchment paper.",
    "Chop the chocolate into chunks. Melt half of the chocolate in the microwave in 20-second intervals, saving the other half for later.",
    "In a large bowl, mix the butter and sugar with an electric hand mixer, then beat in the eggs and vanilla for 1-2 minutes, until the mixture becomes fluffy and light in color.",
    "Whisk in the melted chocolate (make sure it's not too hot or else the eggs will cook), then sift in the flour, cocoa powder, and salt. Fold to incorporate the dry ingredients, being careful not to overmix as this will cause the brownies to be more cake-like in texture.", 
    "Fold in the chocolate chunks, then transfer the batter to the prepared baking dish.",
    "Bake for 20-25 minutes, depending on how fudgy you like your brownies, then cool completely." ]
    },
    {name: "Chocolate Chip Cookies",
    description: "Perhaps the best classic chocolate chip cookie recipe you will find. This recipe includes a couple of tips and tricks to take your homemade cookies to the next level.",
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg",
    ingredients: [
    "1/2 cup granulated sugar",
    "3/4 cup brown sugar, packed",
    "1 teaspoon salt",
    "1/2 cup unsalted butter, melted ",
    "1 egg",
    "1 teaspoon vanilla extract",
    "1 1/4 cups all-purpose flour",
    "1/2 teaspoon baking soda",
    "4 oz milk or semi-sweet chocolate chunks",
    "4 oz dark chocolate chunk, or your preference"
    ],
    instructions: [
    "In a large bowl, whisk together the sugars, salt, and butter until a paste forms with no lumps.",
    "Whisk in the egg and vanilla, beating until light ribbons fall off the whisk and remain for a short while before falling back into the mixture.",
    "Sift in the flour and baking soda, then fold the mixture with a spatula (Be careful not to overmix, which would cause the gluten in the flour to toughen resulting in cakier cookies).",
    "Fold in the chocolate chunks, then chill the dough for at least 30 minutes. For a more intense toffee-like flavor and deeper color, chill the dough overnight. The longer the dough rests, the more complex its flavor will be.",
    "Preheat oven to 350°F (180°C). Line a baking sheet with parchment paper.",
    "Scoop the dough with an ice-cream scoop onto a parchment paper-lined baking sheet, leaving at least 4 inches (10 cm) of space between cookies and 2 inches (5 cm) of space from the edges of the pan so that the cookies can spread evenly.",
    "Bake for 12-15 minutes, or until the edges have started to barely brown.",
    "Cool completely before serving."
    ]
    },
    {name: "Cinnamon Rolls",
    description: "Perfect for breakfast, a snack, or a warm dessert. These cinnamon rolls will leave your tastebuds wanting more.",
    image: "https://img.buzzfeed.com/video-api-prod/assets/9d589367531e4c12a4937e30e521c865/fbthumb.jpg?resize=1200:*",
    ingredients: [
    "Dough:",
    "2 cups whole milk, warm to the touch",
    "1/2 cup sugar",
    "8 tablespoons unsalted butter, melted",
    "2 1/4 teaspoons active dry yeast",
    "5 cups all-purpose flour, divided",
    "1 teaspoon baking powder",
    "2 teaspoons kosher salt",
    "Filling:",
    "3/4 cup light brown sugar",
    "12 tablespoons unsalted butter, softened",
    "2 tablespoons ground cinnamon",
    "Frosting:",
    "4 oz cream cheese, softened and cubed",
    "2 tablespoons unsalted butter, melted",
    "4 tablespoons milk",
    "1 teaspoon vanilla extract",
    "1 cup powdered sugar"
    ],
    instructions: [
    "Make the dough: In a large bowl, whisk together the warm milk, sugar, and melted butter. The mixture should be just warm, registering between 100-110˚F (37-43˚C). If any warmer, allow to cool slightly.",
    "Sprinkle the yeast evenly over the milk mixture, stir, and let sit in a warm place for about 10 minutes until the yeast has bloomed.",
    "Add 4 cups (500 g) of flour to the milk mixture and stir with a wooden spoon until just combined.",
    "Cover the bowl with a kitchen towel or plastic wrap and let rise in a warm place for 1 hour, until nearly doubled in size.",
    "Generously butter 2 9-inch (23 cm) round baking pans and set aside.",
    "Make the filling: In a medium bowl, combine the brown sugar, butter, and cinnamon. Mix well, then set aside.",
    "Remove the plastic wrap from the dough and add the remaining cup of flour, baking powder, and salt. Stir well, then turn out onto a clean surface. Leave a bit of flour nearby to use as needed, but try not to incorporate too much.",
    "Knead the dough for at least 10 minutes, adding more flour as necessary, until the dough just loses its stickiness and does not stick to the surface or your hands. The dough should be very smooth and spring back when poked.",
    "Roll the dough out into a large rectangle, about ½-inch (1 cm) thick. Fix the corners with a bench scraper or a spatula to make sure they are sharp and even.",
    "Spread the filling evenly over the dough.",
    "Starting from one short end, roll up the dough into a log and pinch the seam closed. Place seam-side down. Trim any uneven ends.",
    "Using unflavored dental floss, cut the log into evenly pieces, about 1½ inches (8cm) thick. Place the cinnamon rolls in the prepared pans, 1 in the center and about 5 around the sides. Cover with a towel and let rise in a warm place for 35-45 minutes, until expanded by about half of their original volume. If you’re saving the cinnamon rolls for later, cover with plastic wrap and freeze for up 3 months.",
    "Preheat the oven to 350˚F (180˚C).",
    "Bake the cinnamon rolls for 25-30 minutes, until golden brown.",
    "While the cinnamon rolls are baking, make the frosting: In a medium bowl, whisk together the cream cheese, melted butter, milk, and vanilla extract until smooth. Gradually add the powdered sugar and whisk until homogenous and runny.",
    "When the cinnamon rolls are finished, let cool for about 10 minutes.",
    "Drizzle the frosting over the cinnamon rolls, using the back of a spoon to spread if desired."
    ]
    }
]

export default recipes;