import { useState } from "react";
import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <img src="/imgs/troll-face-logo.png" alt="troll face logo" />
      <h1>Meme Generator</h1>
    </header>
  );
}
