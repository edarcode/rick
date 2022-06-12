import { posters } from "../../../data/posters";
import SliderPoster from "../../containers/SliderPoster/SliderPoster";
import css from "./style.module.css";

export default function Intro() {
	return (
		<header className={css.intro}>
			<SliderPoster posters={posters} />
		</header>
	);
}
