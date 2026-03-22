import { useNavigate } from "react-router-dom";

function MovieRow({ title, movies }) {

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      <h2 style={{ color: "white" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto"
        }}
      >

        {movies.map(movie => (

          <div
            key={movie.id}
            style={{
              background: "#1c1c1c",
              padding: "15px",
              borderRadius: "10px",
              minWidth: "250px",
              color: "white"
            }}
          >

            <img
              src={movie.thumbnail}
              alt={movie.title}
              style={{
                width: "100%",
                borderRadius: "8px"
              }}
            />

            <h3>{movie.title}</h3>

            <p>Year: {movie.release_year}</p>

            <p style={{ fontSize: "14px" }}>
              {movie.description}
            </p>

            <button
              onClick={() =>
                navigate(`/player/${movie.id}`, { state: movie })
              }
              style={{
                background: "red",
                border: "none",
                padding: "10px",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              ▶ Watch
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MovieRow;