import { useEffect, useState } from "react";
import Search from "../../components/common/Search/Search";
import Characters from "../../components/containers/Characters/Characters";
import Intro from "../../components/containers/Intro/Intro";
import { CharacterFiltersContext } from "../../contexts/CharacterFiltersContext";
import { fetchCharacters } from "../../utils/fetchCharacters";
import css from "./style.module.css";

export default function Home() {
	const [name, setName] = useState("");

	useEffect(() => {
		name &&
			fetchCharacters({ name })
				.then(data => console.log(data))
				.catch(err => console.log(err));
	}, [name]);

	const value = {
		name,
		setName
	};

	return (
		<main className={css.main}>
			<Intro />
			<CharacterFiltersContext.Provider value={value}>
				<Search />
			</CharacterFiltersContext.Provider>
			<Characters />
		</main>
	);
}
