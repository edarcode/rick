import { useContext } from "react";
import { CharactersContext } from "../../../contexts/CharactersContext";
import Slider from "../Slider/Slider";
import css from "./style.module.css";

export default function Characters() {
	const { characters } = useContext(CharactersContext);
	return (
		<div className={css.characters}>
			{characters.results && <Slider data={characters.results} />}
		</div>
	);
}
