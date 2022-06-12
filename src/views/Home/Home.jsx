import Characters from "../../components/containers/Characters/Characters";
import Intro from "../../components/containers/Intro/Intro";
import css from "./style.module.css";

export default function Home() {
	return (
		<main className={css.main}>
			<Intro />
			<Characters />
		</main>
	);
}
