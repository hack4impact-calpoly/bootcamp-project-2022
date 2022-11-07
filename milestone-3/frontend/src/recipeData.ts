export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    name: "Kimchi Bibim Guksu",
    description:
      "Got kimchi in the fridge! Try making this spicy, slightly sweet, savory and tangy cold noodle dish. Its simply made with kimchi and a few staple",
    image:
      "https://i.pinimg.com/564x/67/e9/7b/67e97b146b718e6ebdc18db68f7238d1.jpg",
    ingredients: [
      "8 - 10 ounce somyeon, 소면, (thin wheat noodles)",
      "1 cup thinly sliced kimchi preferably fully fermented",
      " 1/4 cup juice from kimchi use a little more soy sauce and vinegar if unavailable",
      "1 tablespoon gochujang (Korean red chili pepper paste)",
      "1 tablespoon soy sauce",
      "2 tablespoons rice vinegar or any other clear vinegar",
      "1 tablespoon sugar",
      "1 tablespoon corn syrup(or oligo syrup, 올리고당) use more sugar if unavailable",
      "1 tablespoon sesame oil",
      "2 teaspoons sesame seeds",
    ],
    instructions: [
      "Bring a medium pot of water to a boil while preparing the kimchi sauce.",
      " Add the noodles to the pot of boiling water. Cook the noodles according to the package instructions (3 – 4 minutes). Drain        quickly and shock in icy cold water to stop cooking. Drain and rinse in cold water again. Repeat until the noodles become cold. Drain well.",
      "Combine the noodles with the kimchi sauce, and toss everything until the noodles are evenly coated with the sauce. Taste and adjust the seasoning to taste by adding more soy sauce, sugar and/or vinegar, if necessary. Garnish with your choice of the optional vegetables and/or the boiled egg and serve cold.",
    ],
  },
  {
    name: "Quinoa Fried Rice",
    description:
      " A healthy quinoa fried rice that is vegan, gluten free and oil free. Made with wholesome, plant based ingredients, this is a nourishing dish you can enjoy for lunch or dinner",
    image: "https://veggiekinsblog.com/wp-content/uploads/2019/06/IMG_3641.jpg",
    ingredients: [
      "1-2 cups cooked quinoa",
      "3/4 cups carrots, very finely diced",
      "3/4 cups broccoli florets, chopped",
      "1/2 cup corn (frozen or fresh)",
      "2–3 tbsp tamari, liquid aminos, coconut aminos or othergluten-free soy sauce alternative",
      "2 cloves garlic, minced",
      "pepper, to taste",
    ],
    instructions: [
        "In a large pan or skillet on medium high heat, pan-fry garlic until fragrant (about 1-2 minutes)",
        "Add veggies, and continue to cook until veggies are bright in colour and slightly tender, about 3-5 more minutes.", 
        "Next, add cooked quinoa, and break up any clumps with a spatula.",
        "Add tamari, and stir to cook until well incorporated. Taste, and add additional tamari and pepper as needed."
    ],
  },
  {
    name: "Squid Stirfry",
    description:
      "Spicy squid stir fry featuring tender juicy squid stir fried with onion and peppers in a super rich savory spicy sauce that’s loaded with aromatics. Serve this over steamed rice for a colorful delicious dinner!",
    image:
      "https://omnivorescookbook.com/wp-content/uploads/2022/04/220331_Spicy-Squid-Stir-Fry_4.jpg",
    ingredients: [
        "1 lb (450 g) squid tubes (or rings)",
        "2 teaspoons Shaoxing wine",
        "1/8 teaspoon salt",
        "1/3 cup water",
        "1 tablespoon oyster sauce",
        "1 tablespoon doubanjiang (or 1 tablespoon oyster sauce for a less spicy dish)",
        "2 teaspoons light soy sauce",
        "2 teaspoons toasted white sesame seeds",
        "2 teaspoons cornstarch",
        "1 teaspoon cumin",
        "1 teaspoon sugar",
        "1/2 teaspoon chili flakes",
        "2 tablespoons peanut oil (or vegetable oil)",
        "2 cloves garlic , minced",
        "1 thumb ginger , sliced",
        "1 small red onion , sliced into bite-size pieces",
        "1 bell pepper (or 2 to 3 hot peppers, sliced into bite-size pieces)"
    ],
    instructions: [
        "If using squid tube: Use a knife or a pair of scissors to cut along one side of the tube. Open the tube to lay it flat, inner side up. Score the inner flesh of the tube, first parallel to the edge, then rotate the tube and slice to create an “X” shaped pattern, spaced about 1/4” (4 mm) in between. Cut the tube in half lengthwise, then slice into 1” (2.5 cm) strips.",
        "To marinate the squid: add the squid into a big bowl along with the Shaoxing wine and salt. Stir to mix well and set aside while preparing the rest of the ingredients.",
        "To make the sauce: Combine the sauce ingredients in a medium-sized bowl and stir to mix well.",
        "To cook the stir fry: Heat 1 tablespoon of oil in a skillet over medium-high heat until hot. Add the squid. Let cook for 1 minute, until the bottom turns slightly golden. Stir and cook until the squid just curls up. Transfer the squid to a big plate and set aside.",
        "Add the remaining 1 tablespoon oil, garlic, and ginger. Stir a few times to release the fragrance.",
        "Add the onion and bell pepper. Cook and stir fry for 1 minute. Add back the squid. Stir the sauce again to dissolve the cornstarch completely, then pour it into the pan. Cook and stir until the sauce is thickened, 1 minute or so. Transfer everything to a big plate. Serve hot as a main dish."
    ],
  },
];

export default recipes;
