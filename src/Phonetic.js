import React from "react";
import "./Phonetics.css"

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);
  function start() {
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <i className="fa-regular fa-circle-play" onClick={start}> </i>
        <span>{" "}{props.phonetic.text}</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <span>{props.phonetic.text}</span>
      </div>
    );
  }
}
