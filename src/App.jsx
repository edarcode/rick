import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/common/Logo/Logo";
import Footer from "./components/containers/Footer/Footer";
import Header from "./components/containers/Header/Header";
import { favorite, home } from "./constants/paths";
import { CharactersContext } from "./contexts/CharactersContext";
import { useCharacters } from "./hooks/useCharacters";
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
	return (
		<div className="App">
			<Logo />
			<Header />
			<Routes>
				<Route
					path={home}
					element={
						<CharactersContext.Provider
							value={
								(characters &&
									randomCharacters &&
									rarestCharacters && {
										characters,
										randomCharacters,
										rarestCharacters
									}) ||
								{}
							}
						>
							<Home />
						</CharactersContext.Provider>
					}
				/>
				<Route path={favorite} element={<Favorite />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
