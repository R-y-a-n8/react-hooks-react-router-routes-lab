import React from "react";

import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <ul>
            <li>Name: {movie.title}</li>
            <li>Time: {movie.time}</li>
            <li>Genres: {movie.genres.join(', ')}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;

