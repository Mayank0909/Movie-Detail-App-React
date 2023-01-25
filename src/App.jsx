import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Search from "./Search";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<Singlemovie />} />
					<Route path="*" element={<Error />} />

					{/* <Route path="/" element={<Search />} />
					<Route path="/" element={<Movies />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
