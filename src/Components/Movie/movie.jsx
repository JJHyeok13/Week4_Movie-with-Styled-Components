import React from 'react';
import {MovieBox} from './Movie.style';

const Movie = ({movie, handleMouseLeave}) => (
    <MovieBox onMouseLeave={handleMouseLeave}>
        <div className="movie-overview">
            <p>{movie.overview}</p>
        </div>
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='movie-poster'
        />
        <p className='movie-title'>{movie.title}</p>
        <p className='movie-grade'>{movie.vote_average}</p>
    </MovieBox>
);

export default Movie;