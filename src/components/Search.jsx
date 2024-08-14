import { useRef } from "react";

export const Search = ({ fun }) => {
    const artist = useRef();
    return (
        <>
            <label class="text-warning text-center"> Search Here:</label><br />
            <input ref={artist} type='text' className="form-control text-center" placeholder="Enter Artist Or Song Name Here..." />
            <br />
            <button className="btn btn-warning  btn-lg btn btn-outline-dark fw-bold fst-italic" onClick={() => {
                fun(artist.current.value);
                document.querySelector('#displaySongs').innerHTML="---HERE ARE YOUR SONGS---";
            }}>Search</button>
            <br />
            <br />
            <h3 id="displaySongs" className="text-center fw-bold text-warning">---SAMPLE SONGS---</h3><br />
        </>
    );
}

