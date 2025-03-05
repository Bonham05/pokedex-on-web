// 初代ポケモンのみ
// トップでポケモン一覧表示
// "use client";
import Navbar from "./components/Navbar";
import {
  fetchAllPokemonData,
  getAllPokemonData,
  getJaHrktPokemonData,
} from "./lib/pokemonData";
import Link from "next/link";
import PokemonList from "./components/PokemonList";
import ListItem from "./components/ListItem";
import { Suspense } from "react";
import { TopCard } from "./components/TopCard";
import PokemonIndex from "./components/PokemonIndex";
import { log } from "console";

export default async function Home() {
  // const [pokemonData, setPokemonData] = useState<PokemonDetailData[]>([]);
  const pokemonData = [] as PokemonDetailData[];
  // const [selectedPokemon, setSelectedPokemon] = useState("1");
  let selectedPokemon = 151;
  // const [pokemonName, setPokemonName] = useState<any>([]);

  // 全ポケモン取得

  const allPokeData = await getAllPokemonData();

  // const res = await fetchAllPokemonData();
  // const { results } = res;
  // // console.log("app", res);

  // // const url = "https://pokeapi.co/api/v2/pokemon/11/";

  // const allPokeData: JaHrktPokeData[] = [];
  // // 日本語データの名前、種類、フレーバーテキスト、画像URLを取得
  // for (const poke of results) {
  //   const { url } = poke;
  //   // console.log("poke", url);

  //   const serchId = url.slice(34, url.length - 1);
  //   // console.log("serchId: ", serchId);

  //   // console.log("poke", serchId);

  //   const data = await getJaHrktPokemonData(serchId);
  //   // console.log(data.jaName);
  //   allPokeData.push(data);
  //   // console.log(jaName, "\n", jaGenus, "\n", jaFlavor_text_entries);
  // }

  // const pokeData = allPokeData[selectedPokemon - 1];
  // console.log(allPokeData[selectedPokemon - 1]);

  return (
    <>
      <main className="">
        {/* ポケモン一覧表示 */}
        <div className="flex flex-col  max-h-screen mx-auto bg-green-100 md:w-3/5">
          <Navbar />
        </div>
        <div className="flex flex-row  max-h-screen mx-auto bg-green-100 p-4 md:w-3/5">
          <PokemonIndex allPokeData={allPokeData} />
        </div>
      </main>
    </>
  );
}
