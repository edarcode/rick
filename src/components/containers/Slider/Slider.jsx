import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data }) {
	let isClick = false;
	let cursorXspace = null;

	const handleOnMouseDown = e => {
		isClick = true;
		cursorXspace = e.nativeEvent.offsetX - e.target.offsetLeft;
	};
	const handleOnMouseUp = e => {
		isClick = false;
	};

	const handleOnMouseMove = e => {
		if (!isClick) return;
		e.preventDefault();
		const offsetX = e.nativeEvent.offsetX;
		const sliderContainer = document.getElementById("sliderContainer");
		sliderContainer.style.left = `${offsetX - cursorXspace}px`;
	};

	return (
		<div
			className={css.slider}
			onMouseDown={handleOnMouseDown}
			onMouseUp={handleOnMouseUp}
			onMouseMove={handleOnMouseMove}
		>
			<section id="sliderContainer" className={css.slider__container}>
				{data.map(({ id, name, image }) => (
					<Card key={id} title={name} img={image} />
				))}
			</section>
		</div>
	);
}
