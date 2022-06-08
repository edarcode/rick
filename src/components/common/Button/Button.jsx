import css from "./style.module.css";

export default function Button({
	type = "submit",
	content,
	className = "btn",
	modifier = ""
}) {
	return (
		<button
			type={type}
			className={
				(!modifier && css[className]) || `${css[className]} ${css[modifier]}`
			}
		>
			{content}
		</button>
	);
}
