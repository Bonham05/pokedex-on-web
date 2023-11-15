import React from "react";
import { useState, useEffect } from "react";

export default function Sidebar({ pokemon }: any) {
  const [pokemonName, setPokemonName] = useState([]);

  useEffect(() => {
    loadPokemonName(pokemonNameDetail);
    // loadPokemonAbility(resPokemonAbility);
  }, []);

  let pokemonNameDetail = pokemon.species.url;

  const loadPokemonName = async (data: any) => {
    let response = await fetch(data);
    let result = await response.json();
    let jaName = result.names.find(
      (name: any) => name.language.name === "ja"
    ).name;
    setPokemonName(jaName);
  };

  return (
    <>
      <div className="flex">
        <div className="items-center w-16">{pokemon.id}</div>
        <div>
          <h1 className="p-2">{pokemonName}</h1>
        </div>
      </div>
    </>
  );
}
