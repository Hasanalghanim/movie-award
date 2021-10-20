import React from 'react';
import {
	ImageListItemBar,
	ImageListItem,
	ImageList,
	Button,
} from '@mui/material/';

const MovieList = (props) => {
	// All movie lists gets mapped in this
	const displayMovie = (i) => {
		return (
			<ImageListItem key={i.Poster}>
				<ImageListItemBar
					position='top'
					actionIcon={
						<Button
							variant='text'
							size='small'
							style={{ backgroundColor: '#000080', color: '#FFFFFF' }}
							onClick={() => props.onClick(i)}>
							{props.btnTitle}
						</Button>
					}
				/>
				<img src={i.Poster} srcSet={i.Poster} alt={i.Title} loading='lazy' />
				<ImageListItemBar title={i.Title} subtitle={i.Year} />
			</ImageListItem>
		);
	};

	return (
		<>
			<div>
				<h4 className='sectionTitle'> {props.sectionTitle}</h4>
				<ImageList sx={{ width: 500, height: 500 }}>
					{props.movieData !== undefined
						? props.movieData.map(displayMovie)
						: null}
				</ImageList>
			</div>
		</>
	);
};

export default MovieList;
