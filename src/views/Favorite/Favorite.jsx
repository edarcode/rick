import { useContext, useEffect, useState } from "react";
import CardFavoriteCharacter from "../../components/common/CardFavoriteCharacter/CardFavoriteCharacter";
import Spinner from "../../components/common/Spinner/Spinner";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { fetchMultipleCharacters } from "../../utils/fetchMultipleCharacters";
import css from "./style.module.css";

export default function Favorite() {
	const { favorites } = useContext(FavoritesContext);
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (favorites.length) {
			setLoading(true);
			fetchMultipleCharacters(favorites)
				.then(data => !data.error && setCharacters(data))
				.then(() => setLoading(false))
				.catch(err => console.log(err));
		} else {
			setCharacters([]);
		}
	}, [favorites]);
	if (!favorites.length)
		return <img className={css.empty} src="/empty.png" alt="empty" />;
	return (
		<main className={css.favorites}>
			{characters &&
				characters.map(item => (
					<CardFavoriteCharacter key={item.id} {...item} />
				))}
			{loading && <Spinner />}
		</main>
	);
}
