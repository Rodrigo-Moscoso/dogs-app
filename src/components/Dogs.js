import React from "react";
import useSWR from "swr";

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
      <h1>ID del Can: {data[0].id}</h1>
      <img
        src={data[0].url}
        alt="perrito"
        height={data[0].height}
        width={data[0].width}
      />
      {console.log(data)}
    </div>
  );
}

export default Dogs;
