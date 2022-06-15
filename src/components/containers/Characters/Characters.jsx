import css from "./style.module.css";

export default function Characters({ characters }) {
	return (
		<div className={css.characters}>
			<div className={css.characters__cards}>
				{characters.results &&
					characters.results.map(({ image, id, status, name }) => (
						<picture key={id} className={css.characters__picture}>
							<img className={css.characters__images} src={image} alt={name} />
							{(status === "Alive" && (
								<span className={css.characters__alive}></span>
							)) ||
								(status === "Dead" && (
									<span className={css.characters__dead}></span>
								)) || <span className={css.characters__unknow}></span>}
							<span className={css.characters__name}>{name}</span>
						</picture>
					))}
			</div>
		</div>
	);
}
