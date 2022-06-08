import { bgFooter } from "../../../constants/bgImages";
import { about, contact, home } from "../../../constants/paths";
import LinkList from "../../common/LinkList/LinkList";
import css from "./style.module.css";

const listOne = [
	{ to: `${home}`, content: "Home" },
	{ to: `${contact}`, content: "Contact" },
	{ to: `${about}`, content: "About" }
];
const listTwo = [
	{ to: "*", content: "Dead" },
	{ to: "*", content: "Alive" },
	{ to: "*", content: "Female" },
	{ to: "*", content: "Male" }
];
const listThree = [
	{ to: "*", content: "Rick" },
	{ to: "*", content: "Morty" }
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
