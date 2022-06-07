import { Link, useLocation } from "react-router-dom";
import { favorite, home } from "../../../constants/paths";
import css from "./style.module.css";

export default function Header() {
	const { pathname } = useLocation();

	return (
		<header className={css.header}>
			<nav className={css.header__nav}>
				<Link
					to={home}
					className={
						(pathname !== home && css.header__link) ||
						`${css.header__link} ${css["header__link--underline"]}`
					}
				>
					Home
				</Link>
				<Link
					to={favorite}
					className={
						(pathname !== favorite && css.header__link) ||
						`${css.header__link} ${css["header__link--underline"]}`
					}
				>
					Favorites
				</Link>
				<Link
					to="*"
					className={
						(pathname !== "#" && css.header__link) ||
						`${css.header__link} ${css["header__link--underline"]}`
					}
				>
					Rick
				</Link>
			</nav>
		</header>
	);
}
