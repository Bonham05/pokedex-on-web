import React from "react";
import { fetchAllPokemonData, getJaHrktPokemonData } from "../lib/pokemonData";
import ListItem from "./ListItem";

type item = {
  name: string;
};

export default async function PokemonList(data: {
  allPokeData: JaHrktPokeData[];
}) {
  const { allPokeData } = data;

  return (
    <div>
      {allPokeData.map((result, i) => (
        <ListItem key={i} id={allPokeData[i].id} name={result.jaName} />
      ))}
    </div>
  );
}
