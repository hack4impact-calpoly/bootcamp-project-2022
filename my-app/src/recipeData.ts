export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {
        name: 'Chicken Burrito',
        description: "This chicken burrito recipe is simple and easy to prepare for a quick bite in a hurry!",
        image: "https://thegirlonbloor.com/wp-content/uploads/2015/03/Pulled-Chicken-Burrito-2.jpg",
        ingredients:[
            "1 tortilla",
            "1/4 cup of cheese",
            "1/4 cup of beans",
            "1 cup of chicken",
            "1/4 cup of rice",
            "taco seasoning to taste"
        ],
        instructions:[
            "First coat the chicken with taco seasoning and then cook on pan at medium heat until tender.",
            "Heat up the toritlla until lightly warm.",
            "Start by placing rice onto the tortilla, followed by beans and chicken.",
            "Sprinkle cheese in the end and then roll up the burrito.",
            "Place rolled burrito back onto the pan and cook until slightly crispy and cheese has melted."
        ]
    },
    {
        name: "Grilled Cheese Sandwich",
        description: "This 5 minute recipe is perfect for someone on the go!",
        image: "https://static01.nyt.com/images/2021/08/30/dining/as-grilled-cheese-sandwich-on-the-grill/as-grilled-cheese-sandwich-on-the-grill-articleLarge.jpg",
        ingredients: [
            "2 slices of bread",
            "1/2 cup of cheese",
            "1/8 cup of butter"
        ],
        instructions: [
            "First coat the pan with a small layer of butter.",
            "Place cheese on one slice of bread and then cover with the other slice.",
            "Spread butter over both outer sides of the sandwich.",
            "Place the sandwich on the pan and cook on medium heat. Flip once the side is cooked until golden brown.",
            "Once both sides are crispy and golden brown, remove from pan and enjoy!"
        ]
    },
    {
        name: 'Apple Pie',
        description: 'Traditional Apple Pie recipe best served with a scoop of vanilla ice cream!',
        image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Apple-Pie_EXPS_MRRA22_6086_E11_03_1b_v3.jpg',
        ingredients: [
            "2 cups all purpose flour",
            "2 cups sugar",
            "4 apples",
            "2 sticks butter",
            "1/8 cold water",
            "2 teaspoons cinnamon",
            "1 tablespoon lime juice",
            "1 egg yolk"
        ],
        instructions: [
            "Slowly combine flour, butter, and cold water, making sure to keep a hard consistency to the dough. Once fully combine, refridgerate for an hour.",
            "Chop up the apples into slices and mix in cinnamon, sugar, and lime juice.",
            "Remove dough from the fridge and cut in half. Roll out both halves into equal sized circles.",
            "Cover all sides of baking tray with butter and then layer one of the circles into the tray, covering the entire base.",
            "Fill the baking tray with the apple mixture and cover with the other half of dough.",
            "Use the egg yolk to coat the top of the pie with egg wash, and cut small slits into the middle of the pie.",
            "Bake pie for 45 minutes at 350 degrees or until golden brown.",
            "Remove pie from oven and let it cool for 15 minutes before serving!"
        ]
    }
];

export default recipes;