interface Recipe {
  name: string;
  link: string;
  desc: string;
  image: string;
}

function RecipePreview(props: Recipe) {
  return (
    <div className="recipe">
      <h4>
        <a href={props.link + ".html"}>{props.name}</a>
      </h4>
      <p>{props.desc}</p>

      <div className="flex-content">
        <h2>
          <a href={props.link + ".html"}>{props.name}</a>
        </h2>
        <p>{props.desc}</p>
        <img className="flex-image" src={props.link} />
      </div>
    </div>
  );
}

export default RecipePreview;
