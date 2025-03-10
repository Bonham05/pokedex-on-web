//個別のポケモン詳細ページ
// "use client";

import Image from "next/image";
import {
  getAllPokemonData,
  getEachPokemon,
  getJaHrktPokemonData,
  getPokemonSpecies,
} from "@/app/lib/pokemonData";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    pokemonId: string;
  };
};

export async function generateStaticParams() {
  const pokeData = await getAllPokemonData();

  return pokeData.map((data) => ({
    pokemonId: data.id,
  }));
}

export default async function pokemonPage({ params: { pokemonId } }: Props) {
  const pokemonDetail: PokemonDetailData = await getEachPokemon(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  // const species = await getPokemonSpecies(
  //   `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonName}/`
  // );

  // console.log("id:", pokemonId);

  const { jaName, jaGenus, jaFlavor_text, id, imageSourceURL } =
    await getJaHrktPokemonData(pokemonId);

  let currentPokeId = Number(pokemonId);
  if (currentPokeId == 0 || currentPokeId > 151) {
    return notFound();
  }

  return (
    <>
      <main className="text-xl overflow-auto ">
        {/* 画面上部　ポケモン画像、詳細 */}
        <div className=" bg-green-100 min-h-screen mx-auto border-solid border-8 border-gray-900 rounded-md md:w-3/5">
          <div className="flex h-1/2 justify-around items-center text-xl ">
            {/* 画面上部左　画像、ナンバー */}
            <div className="flex flex-col items-center text-2xl w-5/12">
              <Image
                // ボーダーあり　白背景
                // className="mt-10 p-3 bg-white border-solid border-4 rounded-md border-gray-900 -scale-x-100"
                // ボーダーなし
                className="mt-10 p-3 border-gray-900 -scale-x-100"
                src={imageSourceURL}
                alt={`${jaName}`}
                height={250}
                width={250}
              />
              <div className="flex items-center">
                <div>
                  <p>No.</p>
                </div>
                <div>
                  <p className="p-2 text-2xl">{id}</p>
                </div>
              </div>
            </div>
            {/* 画面上部右　名前、種類、たかさ、おもさ */}
            <div className="justify-center items-center w-7/12 h-full lg:text-2xl">
              <div className="grid grid-rows-4 ">
                <div className="flex p-4 justify-center items-center">
                  {jaName}
                </div>
                <div className="flex m-2 justify-center items-center">
                  {jaGenus}
                </div>
                <div>
                  <div className=" flex justify-center items-center">
                    <div className="p-3">
                      <h3>たかさ</h3>{" "}
                    </div>
                    <div className="p-2">{pokemonDetail.height / 10}</div>
                    <div>m</div>
                  </div>
                  <div className=" flex justify-center items-center ">
                    <div className="p-3">おもさ </div>
                     <div className="p-2">{pokemonDetail.weight / 10}</div>
                    <div>kg</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>name : {serchParams.url}</div> */}
          </div>
          {/* <div className="w-screen flex justify-center items-center h-1 border-8 border-gray-500"></div> */}
          {/* 中央ボーダー */}
          <hr className="mx-auto bg-black border-8 border-gray-900 z-10" />
          {/* 画面下部 　フレーバーテキスト、ページ移動ボタン*/}
          <div className="h-1/2">
            {/* フレーバーテキスト */}
            <div className="p-8 justify-around items-center text-xl">
              {jaFlavor_text}
            </div>
            <div className="p-4 flex flex-col justify-center">
              {/* ページ移動ボタン */}
              <div className="grid grid-cols-3 gap-2 text-center">
                {currentPokeId != 1 ? (
                  <Link href={`/pokemons/${currentPokeId - 1}`}>
                    <h3 className="hover:bg-slate-50">まえへ</h3>
                  </Link>
                ) : (
                  <div></div>
                )}
                <Link href={"/"}>
                  <h3 className="hover:bg-slate-50">もどる</h3>
                </Link>
                {currentPokeId != 151 ? (
                  <Link href={`/pokemons/${currentPokeId + 1}`}>
                    <h3 className="hover:bg-slate-50">つぎへ</h3>
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
