// 初代ポケモンのみ
// トップでポケモン一覧表示
"use client";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import {
  fetchAllPokemonData,
  getEachPokemon,
  // loadPokemon,
} from "./lib/pokemonData";
import Link from "next/link";
import { log } from "console";
import Sidebar from "./components/Sidebar";
import CardOnTopPage from "./components/CardOnTopPage";

export default function Home() {
  const [pokemonData, setPokemonData] = useState<PokemonDetailData[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState("1");
  // const [pokemonName, setPokemonName] = useState<any>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //すべてのポケモンデータを取得
      let res = await fetchAllPokemonData();
      // console.log(res);
      loadPokemon(res.results);
      // loadPokemonName(res.results);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: ToPokemonsJsonData[]) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getEachPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // const loadPokemonName = async (data: ToPokemonsJsonData[]) => {
  //   let _pokemonName = await Promise.all(
  //     data.map((pokemon) => {
  //       // console.log(pokemon);
  //       let pokemonNameRecord = getEachPokemon(
  //         `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
  //       );
  //       return pokemonNameRecord;
  //     })
  //   );
  //   setPokemonName(_pokemonName);
  // };

  return (
    <>
      <div className="">
        {/* {console.log(pokemonData)} */}
        <main className="">
          {/* ポケモン一覧表示(20匹まで) */}
          <div className="flex flex-col  max-h-screen mx-auto bg-green-100 md:w-3/5">
            <Navbar />
          </div>
          <div className="flex flex-row  max-h-screen mx-auto bg-green-100 p-4 md:w-3/5">
            <div className="flex w-2/4 mx-auto items-start overflow-auto">
              <div className="w-full">
                {/* <div className="grid grid-cols-3 items-center justify-center"> */}
                <div className="flex pt-2 pb-4 justify-center w-full">もくじ</div>
                <div className="flex items-center w-full">
                  {/* <Card pokemon={pokemonData} />
                 */}
                  {/* トップページ左側　ポケモン一覧のリスト */}
                  <div className="h-full w-full">
                    {pokemonData.map((pokemon, i) => {
                      // console.log(pokemon);
                      return (
                        <div
                          key={i}
                          onMouseEnter={() => {
                            setSelectedPokemon(`${i + 1}`);
                          }}
                          className=""
                        >
                          <Sidebar key={i} pokemon={pokemon} />
                        </div>
                      );
                    })}
                  </div>
                  {/* <div>
                  {pokemonData.map((pokemon, i) => {
                    console.log(pokemonData);
                    return (
                      <>
                        <Link
                          key={i}
                          href={{
                            pathname: `/pokemons/${pokemon.id}`,
                            // query: { url: pokemonData.url },
                          }}
                        >
                          <Card key={i} pokemon={pokemon} />
                        </Link>
                      </>
                    );
                  })}
                </div> */}
                </div>
              </div>
            </div>
            {/* トップページ右部分 */}
            {/* カード表示 */}
            <div className="w-2/4">
              <Link
                href={{
                  pathname: `/pokemons/${selectedPokemon}`,
                  // query: { url: pokemonData.url },
                }}
              >
                <div className="h-3/5 px-5">
                  <div className="border-double border-4 m-4 h-full rounded-md ">
                    <CardOnTopPage selectedPokemonId={selectedPokemon} />
                  </div>
                </div>
              </Link>
              {/* みつけた、つかまえたかず表示 */}
              <div className="h-2/5 flex flex-col items-center justify-center text-xl text-center pb-6">
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
            {/* ページネーション部分 */}
            {/*           
          <div className="mx-auto p-8 text-lg">
            <p className="">Page Nation</p>
          </div> */}
          </div>
        </main>
      </div>
    </>
  );
}
