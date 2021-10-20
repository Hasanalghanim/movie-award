import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieContxtProvider = (props) => {
	const [movieData, setMovieData] = useState();

	return (
		<MovieContext.Provider value={[movieData, setMovieData]}>
			{props.children}
		</MovieContext.Provider>
	);
};
