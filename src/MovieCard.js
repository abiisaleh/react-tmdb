function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src="#" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.releaseYear}</p>
      </div>
    </div>
  );
}

export default MovieCard;
