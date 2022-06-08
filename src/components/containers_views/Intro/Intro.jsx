import Poster from "../Poster/Poster";
import css from "./style.module.css";

const posters = [
	{
		title: "Rick",
		content:
			"Es uno de los dos protagonistas homónimos de la serie de televisión animada de Adult Swim, Rick y Morty. Creado por Justin Roiland y Dan Harmon, Sánchez es un científico alcohólico misántropo conocido por su comportamiento temerario, nihilista y su personalidad pesimista",
		img: "/ricks.png"
	},
	{
		title: "Morty",
		content:
			"Es uno de los dos protagonistas homónimos de la serie de televisión animada de Adult Swim, Rick y Morty. Creado por Justin Roiland y Dan Harmon, Sánchez es un científico alcohólico misántropo conocido por su comportamiento temerario, nihilista y su personalidad pesimista",
		img: "/ricks.png"
	},
	{
		title: "Edarcode",
		content:
			"Es uno de los dos protagonistas homónimos de la serie de televisión animada de Adult Swim, Rick y Morty. Creado por Justin Roiland y Dan Harmon, Sánchez es un científico alcohólico misántropo conocido por su comportamiento temerario, nihilista y su personalidad pesimista",
		img: "/ricks.png"
	}
];

export default function Intro() {
	return (
		<header className={css.intro}>
			{posters.map(poster => (
				<Poster key={poster.title} {...poster} />
			))}
		</header>
	);
}
