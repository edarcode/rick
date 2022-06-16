import { useState } from "react";
import css from "./style.module.css";

export default function CardCharacter({ image, status, name }) {
	const [isHover, setIsHover] = useState(false);
	const handleOnMouseEnter = () => {
		setIsHover(true);
	};
	const handleOnMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<picture
			className={css.character}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			<img className={css.character__images} src={image} alt={name} />
			{(status === "Alive" && <span className={css.character__alive}></span>) ||
				(status === "Dead" && (
					<span className={css.character__dead}></span>
				)) || <span className={css.character__unknow}></span>}
			<span className={css.character__name}>{name}</span>
			{isHover && (
				<img
					className={css.character__favorites}
					src="/add_to_favorites.png"
					alt="Add to favorites"
				/>
			)}
		</picture>
	);
}
