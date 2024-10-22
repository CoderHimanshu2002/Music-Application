import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";
 
export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);
  
  const loadSongs = async () => {
    setSongs(await getSongs('Hollywood'));
  }
  useEffect(() => {
    document.innerText='Loading Songs...';
    loadSongs();
  }, []);
  const togglePlayer = (flag, songarg) => {
    setPlayerSong(songarg);

    setFlag(flag);
  }
  const getArtistName = async (artistName) => {
    console.log('Recieved artist name.', artistName);
    setSongs(await getSongs(artistName));
  }
  const jsx = <>
    <Search fun={getArtistName} />
    <Songs  fun={togglePlayer} allSongs={allSongs} />
  </>
  return (<div className="container">
    <br />
    <h1 className=" text-center fw-bold fst-italic fs-2 shadow-lg p-3 mb-5 bg-dark-tertiary rounded
    border border-warning bg-success p-2 text-warning ">
      
      <img src="favicon2.jpg" className="rounded mx-auto d-block object-fit-contain border rounded border border-2 border-warning margin-class" width="120px" />
      MUSIC STORE</h1>


    {flag ? <Player fun={togglePlayer} song={song} /> : jsx}

  </div>);

}