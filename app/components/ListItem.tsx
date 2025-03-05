import React from "react";
import { getJaHrktPokemonData } from "../lib/pokemonData";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
};

export default function ListItem({ id, name }: Props) {
  return (
    <>
      <div className="flex text-xs items-center w-full sm:text-base">
        <div className="monster-ball">
          {/* モンスターボールアイコン */}
          <p>@</p>
        </div>
        <div className="pl-2 w-16">{id}</div>
        <div>
          <Link
            href={{
              pathname: `/pokemons/${id}`,
              // query: { url: pokemonData.url },
            }}
          >
            <h1 className="p-2">&nbsp;{name}</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
