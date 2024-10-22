import { useState } from "react";

export const Song = ({ fun, song }) => {
  console.log(song);
  const [playerFlag, setPlayerFlag] = useState(false);
  const showPlayer = () => {
    fun(true, song);
  };
  return (
    <div className="card my-card border-warning bg-success" style={{ width: "15rem" }} onClick={showPlayer}>
      <img
        className="card-img-top card-img border-warning"
        style={{}}
        src={song.artworkUrl100}
        alt="Card image cap"
      />
      <div className="card-body">
        <div style={{ marginLeft: "25px" }}>
          <h5 className="card-title fw-bold fs-4">{song.trackName}</h5>
          <h4 className="card-text text-warning fw-bold">Artists : </h4>
          <h4>{song.artistName}</h4>
          <h3 className="text-warning fw-bold">Genre : </h3>
          <h4>{song.primaryGenreName}</h4>
        </div>

        <button
          onClick={showPlayer}
          className="btn btn-warning  btn btn-outline-dark"
          id="playButton"
        >
          <img
            src="images.jpeg"
            alt="Play"
            height="30px"
            width="50px"
            className="object-fit-contain border-warning border-3 border rounded"
          />
        </button>
      </div>
    </div>
  );
};
