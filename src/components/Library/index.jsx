// src/components/Library.js

import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../../redux/slices/librarySlice"
import { LibraryContainer, Title, SongItem, RemoveButton } from "./style";


function Library() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.library);
  console.log(songs);

  return (
    <LibraryContainer>
      <Title>Mi Biblioteca</Title>
      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        songs.map((song) => (
          <SongItem key={song.idTrack}>
            <p><strong>{song.strTrack}</strong> - {song.strArtist}</p>
            <RemoveButton onClick={() => dispatch(removeSong(song.idTrack))}>
              Eliminar
            </RemoveButton>
          </SongItem>
        ))
      )}
    </LibraryContainer>
  );
}

export default Library;