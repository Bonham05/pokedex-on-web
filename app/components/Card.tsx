//一覧に表示するカード
// "use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import { getEachPokemon, getPokemonSpecies } from "@/app/lib/pokemonData";

// const Card = ({ pokemon }: any) => {
//   return (
//     <div className="m-5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//       <div>image </div>
//       <div>
//         <h1>{pokemon.name}</h1>
//       </div>
//     </div>
//   );
// };

const Card = ({ pokemon }: any) => {
  // console.log(pokemon);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonTypeURL, setPokemonTypeURL] = useState<any>([]);

  useEffect(() => {
    loadPokemonType(resPokemonTypes);
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

  let resPokemonTypes = pokemon.types.map((v: any) => {
    let typesURL = v.type.url;
    return typesURL;
  });

  const loadPokemonType = async (data: any) => {
    let _pokemonType = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonTypeDetail = await getEachPokemon(pokemon);
        let jaName = pokemonTypeDetail.names.find(
          (name: any) => name.language.name === "ja"
        ).name;
        return jaName;
      })
    );
    let joinedTypes = _pokemonType.join(" / ");
    setPokemonTypeURL(joinedTypes);
  };

  const name = pokemon.id;
  const pokemonDetail = async () => {
    let res = await getEachPokemon(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );
    // console.log(res);
  };

  // const species = await getPokemonSpecies(
  //   `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`
  // );

  const pokename = pokemonDetail();
  //   スプライト
  //   //   デフォルトドット絵
  //   const imgURLDefault = pokemon.sprites.front_default;
  //   //   オフィシャルアートワーク
  //   const imgURLOfficialArtWork =
  //     pokemon.sprites.other["official-artwork"].front_default;
  //   // 初代(赤緑青版)
  //   const imgURLRedToBlue =
  //     pokemon.sprites.versions["generation-i"]["red-blue"].front_default;
  // 初代(ピカチュウ版)
  const imgURLYellow =
    pokemon.sprites.versions["generation-i"].yellow.front_default;
  //   // 第2世代(金版)
  //   const imgURLGold =
  //     pokemon.sprites.versions["generation-ii"].gold.front_default;
  //   // 第2世代(銀版)
  //   const imgURLSilver =
  //     pokemon.sprites.versions["generation-ii"].silver.front_default;
  //   // 第2世代(クリスタル版)
  //   const imgURLCrystal =
  //     pokemon.sprites.versions["generation-ii"].crystal.front_default;

  return (
    // 取得したjsonデータから一匹ごと詳細をカードに表示
    <div className="hover:border-gray-900 hover:border-2 p-2 hover:p-0 rounded-md">
      <div className="flex flex-col items-center ">
        {/* <Link href={`/pokemons/${pokemon.url}`}> */}
        <div>
          <div>
            <img
              className="p-4 bg-white border-solid border-4 rounded-md border-gray-900"
              height={"160"}
              width={"160"}
              src={imgURLYellow}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center m-3 whitespace-nowrap">
          <div className="flex flex-row items-center">
            <div className="pr-2 font-semibold">No.{pokemon.id}:</div>
            <div>
              <h3 className="cardName py-1 text-lg">{pokemonName}</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="">
              <h2 className="pt-2 pb-1">タイプ</h2>
            </div>
            <div className="flex flex-row flex-nowrap pt-2">
              <p>{pokemonTypeURL}</p>
              {/* {pokemon.types.map((type: any) => {
            {
              // console.log("タイプ:", pokemon.types);
            }
            if (type.slot == 1) {
              // console.log("スロット１:", type.type.name);
              return (
                <div className="pr-1" key={type.type.name}>
                  <p className="typeName">{type.type.name}</p>
                </div>
              );
            } else if (type.slot == 2) {
              // console.log("スロット2:", type.type.name);
              return (
                <div className="" key={type.type.name}>
                  <p className="typeName">/ {type.type.name}</p>
                </div>
              );
            }
          })} */}
            </div>
          </div>
        </div>
        <div className="cardData">
          <p className="pb-1">たかさ : {pokemon.height / 10}m</p>
          <p className="pb-1">おもさ : {pokemon.weight / 10}kg</p>
          {/* <p className="title">とくせい:{pokemon.abilities[0].ability.name}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
