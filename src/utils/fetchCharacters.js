import { apiRickAndMorty } from "../constants/urls";

export const fetchCharacters = async filters => {
	const url = addQuery(filters);
	const characters = await fetch(`${url}`, {
		method: "GET"
	});
	return characters.json();
};

function addQuery(filters) {
	const { page = 1, name } = filters;
	let url = apiRickAndMorty;
	const isName = Object.prototype.hasOwnProperty.call(filters, "name");
	url += `?page=${page}`;
	if (isName) {
		url += `&name=${name}`;
	}
	return url;
}
