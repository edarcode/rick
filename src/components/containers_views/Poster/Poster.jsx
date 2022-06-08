import Button from "../../common/Button/Button";
import css from "./style.module.css";

export default function Poster({ title, content, img }) {
	return (
		<div className={css.poster}>
			<h2 className={css.poster__title}>{title}</h2>
			<p className={css.poster__content}>{content}</p>
			<Button content="Read more" />
			<img className={css.poster__img} src={img} alt={title} />
		</div>
	);
}
