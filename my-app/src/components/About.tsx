import './about.css';
import RecipePreview from './RecipePreview';

export default function About() {
  return (
    <div className="holder">
    <h1>This is an about me page.</h1>
    <p>2nd year CS major.</p>
    <p id="description">
        Besides my academic interests, I enjoy playing soccer and walking my dog.
    </p>
    </div>
  );
}