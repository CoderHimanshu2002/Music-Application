import { Song } from "./Song";
let flag = 0;
export const Songs = ({ fun, allSongs }) => {
  if (allSongs.length === 0) {
    return (
      <>
        <div className="text-center text-warning fw-bold fst-italic fs-3 nodisp">
          Nothing to display , Kindly check your search !
        </div>
      </>
    );
  } else {
    console.log("******All Songs", allSongs);

    return (
      <>
        {allSongs.map((currentSong, index) => (
          <Song fun={fun} key={index} song={currentSong} />
        ))}
      </>
    );
  }
};
