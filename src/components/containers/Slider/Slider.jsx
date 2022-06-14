import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data }) {
	const sliderContainer = useRef(null);
	const [left, setLeft] = useState();

	useEffect(() => {
		const scroll =
			sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth;
		setLeft(-scroll);
		const resize = () => {
			setLeft(-scroll);
		};
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, []);

	return (
		<div className={css.slider}>
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
