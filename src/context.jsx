import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=d71f6d7a`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const [isError, setIsError] = useState({ show: false, msg: "" });
	const [search, setSearch] = useState("spider");

	const getMovies = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data.Response === "True") {
				setMovie(data.Search);
				setIsError({ show: false, msg: "" });
				console.log(movie);
			} else {
				setIsError({ show: true, msg: data.Error });
			}
		} catch (error) {
			console.log("Error");
		}
	};
	useEffect(() => {
		let moviesTimeOut = setTimeout(() => {
			getMovies(`${API_URL}&s=${search}`);
		}, 500);
		return () => {
			clearTimeout(moviesTimeOut);
		};
	}, [search]);

	return (
		<AppContext.Provider
			value={{ isLoading, movie, isError, search, setSearch }}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
