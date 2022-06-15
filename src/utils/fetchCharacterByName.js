import { apiRickAndMorty } from "../constants/urls";

export const fetchCharacterByName = async ({ name }) => {
	if (!name) return;
	const character = await fetch(`${apiRickAndMorty}?name=${name}`, {
		method: "GET"
	});
	return character.json();
};
