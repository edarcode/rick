export const fetchCharacters = async () => {
	const characters = await fetch("https://rickandmortyapi.com/api/character", {
		method: "GET"
	});
	return characters.json();
};
