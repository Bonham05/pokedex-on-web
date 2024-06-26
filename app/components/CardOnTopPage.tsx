// メイン画面に表示するカード、表示テスト用
"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";

const CardOnTopPage = ({ selectedPokemonId }: any) => {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonTypeURL, setPokemonTypeURL] = useState<any>([]);
  const [pokemonSpieciesURL, setPokemonSpieciesURL] = useState("");

  let pokemonId = parseInt(selectedPokemonId);

  let pokemonNameDetail = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
  //   setPokemonSpieciesURL(
  //     `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemonId}`
  //   );

  useEffect(() => {
    // loadPokemonType(resPokemonTypes);
    loadPokemonName(pokemonNameDetail);
    // loadPokemonName(pokemonNameDetail);
    // loadPokemonAbility(resPokemonAbility);
  }, [pokemonNameDetail]);

  // console.log(pokemonNameDetail);

  const loadPokemonName = async (data: any) => {
    let response = await fetch(data);
    let result = await response.json();
    let jaName = result.names.find(
      (name: any) => name.language.name === "ja"
    ).name;
    setPokemonName(jaName);
  };

  //   let resPokemonTypes = pokemon.types.map((v: any) => {
  //     let typesURL = v.type.url;
  //     return typesURL;
  //   });

  //   const loadPokemonType = async (data: any) => {
  //     let _pokemonType = await Promise.all(
  //       data.map(async (pokemon: any) => {
  //         let pokemonTypeDetail = await getEachPokemon(pokemon);
  //         let jaName = pokemonTypeDetail.names.find(
  //           (name: any) => name.language.name === "ja"
  //         ).name;
  //         return jaName;
  //       })
  //     );
  //     let joinedTypes = _pokemonType.join(" / ");
  //     setPokemonTypeURL(joinedTypes);
  //   };

  //   const name = pokemon.id;
  //   const pokemonDetail = async () => {
  //     let res = await getEachPokemon(
  //       `https://pokeapi.co/api/v2/pokemon-species/${name}`
  //     );
  //     // console.log(res);
  //   };
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
  // --デフォルト--
  //   const imgURLYellow =
  //     pokemon.sprites.versions["generation-i"].yellow.front_default;

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
    <div className="">
      <div className="flex flex-col items-center ">
        {/* <Link href={`/pokemons/${pokemon.url}`}> */}
        <div>
          <div>
            <Image
              // ボーダーあり　白背景
              //   className="p-4 bg-white border-solid border-4 rounded-md border-gray-900"
              //   ボーダーなし
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/${selectedPokemonId}.png`}
              alt={`${pokemonName}`}
              height={"250"}
              width={"250"}
            />
          </div>
        </div>
        <div className="flex flex-col items-center m-3 whitespace-nowrap ">
          <div className="flex flex-row items-center">
            <div className="pr-2 font-semibold text-xs md:text-lg">
              No.{`${selectedPokemonId}`}:
            </div>
            <div>
              <h3 className="py-1 text-sm md:text-xl lg:text-xl">
                {pokemonName}
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {/* <div className=""> */}
            {/* <h2 className="pt-2 pb-1">タイプ</h2> */}
            {/* </div> */}
            {/* <div className="flex flex-row flex-nowrap pt-2"> */}
            {/* <p>くさ</p> */}
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
            {/* </div> */}
          </div>
        </div>
        {/* <div className="cardData"> */}
        {/* <p className="pb-1">たかさ : 3m</p> */}
        {/* <p className="pb-1">おもさ : 33kg</p> */}
        {/* <p className="title">とくせい:{pokemon.abilities[0].ability.name}</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CardOnTopPage;
