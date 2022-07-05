import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaScreen } from "../../../hooks/useMediaScreen";

import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data, title }) {
	const sliderContainer = useRef(null);
	const [left, setLeft] = useState();
	const { widthScreen } = useMediaScreen();

	useEffect(() => {
		const scroll =
			sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth;
		setTimeout(() => {
			setLeft(-scroll);
		}, 500);
	}, [widthScreen]);

	return (
		<div className={css.slider}>
			<h3>{title}</h3>
			<motion.div
				className={css.slider__container}
				drag="x"
				dragConstraints={{ right: -10, left }}
				ref={sliderContainer}
			>
				{data.map(({ id, name, image }) => (
					<Card key={id} title={name} img={image} />
				))}
			</motion.div>
		</div>
	);
}
