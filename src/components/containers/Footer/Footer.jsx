import { bgFooter } from "../../../constants/bgImages";
import { home } from "../../../constants/paths";
import LinkList from "../../common/LinkList/LinkList";
import css from "./style.module.css";

const listOne = [
	{ to: { home }, content: "Home" },
	{ to: { home }, content: "Contact" },
	{ to: { home }, content: "About" }
];
const listTwo = [
	{ to: { home }, content: "Dead" },
	{ to: { home }, content: "Alive" },
	{ to: { home }, content: "Female" },
	{ to: { home }, content: "Male" }
];
const listThree = [
	{ to: { home }, content: "Rick" },
	{ to: { home }, content: "Morty" }
];

export default function Footer() {
	return (
		<footer className={css.footer}>
			<LinkList infoList={listOne} />
			<LinkList infoList={listTwo} />
			<LinkList infoList={listThree} />
			<img className={css.footer__image} src={bgFooter} alt="rick y morty" />
		</footer>
	);
}
