import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms.js"
export default function Meaning(props) {
    return (
      <div className="Meaning">
        <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
        {props.meaning.definitions.map(function (definition, index) {
          if (definition.example){
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
            
              <p className="example">Example: {definition.example}</p>
            </div>
          );
        }else {
            return  (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
            </div>)
        }})}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
}