export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const recipes: Recipe[] = [
    {
        name: 'Stir-fry Udon',
        description: 'This quick stir-fry udon dish will put a meal on the table in less than 30 minutes!',
        image: 'https://choosingchia.com/jessh-jessh/uploads/2021/10/Yaki-Udon-Stir-Fry-9.jpg',
        ingredients: [
            '2 packs of frozen udon', 
            '3 bunches of bok choy',
            '1 head of broccoli',
            '1 block of medium firm tofu',
            '1 yellow onion',
            '3 stalks of green onion',
            '1 slice of ginger',
            '1 tablespoon of soy sauce',
            '2 tablespoons of oyster sauce',
            '1 teaspoon of ketchup',
            '1 teaspoon of sugar'
        ],
        instructions: [
            'Chop the onion into slices, and try not to cry!',
            'Wash the broccoli, bok choy, green onion until the water runs clear',
            'Bring a pot of water to a boil',
            'While the water is boiling, chop the vegetables into bite-sized pieces',
            'Heat up a pan with oil',
            'Sautee the onions until golden brown, and then add the vegetables',
            'Cook the vegetables to their desired softness',
            'Add the seasonings and add salt and pepper and sugar to taste',
            'Add the udon and pour a bit more soy sauce on top',
            'Plate it up and enjoy!'
        ]
    },
    {
        name: 'Blueberry Parfait',
        description: 'This blueberry parfait will satiate your morning cravings and leave you energized for the day! It is also great for an afternoon snack!',
        image: 'https://blueberry.org/wp-content/uploads/2020/09/bc-42-blueberry-breakfast-parfait.jpg',
        ingredients: [
            'Greek yogurt',
            'Frozen blueberries',
            'Granola of choice',
            "Honey (if you're feeling extra sweet)"],
        instructions: [
            'Scoop desired amount of yogurt into bowl',
            'In a separate bowl, microwave your desired amount of frozen blueberries for 20 seconds.',
            'Add your blueberries to your yogurt',
            'Pour the desired amount of granola onto your yogurt',
            'Drizzle a bit of honey on top for the aesthetics (optional)'
        ]
    },
    {
        name: 'Fruit smoothie',
        description: 'This smoothie can be put together in less than 10 minutes and will quench your thirst in seconds! The sweet and tangy flavors are refreshing at any time of day!',
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg',
        ingredients: [
            '1 frozen banana',
            '1 cup of frozen mango',
            '1 cup of frozen blueberries',
            '2 cups of soymilk'],
        instructions: [
            'Add the frozen fruit to the blender',
            'Add the milk to the blender',
            'Start blending on low speed. Slowly increase the speed until it reaches high',
            'Blend the smoothie until it is smooth and combined',
            'Pour your creation into a cup and enjoy!'
        ]
    }
];

export default recipes;
