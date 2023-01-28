import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
	const { search, setSearch, isError } = useGlobalContext();
	return (
		<>
			<div className="search-section">
				<h1>Movie Information App</h1>
				<h2>Search Your Fevorite Movie Here 👇</h2>
				<input
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => {
						return setSearch(e.target.value);
					}}
				/>
				<div className="card-error">
					<p>{isError.show && isError.msg}</p>
				</div>
			</div>
		</>
	);
};

export default Search;
