import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      <div className="flex items-center w-full">
        <div className="pl-2 w-16">{pokemon.id}</div>
        <div>
        <Link
                href={{
                  pathname: `/pokemons/${pokemon.id}`,
                  // query: { url: pokemonData.url },
                }}
              >
          <h1 className="p-2">&nbsp;{pokemonName}</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
