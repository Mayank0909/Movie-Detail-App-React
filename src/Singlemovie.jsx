import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { API_URL } from "./context";
import "./single.css";
const Singlemovie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const getMovies = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data.Response === "True") {
				setMovie(data);
				setIsLoading(false);
				console.log(movie);
			} else {
			}
		} catch (error) {}
	};
	useEffect(() => {
		let moviesTimeOut = setTimeout(() => {
			getMovies(`${API_URL}&i=${id}`);
		});
		return () => {
			clearTimeout(moviesTimeOut);
		};
	}, [id]);

	if (isLoading) {
		return (
			<>
				<div className="single">
					<h1>Loading.....</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="single">
				<div className="single_poster">
					<img src={movie.Poster} alt="" />
				</div>
				<div className="detail">
					<h2>
						<span className="heading">Title</span> - {movie.Title}
					</h2>
					<h2>
						<span className="heading">Year</span> - {movie.Year}
					</h2>
					<h2>
						<span className="heading">Released</span> - {movie.Released}
					</h2>
					<h2>
						<span className="heading">IMDB Rating</span> - {movie.imdbRating}
					</h2>
					<h2>
						<span className="heading">Runtime</span> - {movie.Runtime}
					</h2>

					<h2>
						<span className="heading">Director</span> - {movie.Director}
					</h2>
					<h2>
						<span className="heading">Actors</span> - {movie.Actors}
					</h2>
					<h2>
						<span className="heading">Country</span> - {movie.Country}
					</h2>
					<h2>
						<span className="heading">Plot</span> - {movie.Plot}
					</h2>
				</div>
			</div>

			<NavLink to={"/"} className="back_button">
				Back To HomePage
			</NavLink>
		</>
	);
};

export default Singlemovie;
