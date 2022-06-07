import { Route, Routes } from "react-router-dom";
import { favorite, home } from "./constants/paths";
import Favorite from "./views/Favorite/Favorite";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {
	return (
		<Routes className="App">
			<Route path={home} element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path={favorite} element={<Favorite />} />
		</Routes>
	);
}

export default App;
