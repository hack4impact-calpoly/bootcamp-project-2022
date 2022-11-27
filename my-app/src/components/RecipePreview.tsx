import {Link} from "react-router-dom"

interface Recipe {
    name: string;
    image: string;
    desc: string;
}

interface RecipePreviewProps extends Recipe{
  external?: boolean;
}

function RecipePreview(props: RecipePreviewProps) {
    let address =""
    if (props.external) {
      address = "externalRecipe/" + props.name;
    }
    else {
      address = "recipe/" + props.name;
    }
    return(<div className="card">
      <h2>
        <Link className=".h2.a" to={address}>{props.name}</Link>
      </h2>
      <div className="card-body">
        <img className="img-small" src={props.image} alt={props.name} />
        <p className="card-text">{props.desc}</p>
      </div>
    </div>)
}

// can also write this export in the function
export default RecipePreview;