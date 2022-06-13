import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaScreen } from "../../../hooks/useMediaScreen";

import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data }) {
	const sliderContainer = useRef(null);
	const { widthScreen } = useMediaScreen();
	const [left, setLeft] = useState();

	useEffect(() => {
		setLeft(
			sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth
		);
	}, [widthScreen]);

	return (
		<div className={css.slider}>
			<motion.div
				className={css.slider__container}
				drag="x"
				dragConstraints={
					(sliderContainer.current && {
						right: -10,
						left: -left
					}) ||
					{}
				}
				ref={sliderContainer}
			>
				{data.map(({ id, name, image }) => (
					<Card key={id} title={name} img={image} />
				))}
			</motion.div>
		</div>
	);
}
