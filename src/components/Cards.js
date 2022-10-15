import React from "react";

function Cards({ nameDog, urlDog, temperamentDog, life_spanDog }) {
  return (
    <div style={{ background: "gray", margin: "30px" }}>
      <h1>Tarejeta Perruna</h1>
      <div>
        <h5>Nombre: </h5>
        <p>{nameDog}</p>
      </div>
      <div>
        <h5>Temperamento: </h5>
        <p>{temperamentDog}</p>
      </div>
      <div>
        <h5>Esperanza de Vida: </h5>
        <p>{life_spanDog}</p>
      </div>
      <br></br>
      <img src={urlDog} alt="perrito" height="100" width="100" />
      <br></br>
    </div>
  );
}

export default Cards;
