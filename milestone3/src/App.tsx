import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import RecipePage from "./components/RecipePage"

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/recipe/:path" element={<RecipePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
