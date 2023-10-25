import React, { useState } from 'react';
import { movieDummy } from "./movieDummy";
import Movie from './Components/Movie/movie';
import {MovieContainer} from './Components/Movie/Movie.style';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMouseLeave = () => {
    setSelectedMovie(null);
  }

  return (
    <div style={{ backgroundColor: 'rgb(24, 30, 109)' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Movies</h1>
      <MovieContainer>
        {movieDummy.results.map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </MovieContainer>
    </div>
  );
}

export default App;