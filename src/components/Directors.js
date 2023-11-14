import React from 'react';

// Example data (replace this with your actual data)
const directorsData = [
  { id: 1, name: 'Director 1', movies: ['Movie 1', 'Movie 2'] },
  { id: 2, name: 'Director 2', movies: ['Movie 3', 'Movie 4'] },
  // Add more directors as needed
];

const Directors = () => {
  return (
    <div>
      <h1>Directors </h1>

      {/* Map through directorsData to render each director */}
      {directorsData.map((director) => (
        <div key={director.id} className="director-container">
          <h2>{director.name}</h2>

          {/* Render movies as an unordered list */}
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;


