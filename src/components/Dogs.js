import React from "react";
import useSWR from "swr";
import Cards from "./Cards";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Dogs() {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

  if (error) return "Un error ha ocurrido";
  if (!data) return "... paciencia, estamos cargando ...";
  console.log(data);

  const perroRandom1 = Math.floor(Math.random() * data.length);
  const perroRandom2 = Math.floor(Math.random() * data.length);
  console.log(data[perroRandom1]);

  return (
    <div>
      <div style={{ alignSelf: "center", margin: "30px" }}>
        <button onClick={() => window.location.reload()}>
          Recargar Página
        </button>
        <Cards
          nameDog={data[perroRandom1].name}
          urlDog={data[perroRandom1].image.url}
          temperamentDog={data[perroRandom1].temperament}
          life_spanDog={data[perroRandom1].life_span}
        />
        <Cards
          nameDog={data[perroRandom2].name}
          urlDog={data[perroRandom2].image.url}
          temperamentDog={data[perroRandom2].temperament}
          life_spanDog={data[perroRandom2].life_span}
        />
      </div>
    </div>
  );
}

export default Dogs;
