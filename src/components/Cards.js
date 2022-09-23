import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher2 = (url) => fetch(url).then((res) => res.json());

function Cards() {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/images/search",
    fetcher
  );

  const { data2, error2 } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher2
  );

  if (error) return "Un error ha ocurrido";
  if (error2) return "Un error 2 ha ocurrido";
  if (!data) return "... paciencia, estamos cargando ...";
  console.log(data2);

  return (
    <div>
      <h1>Perrito 1</h1>
      <h3>ID: {data[0].id}</h3>
      <img src={data[0].url} alt="perrito" height="100" width="100" />
      <h4>Temperamento: </h4>
      <p></p>
    </div>
  );
}

export default Cards;
