export interface Recipe {
    name: string;
    image: string;
    desc: string;
};

function RecipePreview(props: Recipe) {
    return (
        <div className="flex-container-recipes">
            <img src={props.image} alt="Pumpkin Chocolate Chip Muffins"/>
            <div className="text">
                <h3><a href="pumpkin.html"><u>{props.name}</u></a></h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default RecipePreview;
