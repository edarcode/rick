import { Route, Routes } from "react-router-dom";
import Header from "./components/containers/Header/Header";
import { favorite, home } from "./constants/paths";
import Favorite from "./views/Favorite/Favorite";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path={home} element={<Home />} />
				<Route path="*" element={<NotFound />} />
				<Route path={favorite} element={<Favorite />} />
			</Routes>
		</div>
	);
}

export default App;
