import { motion } from "framer-motion";
import { useRef } from "react";

import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data }) {
	const sliderContainer = useRef(null);

	sliderContainer.current && console.log(sliderContainer.current.scrollWidth);
	sliderContainer.current && console.log(sliderContainer.current.offsetWidth);

	return (
		<motion.div className={css.slider}>
			<motion.div
				className={css.slider__container}
				drag="x"
				dragConstraints={{
					right: -10,
					left:
						(sliderContainer.current &&
							-sliderContainer.current.scrollWidth +
								sliderContainer.current.offsetWidth) ||
						null
				}}
				ref={sliderContainer}
			>
				{data.map(({ id, name, image }) => (
					<Card key={id} title={name} img={image} />
				))}
			</motion.div>
		</motion.div>
	);
}
