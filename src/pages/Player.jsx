import { useLocation, useNavigate } from "react-router-dom";

function Player() {

  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state;

  if (!movie) {
    return <h2 style={{ color: "white" }}>Movie not found</h2>;
  }

  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "20px"
      }}
    >

      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          padding: "10px"
        }}
      >
        ⬅ Back
      </button>

      <h1>{movie.title}</h1>

      <video
        width="900"
        controls
        autoPlay
      >
        <source src={movie.video_url} type="video/mp4" />
      </video>

      <p>{movie.description}</p>

    </div>
  );
}

export default Player;