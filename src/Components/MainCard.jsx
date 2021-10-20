import React, { useContext, useState, useEffect } from 'react';
import { Grid } from '@mui/material/';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import { MovieContext } from '../Context/movieContext';

const MainCard = () => {
	// eslint-disable-next-line
	const [movieData, setMovieData] = useContext(MovieContext);
	const [nominated, setNominated] = useState([]);
	const [listLen, setListLen] = useState();

	// Sets Nominated List from localstorage on page render
	useEffect(() => {
		let localStorageData = localStorage.getItem('nominatedMovies');
		{
			localStorageData
				? (() => {
						localStorageData = JSON.parse(localStorageData);
						setNominated(localStorageData);
				  })()
				: (() => {})();
		}
	}, []);

	// copys the nominated movie arrey and adds the new movie.
	// Max of 5
	const addMovie = (movie) => {
		{
			nominated.length < 5
				? (() => {
						const newNominatedList = [...nominated, movie];
						setNominated(newNominatedList);
						setListLen(nominated.length);
						localStorage.setItem(
							'nominatedMovies',
							JSON.stringify(newNominatedList)
						);
				  })()
				: setListLen(5);
		}
	};

	// removed movie based of imdbID
	const removeMovie = (movie) => {
		const newNominatedList = nominated.filter(
			(nominated) => nominated.imdbID !== movie.imdbID
		);
		setNominated(newNominatedList);
		localStorage.setItem('nominatedMovies', newNominatedList);
	};

	return (
		<>
			<Grid
				className='mainContent'
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: '100vh' }}>
				<Grid item sm={8}>
					<SearchBar />
				</Grid>
				<Grid
					container
					direction='row'
					justifyContent='space-evenly'
					alignItems='center'>
					<MovieList
						movieData={movieData}
						sectionTitle='Movies'
						onClick={addMovie}
						btnTitle='Nominate'
					/>

					<MovieList
						nominatedList={listLen}
						movieData={nominated}
						sectionTitle='Nominated'
						btnTitle='Remove'
						onClick={removeMovie}
					/>
				</Grid>
			</Grid>
			;
		</>
	);
};

export default MainCard;
