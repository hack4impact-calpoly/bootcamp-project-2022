export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    
  }

const recipeData: Recipe[]=[

    {
        name: "Minestrone Soup",
        description: "A hearty vegetarian Italian soup made of beans and pasta. It's sure to warm you up on a cold evening.",
        image:"https://fitfoodiefinds.com/wp-content/uploads/2017/01/minestrone-soupsq.jpg",
        ingredients: [
        "2 tbsp Extra-Virgin Olive Oil", 
        "diced white onion",
        "chopped carrots",
        "2 stalks of celery",
        "Sea Salt (as needed)",
        "Black Pepper (as needed)",
        "3 cloves of grated Garlic",
        "28 oz. diced tomatoes ",
        "1 1/2 cups of white or kidney beans",
        "4 cups of vegetable broth",
        "3/4 cup of small pasta- elbow and shell most suitable",
        "1/2 cup of chopped parsley",
        "Grated parmigiano reggiano (Optional)" 
        ],

        instructions: [
            "Heat the oil in a large pot over medium heat. Add the onion, carrots, celery, salt, and several grinds of black pepper, and cook, stirring occasionally, for 8 minutes, until the vegetables begin to soften.",
            "Rinse, drain, and cook your choice of beans",
            "Add the garlic, tomatoes, beans, and broth. Cover and simmer for 20 minutes.",
            "Stir in the pasta and cook, uncovered, for 10 more minutes, until the pasta is cooked through.",
            "Season to taste and serve with parsley and parmesan, if desired."

        ]
       
    },

    {
        name: "Neapolitan Pizza",
        description: "A favorite classic inspired by recipes from Naples- the birthplace of Pizza. Making it at home has never been easier!",
        image:"https://www.acouplecooks.com/wp-content/uploads/2018/09/Neapolitan-Pizza-0019.jpg",
        ingredients: [
            "500 grams Tipo 00 or all-purpose flour",
            "2 tsp of instant or active dry yeast",
            "1 tsp Kosher Salt",
            "1 1/3 cups of warm water ",
            "2 tbsp Olive Oil",
            "1/2 tsp dried oregano",
            "1 small clove of garlic",
            "15 oz. diced fire-roasted tomatoes",
            "3 oz of fresh mozzarella",
            "2 basil leaves"
        ],

        instructions: [
            "Combine the flour, salt, and yeast in a bowl or the bowl of your stand mixer. Stir to combine. Add the water and 1 tbsp olive oil and stir until a raggy dough forms. Turn the dough out onto a floured surface.",
            "Attach the dough hook to a stand mixer and start the mixer on medium-low speed, then allow the mixer to knead for 8 minutes.",
            "After the kneading is finished, divide the dough into 3 equal pieces. Using floured hands, gently shape each half into a boule (ball shape) by folding the dough under itself. Set each boule on a floured surface and dab the dough with a bit of olive oil to keep it moist. Cover all boules with a damp towel and allow them to rise until doubled in size, about 45 minutes to 1 hour.",
            "Transfer the dough to separate sealed containers, large enough for the dough to double in size again, and store in the refrigerator for 2 to 3 days.",
            "The day of serving, remove the dough from the containers, place it on a lightly floured surface covered with a towel, and allow it to come to room temperature before stretching, 30 to 45 minutes.",
            "Stretch the dough, making sure that it is not overworked. Use flour if dough is too sticky to work with. Shape it into whatever size and shape you desire.",
            "Cut the garlic into a few rough pieces (no need to mince it).",
            "Place the garlic, tomatoes, oregano, salt, and olive oil in a blender. Blend until fully combine.",
            "Preheat Oven to its highest possible temperature",
            "Slice mozzarella into desired slices",
            "Cover dough with sauce, and add the cheese",
            "Bake pizza for around 7 minutes (until the cheese melts). Add Basil, cut into slices, serve, and enjoy!"
        ]
    },
    {
        name: "Tiramisu",
        description: "A delightful dessert inspired from Venetia for the sweet cravings. <br> It's sure to cheer you up!",
        image:"https://www.sandravalvassori.com/wp-content/uploads/2022/04/Tiramisu-11484-728x971.jpg",
        ingredients: [
                    "1 1/2 cups of room temperature espresso coffee",
                    "3 separated large eggs",
                    "1/4 cup of sugar",
                    "250 grams of full-fat mascarpone cheese (cold)",
                    "24 ladyfingers biscuits (Savoiardi Biscuits)",
                    "2-3 tbsp of unsweetened cocoa powder"
        ],

        instructions: [
            "Make the coffee first so it has time to cool. Set it aside in a medium-sized bowl.",
            "In a stand mixer, or using a hand-held mixer, beat the egg yolks and sugar on medium-high speed until thick and creamy, 4 to 5 minutes.",
            "Add the mascarpone in two or three increments, and beat until just combined and smooth (don't overbeat- it is fine if some lumps will remain). Transfer mixture to a bowl, set aside.",
            "In a clean bowl, use clean whisks to beat the egg whites starting on low and increasing speed once foamy. Beat until stiff peaks form, about 2 to 3 minutes.",
            "Add 1/2 of the egg whites to the mascarpone mixture and gently fold through to incorporate. Repeat with remaining egg whites.",
            "Quickly dip one ladyfinger at a time in the coffee and place on the bottom of a 9×13-inch dish (11×9 will also work).",
            "Cover the layer of ladyfingers with half of the mascarpone cream, spreading evenly. Top with another layer of coffee-dipped ladyfingers, then spread with remaining mascarpone cream. Enjoy!",
            "Cover tightly, refrigerate for at least 6 hours, but preferably overnight. When ready to serve, dust with cocoa powder and serve chilled."
        ]
    }
]

export default recipeData;