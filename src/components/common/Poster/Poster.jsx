import css from "./style.module.css";

export default function Poster({ title, content, img, modifier }) {
	return (
		<div className={css.poster} id={title}>
			<h2 className={css.poster__title}>{title}</h2>
			<p className={css.poster__content}>{content}</p>
			<img className={css.poster__img} src={img} alt={title} />
		</div>
	);
}
