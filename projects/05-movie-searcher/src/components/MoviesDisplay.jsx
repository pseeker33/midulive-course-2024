
function DisplayMovieResults({ moviesArray }) {
  return (
    <ul className="movies">
      {moviesArray.map(movie => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function DisplayMovieNoResults() {
  return <p>No movies found.</p>;
}

export function MoviesDisplay({ moviesArray }) {
  const hasMovies = moviesArray?.length > 0;

  return hasMovies ? (
    <DisplayMovieResults moviesArray={moviesArray} />
  ) : (
    <DisplayMovieNoResults />
  );
}
