interface Recipe{
    name: string;
    image: string;
    desc: string;
}

function RecipePreview() {
    return (
    <div className="dish-box">
        <img className="thumbnail" alt="Chole Samosa Chaat" src="https://www.cookwithmanali.com/wp-content/uploads/2019/09/Samosa-Chaat-Recipe.jpg"/>
        <div>
            <h2 className="about"><a className="dish-title" href="samosa.html">Chole Samosa Chaat</a></h2>
            <h3 className="description">Chole samosa chaat is made with crispy smashed samosa, layered with spicy chole (chickpea curry), tangy sauces, dahi, and a host of other spices.</h3>
        </div>
    </div>
    )
}
export default RecipePreview;