import './RecipePage.css';

interface recipeP {
    name: string,
    desc: string,
    image: string,
    instructions: string[],
    ingredients: string[],
    alt: string
}

export default function RecipePage(props:recipeP) {
    return (<div className="food">
    <h1>{props.name}</h1>
    <p>{props.desc}</p>
    <h2>Ingredients</h2>

    <ul>
         {props.ingredients.map((ingred, idx) => {
                    return <li key={idx}>{ingred}</li>;
                })}
    </ul>

    <h2>Procedure</h2>
    <ol>
       {props.instructions.map((ingred, idx) => {
                    return <li key={idx}>{ingred}</li>;
                })}
    </ol>
    <img src={props.image} alt={props.alt} width="300" height="300" />
    </div>);
}
