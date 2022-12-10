
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import { useEffect, useState } from 'react';

// function App() {
//   const [allRecipes, setUpdateRecipes] = useState(recipes);
//   useEffect(() => {
//     fetch('https://bootcamp-milestone-4.onrender.com/recipe')
//       .then((res) => res.json())
//       .then((data) =>
//         setUpdateRecipes((curr: any) => {
//           return [...curr, ...data];
//         })
//       );
//   }, []);
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {allRecipes.map((recipe) => {
//           return <Route
//           path={`recipe/:${recipe.name}`}
//           element={<RecipePage name={recipe.name} image={recipe.image} description={recipe.description} ingredients={recipe.ingredients} instructions={recipe.instructions}/>}
//         />;
//         })}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Home from "./components/home";
// import About from "./components/About";
// import RecipePage from "./components/RecipePage";
// import recipes from "./recipeData";
// import { useEffect, useState } from 'react';
interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

function App() {
  const [recipes,setRecipes] = useState<Recipe[]>([]);
  // const [allRecipes, setUpdateRecipes] = useState(recipes);
  useEffect(() => {
    fetch('http://localhost:3002/recipe/')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err)=>console.log("Issue grabbing recipes from database"));
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* {recipes.map((recipe) => {
          return <Route
          path={"/"} element={<Home name={recipe.name} image={recipe.image} description={recipe.description} ingredients={recipe.ingredients} instructions={recipe.instructions}/>}/>;
        })} */}
        <Route path="/about" element={<About />} />
        {recipes.map((recipe) => {
          return <Route
          path={`recipe/:${recipe.name}`}
          element={<RecipePage name={recipe.name} image={recipe.image} description={recipe.description} ingredients={recipe.ingredients} instructions={recipe.instructions}/>}
        />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;