// メイン画面に表示するカード、表示テスト用
// "use client";
import Image from "next/image";

type Props = {
  pokeData: JaHrktPokeData;
};

export const TopCard = ({ pokeData }: Props) => {
  let pokemonId = pokeData.id;

  let pokemonNameDetail = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;

  return (
    // 取得したjsonデータから一匹ごと詳細をカードに表示
    <div className="">
      <div className="flex flex-col items-center ">
        <div>
          <div>
            <Image
              // ボーダーあり　白背景
              //   className="p-4 bg-white border-solid border-4 rounded-md border-gray-900"
              //   ボーダーなし
              src={pokeData.imageSourceURL}
              alt={`${pokeData.jaName}`}
              height={"250"}
              width={"250"}
            />
          </div>
        </div>
        <div className="flex flex-col items-center m-3 whitespace-nowrap ">
          <div className="flex flex-row items-center">
            <div className="pr-2 font-semibold text-xs md:text-lg">
              No.{`${pokeData.id}`}:
            </div>
            <div>
              <h3 className="py-1 text-sm md:text-xl lg:text-xl">
                {pokeData.jaName}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
