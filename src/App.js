import React, { useEffect, useState } from "react";
import Music from "./components/Music";
import uuidv4 from "uuid/dist/v4";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [musicData, setMusicData] = useState([]);
  const [state, setState] = useState(false);

  const getMusicData = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${inputText}` //https://cors-anywhere.herokuapp.com
    );
    const data = await res.json();
    setMusicData(data.data);
    setInputText("");
  };

  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <a
        className={`${state ? "show-music-h1" : ""}`}
        style={{ color: "white" }}
        href="https://cors-anywhere.herokuapp.com"
        target="_blank"
      >
        Click to start server
      </a>
      <form className={`search ${state ? "show-music" : ""}`}>
        <h1 className={`${state ? "show-music-h1" : ""}`}>
          Looking for a Song?
        </h1>
        <input
          onChange={inputTextHandler}
          type="text"
          className="search-input"
          placeholder="Track Name, Artist Name"
          value={inputText}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setState(true);
            getMusicData(e);
          }}
          className="search-button"
        >
          Search
        </button>
      </form>
      <div className="all-music">
        {musicData.map((x) => (
          <Music
            key={uuidv4()}
            title={x.title}
            artist={x.artist.name}
            album={x.album.title}
            image={x.album.cover_medium}
            audio={x.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
