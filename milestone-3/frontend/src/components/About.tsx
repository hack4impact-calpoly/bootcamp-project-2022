export default function About() {
  return (
    <main>
      <h1>Recipes</h1>
      <div className="flex-container">
        <div className="flex-content">
          <h2>
            <a href="recipe1.html">Recipe 1: Chorizo Pasta</a>
          </h2>
          <p>An easy pasta dish that is fun for all the family!</p>
          <img
            className="flex-image"
            alt="Delicious pasta"
            src="https://thymeandlove.com/wp-content/uploads/2018/10/Ed-Post-3-4-720x720.jpg"
          />
        </div>
        <div className="flex-content">
          <h2>
            <a href="recipe2.html">Recipe 2: Autumnal Soup</a>
          </h2>
          <p>An easy soup dish that is fun for all the family!</p>
          <img
            className="flex-image"
            alt="Tasty autumnal soup picture"
            src="https://www.thelastfoodblog.com/wp-content/uploads/2018/10/autumn-soup-thumb.jpg"
          />
        </div>

        <div className="flex-content">
          <h2>
            <a href="recipe3.html">Recipe 3: Cereal</a>
          </h2>
          <p>An easy cereal dish that is fun for all the family!</p>
          <img
            className="flex-image"
            alt="A cereal box"
            src="https://www.traderjoes.com/content/dam/trjo/products/m20907/36592.png/jcr:content/renditions/webp-1280.webp"
          />
        </div>
      </div>
    </main>
  );
}
