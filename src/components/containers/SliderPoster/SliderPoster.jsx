import { useState } from "react";
import ButtonSlider from "../../common/ButtonSlider/ButtonSlider";
import Poster from "../../common/Poster/Poster";
import css from "./style.module.css";

export default function SliderPoster({ posters }) {
	const [index, setIndex] = useState(0);

	const handleOnClickLeft = () => {
		if (index === 0) {
			setIndex(posters.length - 1);
		} else {
			setIndex(index => index - 1);
		}
	};
	const handleOnClickRight = () => {
		if (index === posters.length - 1) {
			setIndex(0);
		} else {
			setIndex(index => index + 1);
		}
	};

	return (
		<div className={css.slider}>
			<section
				className={css.slider__container}
				style={{
					transform: `translateX(${index * -100}%)`
				}}
			>
				{posters.map(poster => (
					<Poster key={poster.title} {...poster} />
				))}
			</section>
			<ButtonSlider left={handleOnClickLeft} right={handleOnClickRight} />
		</div>
	);
}
