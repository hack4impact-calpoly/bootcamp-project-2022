export interface Recipe {
    name: string;
    description: string;
    image1: string;
    image2: string;
    ingredients: string[];
    instructions: string[];
  }

const recipes: Recipe[] = [
	{name: "Caffè Latte",
    description: "The classic latte perfect for quick runs while feeling energized for your whole day! One of the most popular drinks for college students to get through a tough day!",
    image1: "./images/icedcafe.jpeg",
    image2: "./images/hotcafe.jpeg",
    ingredients: ["2 spoons instant coffee", "Optional: 1 spoon sweetener of choice (I use sugar and can adjust to your liking)", "Hot water (see Instructions for amount)", "Milk of choice (see Instructions for amount)", "Optional: Ice"],
    instructions: ["Iced:", "First, add the instant coffee to a heat resistant mug and start boiling your water", "Then, add your choice of sweetener along with the coffee", "When the water is hot, pour the hot water into the mug to about 1/3 of the way",
    "You could either stir with a spoon or be fancy and use a frother wand to make your coffee mix look frothy", "Grab your favorite cup and add ice, pour your choice of milk about 2/3 of the way", "Finally, grab the mug with your coffee and pour it over the milk to see a beautiful gradient!", "Stir and enjoy!",
    "Hot:", "First, add the instant coffee to a heat resistant mug and start boiling your water and heat up your milk of choice", "Then, add your choice of sweetener along with the coffee", "When the water is hot, pour the hot water into the mug to about 1/3 of the way",
    "You could either stir with a spoon or be fancy and use a frother wand to make your coffee mix look frothy", "Grab your warm/hot cup of milk, the mug with your coffee, and pour it over the milk", "Stir and enjoy!"]
    },
	{name: "Honey Cinnamon Latte",
    description: "This seasonal latte is perfect for a fall morning or afternoon to either kickstart your day or wind down while watching the leaves fall. It might even be better than a pumpkin spice latte..",
    image1: "./images/icedhoney.webp",
    image2: "./images/hothoney.webp",
    ingredients: ["2 spoons instant coffee", "Optional: 1 spoon sweetener of choice (I use sugar and can adjust to your liking)", "Hot water (see Instructions for amount)", "Milk of choice (see Instructions for amount)", "1-2 spoons of honey", "Dash of cinnamon (Adjust to your liking)", "Optional: Ice"],
    instructions: ["Iced:", "First, add the instant coffee to a heat resistant mug and start boiling your water", "Then, add your choice of sweetener along with the coffee", "Grab another mug and add honey and cinnamon", "When the water is hot, pour the hot water into the coffee mug to about 1/3 of the way", "Pour hot water to the cup for the syrup about 1/3 of the way", "Stir the syrup and make sure the honey is dissolved (Taste and adjust to your liking)",
    "You could either stir with a spoon or be fancy and use a frother wand to make your coffee mix look frothy", "Grab your favorite cup and pour the syrup", "Then get some ice and pour your choice of milk about 2/3 of the way", "Finally, grab the mug with your coffee and pour it over the milk", "Stir and enjoy!",
    "Hot:", "First, add the instant coffee to a heat resistant mug and start boiling your water and heat up your milk of choice", "Then, add your choice of sweetener along with the coffee", "Grab another mug and add honey and cinnamon", "When the water is hot, pour the hot water into the mug to about 1/3 of the way", "Pour hot water to the cup for the syrup about 1/3 of the way", "Stir the syrup and make sure the honey is dissolved (Taste and adjust to your liking)",
    "You could either stir with a spoon or be fancy and use a frother wand to make your coffee mix look frothy", "Pour the syrup into the warm/hot cup of milk and your coffee into the same mug", "Stir and enjoy!"], 
    },
	{name: "Matcha Latte",
    description: "This matcha latte is perfect for any who's not a fan for coffee or for any who just wants a break from the coffee jitters. It is such a versatile drink with so many ways to enjoy! ",
    image1: "./images/icedmatcha.jpeg",
    image2: "./images/hotmatcha.jpeg",
    ingredients: ["1 spoon of high garde ceremonial matcha (can adjust amount) The more vibrant greent the matcha, the better!", "Optional: 1 spoon sweetener of choice (I use maple syrup or honey and can adjust to your liking)", "Warm water (see Instructions for amount)", "Milk of choice (see Instructions for amount)", "Optional: Ice", "Optional: Fresh pureed strawberries, blueberries, or mangoes for aesthetic and elevating the taste! (Best for Iced)"],
    instructions: ["Iced:", "First, sift and add the matcha powder to a heat resistant mug and start boiling your water", "Then, add your choice of sweetener along with the matcha", "When the water is hot, let the water sit to about 80 degrees and then pour into the mug enough to cover the matcha (should be a dark green color)", "Use a frother wand or use a matcha whisk", "Grab your favorite cup and get some ice", "Pour your choice of milk about 2/3 of the way", 
    "Finally, grab the mug with your matcha and pour it over the milk", "Stir and enjoy!", "Hot:", "First, sift and add the matcha powder to a heat resistant mug and start boiling your water and heat up your milk of choice *Note: Sifting the matcha will eliminate clumps and will make the matcha smoother*", "Then, add your choice of sweetener along with the matcha", "When the water is hot, let the water sit to about 80 degrees and then pour into the mug enough to cover the matcha (should be a dark green color)",
    "Use a frother wand or use a matcha whisk", "Grab your favorite cup and pour your choice of milk about 2/3 of the way", "Finally, grab the mug with your matcha and pour it over the milk", "Stir and enjoy!"]
    } 
];

export default recipes; // This will allow us to access this data anywhere!