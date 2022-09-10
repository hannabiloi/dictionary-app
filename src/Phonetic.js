import React from "react";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);
  function start() {
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <p>{props.phonetic.text}</p>
        <i className="fa-regular fa-circle-play" onClick={start}></i>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <p>{props.phonetic.text}</p>
      </div>
    );
  }
}
