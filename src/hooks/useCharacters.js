import { useEffect, useState } from "react";
import { fetchCharacters } from "../utils/fetchCharacters";

export const useCharacters = () => {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		fetchCharacters()
			.then(data => setCharacters(data))
			.catch(err => console.log(err));
	}, []);
	return { characters };
};
