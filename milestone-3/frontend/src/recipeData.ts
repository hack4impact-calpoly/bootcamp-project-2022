export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

 const recipes: Recipe[] = [
  {name: "Chicken Adobo", 
  description: "Chicken Adobo is a tangy chicken stew marinated in soy sauce and spices, pan-fried, and stewed.", 
  image: "https://www.sandravalvassori.com/wp-content/uploads/2022/05/Adobo-chicken-9894-2.jpg",
  ingredients: ["Boneless chicken thighs", "Soy sauce", "White Vinegar", "Onion", "Garlic", "Peppercorn", "Brown Sugar", "Bay Leaves"],
  instructions: ["Combine Chicken and Marinade ingredients in a bowl. Marinate for at least 20 minutes, or up to overnight.",
    "Heat 1 tbsp oil in a skillet over high heat. Remove chicken from marinade (reserve marinade) and place in the pan. Sear both sides until browned – about 1 minute on each side. Do not cook the chicken all the way through.",
    "Remove chicken skillet and set aside.", 
    "Heat the remaining oil in skillet. Add garlic and onion, cook 1 1/2 minutes.",
    "Add the reserved marinade, water, sugar and black pepper. Bring it to a simmer then turn heat down to medium high. Simmer 5 minutes.",
    "Add chicken smooth side down. Simmer uncovered for 20 to 25 minutes (no need to stir), turning chicken at around 15 minutes, until the sauce reduces down to a thick jam-like syrup.", 
    "If the sauce isn't thick enough, remove chicken onto a plate and let the sauce simmer by itself - it will thicken much quicker - then return chicken to the skillet to coat in the glaze.",
    "Coat chicken in glaze then serve over rice. Pictured in post as a healthy dinner plate (415 calories) with cauliflower rice and Ginger Smashed Cucumbers."]
  },
   {name: "Beef and Pork Lumpia",
    description: "Beef and Pork Lumpia is a type of crunchy egg roll filled with ground meat and various seasoned vegetables.",
    image: "https://img.buzzfeed.com/video-api-prod/assets/cca4d5ea049a4ba08f5e26a0272dbe25/BeautyShotbeautyTemplate.jpg",
    ingredients: ["1 medium onion, very finely chopped", "2 medium carrots, grated on the large holes of a box grater", "4 scallions, white and light green parts, very finely chopped", "4 garlic cloves, finely grated", "1 cup cabbage, very thinly sliced", "2 large eggs (1 whole, 1 white and yolk separated)", "4 teaspoons kosher salt", "1 teaspoon freshly ground black pepper", "1 pound ground beef", "1 pound ground pork", "2 (11-ounce) packages lumpia wrapper or spring roll shells", "Canola oil, for frying"],
    instructions: ["In a large bowl, combine the onion, carrots, scallions, garlic, cabbage, 1 egg, 1 egg yolk, salt, and pepper until well blended. Add the beef and pork and mix with your hands until is evenly distributed.", "In a small bowl, whisk a splash of water into the remaining egg white. Working one at a time, on a work surface, place a lumpia wrapper with 1 corner facing you. Place 1 heaping tablespoon of the filling in the center of the wrapper and shape into a thin horizontal 5-inch-long log. Dip your fingers in the remaining egg white mixture and lightly brush the edges of the wrapper. Roll the bottom corner up and snugly over the filling, then tuck under the filling. Fold the left and right corners tightly over the filling to enclose. Crease the wrapper with your fingers, then continue to roll the bundle away from you. Both sides should be as close to sealed as possible; use a little egg wash to seal, as necessary.", "In a large nonstick pan, fill with oil to a depth of 1 inch. It should cover the lumpia at least halfway when frying; adjust the amount if needed. Heat the pan over medium-high heat. You’ll know the oil is hot enough if you place the tip of lumpia into the oil and it bubbles immediately. Cook the lumpia for 2 to 3 minutes per side, until deep golden brown and crisp. Transfer to a paper towel-lined wire rack. You can serve whole or cut in half. Serve with the sauce alongside."]},
    {name: "Chicken Sotanghon",
    description: "Chicken Sotanghon is the Filipino chicken noodle soup made with vegetables, rice noodles, and flavorful fish sauce.",
    image: "https://salu-salo.com/wp-content/uploads/2014/06/Chicken-Sotanghon-Soup-Bean-Thread-Noodle-Soup-3.jpg",
    ingredients: ["1 tablespoon canola oil", "1 onion, peeled and sliced thinly", "4 cloves garlic, peeled and minced", "1 thumb-size ginger, peeled and julienned", "1 pound chicken wings, tips removed and cut into 2-inch pieces", "1 cup Chinese celery (kinchay), chopped", "2 tablespoons fish sauce", "7 cups chicken broth", "1 teaspoon atchuete powder", "1 large carrot, peeled and julienned", "salt and pepper to taste", "1/2 head napa cabbage, shredded", "3 hardboiled eggs, peeled and halved", "fried garlic bits", "green onions, chopped", "4 ounces (about 2 coils) sotanghon noodles"],
    instructions: ["In a large pot over medium heat, heat oil. Add onions, garlic, and ginger and cook until softened.", "Add chicken and cook, stirring regularly, until lightly browned and juices run clear.", "Add celery and cook, stirring regularly, for about 1 to 2 minutes or until softened.", "Add fish sauce and cook for about 1 to 2 minutes.", "Add chicken broth and bring to a boil, skimming any scum that floats on top. Lower heat, cover, and continue to cook until chicken is cooked through.", "In a bowl, combine about 1/2 cup of the hot broth and atsuete powder. Stir until atsuete is dissolved. Add atsuete water to pot.", "Add carrots and cook for about 1 to 2 minutes or until half-done. Season with salt and pepper to taste.", "Add sotanghon noodles and push down into broth to soften, stirring gently to separate.", "Ladle soup into bowls and top with boiled eggs, fried garlic bits and green onions. Serve hot.", "When noodles have slightly softened, add cabbage and cook for another 2 to 3 minutes or until noodles are cooked and vegetables are tender yet crisp."]}];

 export default recipes;