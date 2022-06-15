import { useEffect, useState } from "react";
import { fetchCharacters } from "../utils/fetchCharacters";

export const useCharacters = ({ page }) => {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		fetchCharacters({ page })
			.then(data => setCharacters(data))
			.catch(err => console.log(err));
	}, [page]);
	return { characters };
};
