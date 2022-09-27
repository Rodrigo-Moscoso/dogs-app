import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Cards({ idDog }) {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

  if (error) return "Ha ocurrido un errorcillo.";
  if (!data) return "... estamos cargando, paciencia gente.";
  console.log(data);
  console.log(idDog);

  return (
    <div>
      <h1>Soy Componente Cards</h1>
    </div>
  );
}

export default Cards;
