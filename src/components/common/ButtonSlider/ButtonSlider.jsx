import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import css from "./style.module.css";

export default function ButtonSlider({ left, right }) {
	return (
		<span className={css["btn-slider"]}>
			<FaAngleDoubleLeft onClick={left} />
			<FaAngleDoubleRight onClick={right} />
		</span>
	);
}
