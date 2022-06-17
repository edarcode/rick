import { useContext, useState } from "react";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import css from "./style.module.css";

export default function CardCharacter({ image, status, name, id }) {
	const { favorites, add, remove } = useContext(FavoritesContext);
	const [isHover, setIsHover] = useState(false);

	const handleOnMouseEnter = () => {
		setIsHover(true);
	};
	const handleOnMouseLeave = () => {
		setIsHover(false);
	};

	const handleOnClickFavorites = () => {
		if (!favorites.includes(id)) return add(id);
		remove(id);
	};

	return (
		<picture
			className={css.character}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			<img
				loading="lazy"
				className={css.character__img}
				src={image}
				alt={name}
			/>
			{(status === "Alive" && <span className={css.character__alive}></span>) ||
				(status === "Dead" && (
					<span className={css.character__dead}></span>
				)) || <span className={css.character__unknow}></span>}
			<span className={css.character__name}>{name}</span>
			{isHover && (
				<img
					className={css.character__favorites}
					src={
						(!favorites.includes(id) && "/add_to_favorites.png") || "/like.png"
					}
					alt="Add to favorites"
					onClick={handleOnClickFavorites}
				/>
			)}
		</picture>
	);
}
