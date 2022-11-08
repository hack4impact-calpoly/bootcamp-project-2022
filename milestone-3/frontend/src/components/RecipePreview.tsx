import { Link } from "react-router-dom";

export interface RecipePreviewData {
  id: number;
  name: string;
  description: string;
  image: string;
  imgAlt: string;
}

export default function RecipePreview(props: RecipePreviewData) {
  return (
    <div className="flex-content">
      <h2>
        <Link to={"/recipe/" + props.id}>{props.name}</Link>
      </h2>
      <p>{props.description}</p>
      <img className="flex-image" src={props.image} alt={props.imgAlt} />
    </div>
  );
}
