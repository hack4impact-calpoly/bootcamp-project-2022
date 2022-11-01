interface Recipe {
    name: string;
    image: string;
    desc: string;
}
function RecipeCard(props: Recipe) {
    return (
        <div className="card">
            <h2 className="card-title">{props.name}</h2>
            <div className="card-body">
                <img className="card-img" src={props.image} width="250" height="250"/>
                <p className="card-disc">{props.desc}</p>
                <a className="card-btn" href="#">Go</a>
            </div>
        </div>
    );
}

export default RecipeCard