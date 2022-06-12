import { useRef } from "react";
import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data }) {
	const slider = useRef(null);
	const sliderContainer = useRef(null);
	let pressed = false;
	let startX;
	let x;

	const handleOnMouseDown = e => {
		pressed = true;
		startX = e.nativeEvent.offsetX - sliderContainer.current.offsetLeft;
		slider.current.style.cursor = "grabbing";
	};
	const handleOnMouseEnter = e => {
		slider.current.style.cursor = "grab";
	};
	const handleOnMouseUp = e => {
		slider.current.style.cursor = "grab";
	};
	const handleOnMouseUpWindow = e => {
		pressed = false;
	};
	window.addEventListener("mouseup", handleOnMouseUpWindow);

	const handleOnMouseMove = e => {
		if (!pressed) return;
		e.preventDefault();
		x = e.nativeEvent.offsetX;
		sliderContainer.current.style.left = `${x - startX}px`;
		checkboundary(slider, sliderContainer);
	};

	return (
		<div
			ref={slider}
			className={css.slider}
			onMouseDown={handleOnMouseDown}
			onMouseEnter={handleOnMouseEnter}
			onMouseUp={handleOnMouseUp}
			onMouseMove={handleOnMouseMove}
		>
			<section ref={sliderContainer} className={css.slider__container}>
				{data.map(({ id, name, image }) => (
					<Card key={id} title={name} img={image} />
				))}
			</section>
		</div>
	);
}

function checkboundary(slider, sliderCounter) {
	const sliderRect = slider.current.getBoundingClientRect();
	const sliderCounterRect = slider.current.getBoundingClientRect();

	console.log(sliderCounterRect.right);
	console.log(sliderRect.right);

	if (parseInt(sliderCounter.current.style.left) > 0) {
		sliderCounter.current.style.left = "0";
	} else if (sliderCounterRect.right > sliderRect.right) {
		sliderCounter.current.style.left = `-${
			sliderCounterRect.width - sliderRect.width
		}px`;
	}
}
