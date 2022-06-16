import { apiRickAndMorty } from "../constants/urls";

export const fetchMultipleCharacters = async arrIds => {
	const url = `${apiRickAndMorty}/${JSON.stringify(arrIds)}`;
	const characters = await fetch(`${url}`, {
		method: "GET"
	});
	return characters.json();
};
