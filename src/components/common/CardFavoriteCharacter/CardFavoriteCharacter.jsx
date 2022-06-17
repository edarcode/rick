import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import css from "./style.module.css";

export default function CardFavoriteCharacter({
	id,
	name,
	status,
	species,
	gender,
	image,
	origin
}) {
	const { remove } = useContext(FavoritesContext);
	const handleOnClickDelete = () => {
		remove(id);
	};
	return (
		<div className={css.character}>
			<img className={css.character__img} src={image} alt={name} />
			<h3 className={css.character__name}>{name}</h3>
			<div
				className={
					(status === "Dead" &&
						`${css.character__status} ${css["character__status--red"]}`) ||
					(status === "unknown" &&
						`${css.character__status} ${css["character__status--black"]}`) ||
					css.character__status
				}
			></div>
			<div className={css.character__species}>{species}</div>
			<div className={css.character__origin}>{origin.name}</div>
			<div className={css.character__gender}>{gender[0]}</div>
			<AiFillDelete
				className={css.character__delete}
				onClick={handleOnClickDelete}
			/>
		</div>
	);
}
