import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import "./movie.css";
const Movies = () => {
	const { movie } = useGlobalContext();
	return (
		<>
			<section className="movie-page">
				<div className="container grid grid-4-col">
					{movie.map((curMovie) => {
						const { imdbID, Title, Poster, Year, Type } = curMovie;
						const movieName = Title.substring(0, 15);
						return (
							<>
								<NavLink to={`movie/${imdbID}`}>
									<div className="card">
										<div className="card-info">
											<h3>
												{movieName.length >= 15 ? `${movieName}...` : movieName}
											</h3>
											<img src={Poster} alt="" />
											<h3>{Year}</h3>
											<h3>{Type}</h3>
										</div>
									</div>
								</NavLink>
							</>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Movies;
