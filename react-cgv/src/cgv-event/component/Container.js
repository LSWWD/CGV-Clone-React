const Container = ({ movies }) => {
  return (
    <div className="event-container__outer">
      {movies.map((movie) => (
        <div key={movie.id} className="event-container__box">
          <div className="event-container__box--img">
            <img src={movie.src} alt={movie.position} />
          </div>
          <div className="event-container__box--text">
            <span>
              {movie.text.length >= 22
                ? movie.text.substring(0, 21) + "..."
                : movie.text}
            </span>
            <span>{movie.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
