import css from "./style.module.css";

export default function Search() {
	return (
		<label className={css.search}>
			<input className={css.search__input} placeholder="Character's Name" />
		</label>
	);
}
