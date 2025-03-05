"use client";
import {
  fetchAllPokemonData,
  getJaHrktPokemonData,
} from "@/app/lib/pokemonData";
import Link from "next/link";
import PokemonList from "@/app/components/PokemonList";
import ListItem from "@/app/components/ListItem";
import { Suspense, useState } from "react";
import { TopCard } from "@/app/components/TopCard";

type Props = {
  allPokeData: JaHrktPokeData[];
};

export default function PokemonIndex({ allPokeData }: Props) {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  //   let selectedPokemon = 151;

  const pokeData = allPokeData[selectedPokemon];

  return (
    <>
      <div className="flex w-2/4 mx-auto items-start overflow-auto">
        <div className="w-full">
          {/* <div className="grid grid-cols-3 items-center justify-center"> */}
          <div className="flex pt-2 pb-4 justify-center w-full">もくじ</div>
          <div className="flex items-center w-full">
            {/* <Card pokemon={pokemonData} />
             */}
            {/* トップページ左側　ポケモン一覧のリスト */}
            <div className="h-full w-full">
              {/* <PokemonList allPokeData={allPokeData} /> */}
              {allPokeData.map((result, i) => (
                <div key={i} onMouseEnter={() => setSelectedPokemon(i)}>
                  <ListItem key={i} id={result.id} name={result.jaName} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* トップページ右部分 */}
      {/* カード表示 */}
      <div className="w-2/4">
        <Link
          href={{
            pathname: `/pokemons/${pokeData.id}`,
          }}
        >
          <div className="px-5">
            <div className="m-4 h-full rounded-md mb-20">
              <Suspense fallback={<div>よみこみちゅう...</div>}>
                {/* <CardOnTopPage selectedPokemonId={selectedPokemon} /> */}
                <TopCard pokeData={pokeData} />
              </Suspense>
            </div>
          </div>
        </Link>
        {/* みつけた、つかまえたかず表示 */}
        <div className="flex flex-col items-center justify-center  text-center pb-6 md:text-lg lg:text-xl">
          <div className="p-2">
            <h1>みつけたかず</h1>
            <p>151</p>
          </div>
          <div className="p-2">
            <h1>つかまえたかず</h1>
            <p>151</p>
          </div>
        </div>
      </div>
    </>
  );
}
