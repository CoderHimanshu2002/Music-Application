export const Player = ({ fun, song }) => {
    return (
        <div>
            
            <button onClick={()=>
            {
              fun(false,null);
            }} className="btn btn-warning btn-lg btn btn-outline-dark fst-italic fw-bold ">Back to Songs</button><br /><br />
            <p className="text-warning bg-dark emphasis text-center myClass border rounded border-1 border-warning">
            <img src={song.artworkUrl100} width="200px" class="object-fit-contain border rounded border border-3 border-warning" />
            <br /><br />
                Artists: {song?.artistName} <br />Song: {song?.trackName}
            </p>
            <audio id="player" controls>
                <source src={song?.previewUrl} type="audio/mp4" />
            </audio>
        </div>)
}  