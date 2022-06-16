import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/common/Logo/Logo";
import Footer from "./components/containers/Footer/Footer";
import Header from "./components/containers/Header/Header";
import { favorite, home } from "./constants/paths";
import { CharactersSlidersContext } from "./contexts/CharactersSlidersContext";
import { FavoritesContext } from "./contexts/FavoritesContext";
import { useCharacters } from "./hooks/useCharacters";
import { useFavorites } from "./hooks/useFavorites";
import Favorite from "./views/Favorite/Favorite";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

const numRandom = Math.floor(Math.random() * 41) + 1;
const otherNumRandom = Math.floor(Math.random() * 41) + 1;

function App() {
	const { characters } = useCharacters({});
	const { characters: randomCharacters } = useCharacters({ page: numRandom });
	const { characters: rarestCharacters } = useCharacters({
		page: otherNumRandom
	});
	const favorites = useFavorites();

	const charactersSlidersContext = {
		characters,
		randomCharacters,
		rarestCharacters
	};

	return (
		<div className="App">
			<Logo />
			<Header />
			<FavoritesContext.Provider value={favorites}>
				<Routes>
					<Route
						path={home}
						element={
							<CharactersSlidersContext.Provider
								value={charactersSlidersContext}
							>
								<Home />
							</CharactersSlidersContext.Provider>
						}
					/>
					<Route path={favorite} element={<Favorite />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</FavoritesContext.Provider>
			<Footer />
		</div>
	);
}

export default App;
