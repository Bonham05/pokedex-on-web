//個別のポケモン詳細ページ
// "use client";

import { log } from "console";
import { getEachPokemon, getPokemonSpecies } from "@/app/lib/pokemonData";
import PokemonDetailCard from "@/app/components/PokemonDetailCard";
import { useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function pokemonPage({
  params,
}: //   serchParams,
{
  params: { pokemonName: string };
  //   serchParams: { url: string };
}) {
  //   console.log(params.pokemonName);

  const pokemonDetail = await getEachPokemon(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );

  const species = await getPokemonSpecies(
    `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonName}/`
  );
  // console.log(species.name);

  //   useEffect(() => {
  //     const getPokemon = async () => {
  //       await getEachPokemon(
  //         `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  //       );
  //     };
  //     const getSpecies = async () => {
  //       await getPokemonSpecies(
  //         `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonName}/`
  //       );
  //     };
  //     const pokemonDetail = getPokemon();
  //     const species = getSpecies();
  //   }, []);

  let currentPokeId = Number(params.pokemonName);
  if (currentPokeId <= 151) {
    return (
      <>
        <main className="text-xl overflow-auto ">
          <div className=" bg-green-200 w-3/5 min-h-screen mx-auto border-solid border-8 border-gray-900 rounded-md">
            <div className="flex justify-around items-center text-xl ">
              <div className="flex flex-col items-center text-2xl ">
                {/* 各バージョンのurl対応できるようにする */}
                <img
                  // ボーダーあり　白背景
                  // className="mt-10 p-3 bg-white border-solid border-4 rounded-md border-gray-900 -scale-x-100"
                  // ボーダーなし
                  className="mt-10 p-3 border-gray-900 -scale-x-100"
                  src={
                    // pokemonDetail.sprites.versions["generation-i"].yellow
                    //   .front_default
                    pokemonDetail.sprites.versions["generation-i"].yellow
                      .front_transparent
                  }
                  alt="${species.names[0].name}"
                  height={250}
                  width={250}
                />
                <div className="flex items-center">
                  <div>
                    <p>No.</p>
                  </div>
                  <div>
                    <p className="p-2 text-4xl">{species.id}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mr-10 my-5 ">
                <div className="text-2xl">{species.names[0].name}</div>
                <div className="m-2 text-lg">{species.genera[0].genus}</div>
                <div className=" flex items-center">
                  <div className="p-3">たかさ </div>
                  <div className="p-2">{pokemonDetail.height / 10}m</div>
                </div>
                <div className=" flex items-center ">
                  <div className="p-3">おもさ </div>
                  <div className="p-2">{pokemonDetail.weight / 10}kg</div>
                </div>
              </div>
              {/* <div>name : {serchParams.url}</div> */}
            </div>
            {/* <div className="w-screen flex justify-center items-center h-1 border-8 border-gray-500"></div> */}
            <hr className="mx-auto bg-black border-8 border-gray-900" />
            <div className="">
              <div className="p-8 m-5 justify-around items-center text-xl">
                {species.flavor_text_entries[22].flavor_text}
              </div>
              <div className="p-4 flex flex-col justify-center">
                <div className="flex flex-row justify-around">
                  {currentPokeId != 1 && (
                    <Link href={`/pokemons/${currentPokeId - 1}`}>
                      <h3>まえへ</h3>
                    </Link>
                  )}
                  <Link href={"/"}>
                    <h3 className="hover:bg-slate-50">もどる</h3>
                  </Link>
                  {currentPokeId != 151 && (
                    <Link href={`/pokemons/${currentPokeId + 1}`}>
                      <h3>つぎへ</h3>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return notFound();
  }
}
