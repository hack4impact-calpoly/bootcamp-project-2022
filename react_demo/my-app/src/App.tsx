import './App.css';
import RecipePreview from './components/RecipePreview';

function App() {
  return (
    <main>
    <div className="top-panel">
        <h1>Swayam's Recipes</h1>
        <div className="top-left-panel">
            <h2 className="panel-button"><a href="index.html">Home</a></h2>
            <h2 className="panel-button"><a href="about.html">About Me</a></h2>
        </div>
    </div>
    <div>
        <h1 id="welcome">Welcome to Swayam's Recipes!</h1>
    </div>
    <RecipePreview/>
    <RecipePreview/>
    <RecipePreview/>
    {/* <div className="upper-className">
        <div className="dish-box">
            <img className="thumbnail" alt="Haryali Chicken Biryani" src="https://myfoodstory.com/wp-content/uploads/2018/09/The-Best-Chicken-Biryani-Recipe-2.jpg"/>
            <div className="about">
                <h2><a className="dish-title" href="cb.html">Chicken Biryani</a></h2>
                <h3 className="description">Hariyali Chicken Biryani is marinated in the combination of green ingredients like coriander leaves, mint leaves and green chillies.</h3>
            </div>
        </div>
        <br/>
        <br/>
        <div className="dish-box">
            <img className="thumbnail" alt="Gajar Ka Halwa" src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Instant-Pot-Gajar-Halwa-With-Condensed-Milk.jpg"/>
            <div className="about">
                <h2><a className="dish-title" href="gkh.html">Gajar Ka Halwa</a></h2>
                <h3 className="description">One of the most popular Indian desserts, 'Gajar ka Halwa' is known to have originated in Punjab. It is a delicious delight during the winter months. Prepare this delicious dessert for special occasions.</h3>
            </div>
        </div>
    </div> */}
    </main>
  );
}

export default App;
