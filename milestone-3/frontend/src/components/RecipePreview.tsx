export interface Recipe {
    name: string;
    image: string;
    desc: string;
    alt: string;
    ingredients: string[];
    steps: string[];
    source: string;
};

function RecipePreview(props: Recipe) {
    return (
        <div className="flex-container-recipes">
            <img src={props.image} alt={props.alt}/>
            <div className="text">
                <h3><a href="pumpkin.html"><u>{props.name}</u></a></h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default RecipePreview;
