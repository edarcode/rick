import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { fetchMultipleCharacters } from "../../utils/fetchMultipleCharacters";

export default function Favorite() {
	const { favorites } = useContext(FavoritesContext);
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		fetchMultipleCharacters(favorites)
			.then(data => !data.error && setCharacters(data))
			.catch(err => console.log(err));
	}, [favorites]);
	console.log(characters);
	return <main>favorite</main>;
}
