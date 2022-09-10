import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms.js"
export default function Meaning(props) {
    return (
      <div className="Meaning">
        <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <p className="example">{definition.example}</p>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
}