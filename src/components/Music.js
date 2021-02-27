import React from "react";

const Music = ({ title, audio, image, artist }) => {
  return (
    <div className="music-block">
      <img src={image} alt="" />
      <h2 className="title">{title}</h2>
      <p className="artist"> {artist} </p>
      <audio controls src={audio}></audio>
    </div>
  );
};

export default Music;
