interface Recipe {
  name: string;
  link: string;
  desc: string;
//   image: string;
}

function RecipePreview(props: Recipe) {
  return (
    <div className="recipe">
      <h4>
        <a href={props.link + ".html"}>{props.name}</a>
      </h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default RecipePreview;
