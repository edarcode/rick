import { useContext } from "react";
import { CharactersSlidersContext } from "../../../contexts/CharactersSlidersContext";
import Slider from "../Slider/Slider";
import css from "./style.module.css";

export default function Sliders() {
	const { characters } = useContext(CharactersSlidersContext);
	const { randomCharacters } = useContext(CharactersSlidersContext);
	const { rarestCharacters } = useContext(CharactersSlidersContext);
	return (
		<div className={css.sliders}>
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
