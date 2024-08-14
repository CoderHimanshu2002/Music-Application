import { useState } from "react";

export const Song = ({ fun, song }) => {
    console.log(song);
    const [playerFlag, setPlayerFlag] = useState(false);
    const showPlayer = () => {
        fun(true, song);
    }
    return (<div className="row">
        <div className="col-4">
            <img src={song.artworkUrl100} width="200px" class="object-fit-contain border rounded border border-2 border-warning" /><br /><br />
        </div>
        <div className="col-4 fontclass">
            <span className="text-warning">Artists :</span> {song.artistName} <br /><span className="text-warning">Song : </span> {song.trackName}
        </div>
        <div className="col-4">
            <button onClick={showPlayer} className="btn btn-warning  btn btn-outline-dark" id="playButton">
                <img src="images.jpeg" alt="Play" height="30px" width="50px" className="object-fit-contain border-warning border-3 border rounded"/>

            </button>
        </div>

    </div>)
}