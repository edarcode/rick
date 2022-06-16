import { useState } from "react";

export const useFavorites = () => {
	const [favorites, setFavorites] = useState([]);

	const add = item => {
		setFavorites(favorites => {
			if (favorites.includes(item)) return favorites;
			return [...favorites, item];
		});
	};
	const remove = item => {
		setFavorites(favorites => {
			return favorites.filter(element => element !== item);
		});
	};

	return { favorites, add, remove };
};
