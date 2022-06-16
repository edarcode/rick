import { useEffect, useState } from "react";
import Button from "../../components/common/Button/Button";
import Search from "../../components/common/Search/Search";
import Spinner from "../../components/common/Spinner/Spinner";
import Characters from "../../components/containers/Characters/Characters";
import Intro from "../../components/containers/Intro/Intro";
import Paged from "../../components/containers/Paged/Paged";
import Sliders from "../../components/containers/Sliders/Sliders";
import { CharacterFiltersContext } from "../../contexts/CharacterFiltersContext";
import { fetchCharacters } from "../../utils/fetchCharacters";
import css from "./style.module.css";

export default function Home() {
	const [name, setName] = useState("");
	const [characters, setCharacters] = useState();
	const [page, setPage] = useState(1);
	const [isSearching, setIsSearching] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (isSearching) {
			setLoading(true);
			fetchCharacters({ name, page })
				.then(data => {
					if (!data.error) setCharacters(data);
				})
				.then(() => setLoading(false))
				.catch(err => console.log(err));
			const width = window.innerWidth;
			if (width < 768) return window.scroll(0, 435);
			if (width < 1280) return window.scroll(0, 320);
			window.scroll(0, 500);
		}
	}, [name, page, isSearching]);

	const value = {
		name,
		setName
	};

	const handleOnClick = () => {
		setIsSearching(true);
	};

	return (
		<main className={css.main}>
			{loading && <Spinner />}
			<Intro />
			{!isSearching && (
				<Button
					type="button"
					content="Search characters"
					onClick={handleOnClick}
				/>
			)}
			<CharacterFiltersContext.Provider value={value}>
				{isSearching && <Search />}
			</CharacterFiltersContext.Provider>
			{characters && !loading && <Characters characters={characters} />}
			{!characters && <Sliders />}
			{characters && (
				<Paged
					pageCount={characters.info.pages}
					page={page}
					setPage={setPage}
				/>
			)}
		</main>
	);
}
