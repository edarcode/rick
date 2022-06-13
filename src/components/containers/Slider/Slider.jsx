import { motion } from "framer-motion";
import { useEffect } from "react";

import { useMediaScreen } from "../../../hooks/useMediaScreen";
import Card from "../../common/Card/Card";
import css from "./style.module.css";

export default function Slider({ data }) {
	const { widthScreen } = useMediaScreen();

	const handleDragConstraints = () => {
		if (widthScreen >= 1920) {
			return { right: -10, left: -3650 };
		} else if (widthScreen >= 1280) {
			return { right: -10, left: -4220 };
		} else if (widthScreen >= 768) {
			return { right: -10, left: -4700 };
		} else {
			return { right: -10, left: -4050 };
		}
	};

	useEffect(() => {
		console.log(widthScreen);
	}, [widthScreen]);

	return (
		<motion.div className={css.slider}>
			<motion.div
				className={css.slider__container}
				drag="x"
				dragConstraints={handleDragConstraints()}
			>
				{data.map(({ id, name, image }) => (
					<Card key={id} title={name} img={image} />
				))}
			</motion.div>
		</motion.div>
	);
}
