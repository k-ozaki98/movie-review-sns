import React, { useState, useEffect } from 'react';
import { getPopularMovies, Movie } from '../services/tmdbService';

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const results = await getPopularMovies();
      setMovies(results);
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;