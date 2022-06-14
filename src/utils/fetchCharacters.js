import { apiRickAndMorty } from "../constants/urls";

export const fetchCharacters = async ({ page = 1 }) => {
	const characters = await fetch(`${apiRickAndMorty}?page=${page}`, {
		method: "GET"
	});
	return characters.json();
};
