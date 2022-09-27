import React from "react";
import useSWR from "swr";
import Cards from "./Cards";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Dogs() {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/images/search",
    fetcher
  );

  if (error) return "Un error ha ocurrido";
  if (!data) return "... paciencia, estamos cargando ...";

  return (
    <div>
      <div>
        <h1>Perrito 1</h1>
        <h3>ID: {data[0].id}</h3>
        <img src={data[0].url} alt="perrito" height="100" width="100" />
        <h4>Temperamento: </h4>
        <Cards idDog={data[0].id} />
      </div>
    </div>
  );
}

export default Dogs;
