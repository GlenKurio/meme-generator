import React from "react";
import { useState } from "react";
import "./meme.css";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const [allMemes, setAllMemes] = React.useState([]);

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <fieldset>
          <div>
            <label htmlFor="top">Top Text:</label>
            <input
              id="top"
              type="text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="bottom">Bottom Text:</label>
            <input
              id="bottom"
              type="text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <button onClick={getMemeImage}>Generate Meme Image ✨</button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt="Image with a random meme"
          className="memeImg"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
