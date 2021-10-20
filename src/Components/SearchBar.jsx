import React, { useContext, useState } from 'react';
import { TextField, Grid } from '@mui/material/';

import Axios from 'axios';

import { MovieContext } from '../Context/movieContext';

import Loader from 'react-loader-spinner';

const SearchBar = () => {
	// eslint-disable-next-line
	const [movieData, setMovieData] = useContext(MovieContext);
	const [isLoading, setIsLoading] = useState();

	// gets movieData from OMDB with title being users inputs
	const getMoviedata = async (title) => {
		try {
			const res = await Axios.get(
				'https://www.omdbapi.com/?s=' + title + '&apikey=523d6957&page=1'
			);

			setMovieData(res.data.Search);
		} catch (error) {
			console.log(error);
		}
	};

	// Waits 2 secs from last key up to run getMoviedata Func
	// preventing unnessesry api requests
	let timeout = 0;
	const keyUp = (e) => {
		setIsLoading(true);
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			setIsLoading(false);
			getMoviedata(e);
		}, 2000);
	};

	return (
		<>
			<Grid container spacing={2}>
				<Grid item md={12}>
					<TextField
						id='Search'
						label='Search'
						helperText='Please search for a movie'
						variant='outlined'
						onKeyUp={(e) => keyUp(e.target.value)}
					/>
					{isLoading ? (
						<div className='loader'>
							<Loader type='Rings' color='#00BFFF' height={100} width={100} />
						</div>
					) : null}
				</Grid>
			</Grid>
		</>
	);
};

export default SearchBar;
