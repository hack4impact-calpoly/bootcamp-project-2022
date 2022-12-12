export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

const recipes: Recipe[] = [
  {name: "Cake",description:"The best cake for any party",image:"https://preppykitchen.com/wp-content/uploads/2021/07/Ice-Cream-Cake-Blog-1.jpg",ingredients: ["Powdered Sugar","Chocalte Cake - yes you need a cake beforehand","Vanilla"],instructions:["Line an 8-inch cake pan with plastic wrap. Transfer all the ice cream to your lined cake pan and then cover with another layer of plastic. Press down into a flat layer and freeze.","Prepare and cool an 8-inch chocolate cake and cover the top with the chocolate fudge sauce using an offset spatula.","emove the ice cream layer from the freezer, unwrap it, and place it on top of the fudge. Cover the whole thing in plastic and place in the freezer while you make the whipped cream.","Combine cold whipping cream, sugar, and vanilla and mix starting on low. Gradually increase speed to high and mix until very soft peaks form. Finish off by whisking the whipped cream by hand until the peaks firm up."]},
  {name: "Cookies",description:"Chocolate chip cookies are the best",image:"https://www.allrecipes.com/thmb/PCJHDHG31St-cUNQcnQIn8QyO44=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/10813-best-chocolate-chip-cookies-mfs-step-7-148-52cdaefcd6e04707863288ded8451075.jpg",ingredients: ["1 Cup butter, softened","1 Cup packed brown sugar","2 eggs","2 teaspoons vanilla extract","1 teaspoon baking soda","2 teaspoons hot water","1/2 teaspoon salt","3 cups all-purpose flour","2 cups semisweet chocoalate chips","1 cup chopped walnuts"],instructions:["Preheat the oven to 350 degrees F (175 degrees C).","Beat butter, white sugar, and brown sugar with an electric mixer in a large bowl until smooth. Beat in eggs, one at a time, then stir in vanilla. Dissolve baking soda in hot water.","Add to batter along with salt. Stir in flour, chocolate chips, and walnuts.","Drop spoonfuls of dough 2 inches apart onto ungreased baking sheets.","Bake in the preheated oven until edges are nicely browned, about 10 minutes. Cool on the baking sheets briefly before removing to a wire rack to cool completely."]},
  {name: "Pancakes",description:"Can't go wrong withe pancakes",image:"https://www.allrecipes.com/thmb/O84MQ6KTV8LpOOUp2FfFHD-yJL8=/2000x2000/filters:no_upscale()/45396-easy-pancakes-mfs-36-b720f5b89f854d01b9d0e92661fa4c2d.jpg",ingredients: ["Flour","Baking Powder","Sugar","Salt","Milk","Butter","Egg"],instructions:["Sift the dry ingredients together.","Make a well, then add the wet ingredients. Stir to combine.","Scoop the batter onto a hot griddle or pan.","Cook for two to three minutes, then flip.","Continue cooking until brown on both sides"]}
];



export default recipes; // This will allow us to access this data anywhere!


 
 