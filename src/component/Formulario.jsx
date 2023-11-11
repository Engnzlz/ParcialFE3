import { useState } from "react";
import Card from "./Card";
import React from "react";

function MusicaForm() {
  const [artista, setArtista] = useState("");
  const [cancion, setCancion] = useState("");
  const [album, setAlbum] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artista.trim().length < 3 || artista.trim()[0] === " ") {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    if (cancion.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    if (album.trim().length < 9 || album.trim()[0] === " ") {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    setError("");
    setArtista("");
    setCancion("");
    setAlbum("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label className="input">
        Artista
        <input
          className="box"
          type="text"
          value={artista}
          placeholder="Artista"
          onChange={(e) => setArtista(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cancion
        <input
          className="box"
          type="text"
          placeholder="Cancion"
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
        />
      </label>
      <label />
      <br />
      <label>
        Album
        <input
          className="box"
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
      </label>
      <label />
      <br />
      <button type="submit">Agregar</button>
      {error && <p>{error}</p>}
      <Card
        title={cancion}
        description={`Artista: ${artista}, Álbum: ${album}`}
      />
    </form>
  );
}

export default MusicaForm;
