import { useContext } from "react";
import { CharactersContext } from "../../../contexts/CharactersContext";
import Slider from "../Slider/Slider";
import css from "./style.module.css";

export default function Characters() {
	const { characters } = useContext(CharactersContext);
	const { randomCharacters } = useContext(CharactersContext);
	const { rarestCharacters } = useContext(CharactersContext);
	return (
		<div className={css.characters}>
			{characters.results && (
				<Slider data={characters.results} title="Main characters" />
			)}

			{randomCharacters.results && (
				<Slider data={randomCharacters.results} title="Random characters" />
			)}
			{rarestCharacters.results && (
				<Slider data={rarestCharacters.results} title="Rarest characters" />
			)}
		</div>
	);
}
