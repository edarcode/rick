import { useContext, useEffect, useState } from "react";
import { CharacterFiltersContext } from "../../../contexts/CharacterFiltersContext";
import { useDebounce } from "../../../hooks/useDebounce";
import css from "./style.module.css";

export default function Search() {
	const { setName } = useContext(CharacterFiltersContext);

	const [nameLocal, setNameLocal] = useState("");
	const debounceNameLocal = useDebounce(nameLocal, 500);

	useEffect(() => {
		debounceNameLocal && setName(debounceNameLocal);
	}, [debounceNameLocal, setName]);

	const handleOnChange = e => {
		const name = e.target.value;
		setNameLocal(name);
	};

	return (
		<label className={css.search}>
			<input
				className={css.search__input}
				placeholder="Character's Name"
				value={nameLocal}
				onChange={handleOnChange}
			/>
		</label>
	);
}
