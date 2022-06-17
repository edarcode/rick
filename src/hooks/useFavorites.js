import { useEffect, useState } from "react";

export const useFavorites = () => {
	const [favorites, setFavorites] = useState([]);

	const add = item => {
		setFavorites(favorites => {
			if (favorites.includes(item)) return favorites;
			const newFavorites = [...favorites, item];
			localStorage.setItem("favorites", JSON.stringify(newFavorites));
			return newFavorites;
		});
	};
	const remove = item => {
		setFavorites(favorites => {
			const newFavorites = favorites.filter(element => element !== item);
			localStorage.setItem("favorites", JSON.stringify(newFavorites));
			return newFavorites;
		});
	};

	useEffect(() => {
		const localStorageFavorites = JSON.parse(localStorage.getItem("favorites"));
		localStorageFavorites && setFavorites(localStorageFavorites);
	}, []);

	return { favorites, add, remove };
};
