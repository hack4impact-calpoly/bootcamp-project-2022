import sushiImg from './image/sushi.jpg'
import pizzaImg from './image/pizza.jpg'
import airFryerImg from './image/Air-Fryer-Chicken-Toast.jpg'

export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }



export const recipes=[
    {   id:'1',
        name: 'Spicy Crab Roll',
        description: 'Spicy Crab Roll is a popular Japanese sushi roll – creamy, satisfying, and fiery spicy.',
        image: sushiImg,
        ingredients: ["The Rice", "1 Teaspoon of The Spice", "The Sushi Mat" ],
        instructions: ["Getting the rice right is the trickiest part of making sushi. If you end up with enough rice for an extra roll, make an experimental one using whatever you’ve got in your fridge: leftover meat, herbs, etc.",
                       "For ground cayenne, we recommend starting with 1/4 teaspoon, tasting the mixture, and adding more if you like.",
                       "Though you can roll your sushi with a sheet of plastic wrap, we find reusable bamboo mats much easier to work with."
                        ]
    },
    {
        id:'2',
        name: 'Seafood Pizza',
        description: 'One of the most popular seafood pizzas invented in Italy is Frutti di Mare. Its toppings commonly serve scampi, mussels, or squid on top of a tomato sauce with no cheese.',
        image:pizzaImg,
        ingredients: ["1 Package Active Dry Yeast and 1 Gold Medal™ All-purpose Flour", "1 Teaspoon Vegetable Oil", "12 Uncooked Medium Fresh Shrimp, in Shells" ],
        instructions: ["In large bowl, dissolve yeast in warm water. Stir in half of the flour, the oil, salt and sugar. Stir in enough remaining flour to make dough easy enough to handle.",
                       "Turn dough onto lightly floured surface; knead about 10 minutes or until smooth and elastic. Place dough in large bowl greased with shortening. Cover and let rise in warm place 20 minutes.",
                       "Cover and refrigerate at least 2 hours but no longer than 48 hours, deflating dough occasionally. Heat oven to 500°F. Peel shrimp, leaving tails intact. Spread pizza sauce over dough to within 1/2 inch of edge."
                        ]
    },
    {
        id:'3',
        name: 'Air Fryer Chicken Toast',
        description: 'Tender and Juicy Air Fryer Chicken is golden crispy outside and moist and delicate on the inside. This is bursting with flavor and so good!',
        image: airFryerImg,
        ingredients: ["Boneless Skinless Chicken Breast", "Brine Solution", "Baba Ghanoush" ],
        instructions: ["The Air Fryer Chicken Breasts already comes out super juicy so there is really no need to brine beforehand.",
                       "You just need to make sure the chicken reaches an internal temperature of 165° Fahrenheit.",
                       "Place the chicken breasts and let sit for at least 20 minutes.",
                       "Technically, since Baba Ganoush has salt already, you don’t even need to season the chicken with salt and pepper first!"
                        ]
    },
] 