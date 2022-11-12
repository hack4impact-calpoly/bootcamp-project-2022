import '../recipe.css'
import recipes from '../recipeData.json';
import { useParams } from "react-router-dom";

/*
<ul>
        {groceries.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
*/

function RecipePage() {
    let param = useParams();
    console.log(param.name);
    
    return (
        <body>
            <div className="center-image">
            <img src="images/cookie.jpg" />
            </div>
            <h2>White Chocolate Matcha Cookies</h2>

            <h3>Ingredients</h3>

            <ul>
                <li>1⅓ cup (167 g) all purpose flour</li>
                <li>2 tablespoon (16 g) cornstarch</li>
                <li>1 tablespoon (15 g) matcha powder</li>
                <li>½ teaspoon (2 g) baking soda</li>
                <li>½ cup (114 g) salted butter - melted</li>
                <li>⅔ cup (133 g) granulated sugar</li>
                <li>½ cup (110 g) light brown sugar - packed</li>
                <li>1 large egg - room temperature</li>
                <li>1½ teaspoon (7 ml) pure vanilla extract</li>
                <li>¾ cup (177 g) white chocolate chips</li>
            </ul>

            <h3>Preparation + Instructions</h3>

            <ol>
                <li>In a medium bowl, whisk together flour, cornstarch, baking soda, and matcha until well combined. Set aside.</li>
                <li>In a large bowl, whisk together melted butter, sugars, egg, and vanilla until smooth.</li>
                <li>Gradually mix dry ingredients into wet ingredients until combined into a dough. Fold in chocolate chips.</li>
                <li>Cover bowl with plastic wrap and place in the refrigerator to chill at least 30 minutes.</li>
                <li>When ready to bake, preheat oven to 350°F and line a large baking sheet with a silicone baking liner or parchment paper.</li>
                <li>Use a small cookie scoop to scoop dough out onto lined cookie sheet, 2 inches apart.</li>
                <li>Bake in preheated oven for 10-12 minutes, or until edges of cookies are golden brown.</li>
            </ol>

        </body>
    )
}

export default RecipePage;

