import { Link } from "react-router-dom";
import css from "./style.module.css";

export default function LinkList({ infoList }) {
	return (
		<ul className={css.list}>
			{infoList.map(({ to, content }) => (
				<li key={content} className={css.list__item}>
					<Link to={to} className={css.list__link}>
						{content}
					</Link>
				</li>
			))}
		</ul>
	);
}
