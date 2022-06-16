import CardCharacter from "../../common/CardCharacter/CardCharacter";
import css from "./style.module.css";

export default function Characters({ characters }) {
	return (
		<div className={css.characters}>
			<div className={css.characters__cards}>
				{characters.results &&
					characters.results.map(item => (
						<CardCharacter key={item.id} {...item} />
					))}
			</div>
		</div>
	);
}
