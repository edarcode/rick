import css from "./style.module.css";

export default function Card({ title, img }) {
	return (
		<div className={css.card}>
			<img className={css.card__img} src={img} alt={title} />
			<h6 className={css.card__title}>{title}</h6>
		</div>
	);
}
