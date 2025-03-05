// ポケモンデータ取得
const initialURL = "https://pokeapi.co/api/v2/pokemon";

const allPokemonURLFirstGen =
  "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";

const pokemonSpieciesURL = "https://pokeapi.co/api/v2/pokemon-species/";

const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/";

export const fetchAllPokemonData = async (): Promise<InitialData> => {
  const res = await fetch(allPokemonURLFirstGen);
  return res.json();
};

export const getEachPokemon = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const getPokemonSpecies = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

// export const getPokemonImageSource = (id: string) => {
//   const imageSource = imageUrl + id + ".png";
//   return imageSource;
// };

export const getJaHrktPokemonData = async (
  pokemonId: string
): Promise<JaHrktPokeData> => {
  // console.log("id get:", pokemonId);

  const response = await fetch(pokemonSpieciesURL + pokemonId);
  const result = await response.json();
  // console.log(result);

  // 名前
  const jaName = result.names.find(
    (name: any) => name.language.name === "ja-Hrkt"
  ).name;

  // 種族（〇〇ポケモン）
  const jaGenus = result.genera.find(
    (name: any) => name.language.name === "ja-Hrkt"
  ).genus;

  // フレーバーテキスト（説明分）
  const jaFlavor_text = result.flavor_text_entries.find(
    (name: any) => name.language.name === "ja-Hrkt"
  ).flavor_text;

  // 図鑑番号
  const id = String(result.id);

  // 画像URL
  const imageSourceURL = imageUrl + id + ".png";

  return { jaName, jaGenus, jaFlavor_text, id, imageSourceURL };
};

export const getAllPokemonData = async () => {
  const res = await fetchAllPokemonData();
  const { results } = res;
  // console.log("app", res);

  // const url = "https://pokeapi.co/api/v2/pokemon/11/";

  const allPokeData: JaHrktPokeData[] = [];
  // 日本語データの名前、種類、フレーバーテキスト、画像URLを取得
  for (const poke of results) {
    const { url } = poke;
    // console.log("poke", url);

    const serchId = url.slice(34, url.length - 1);
    // console.log("serchId: ", serchId);

    // console.log("poke", serchId);

    const data = await getJaHrktPokemonData(serchId);
    // console.log(data.jaName);
    allPokeData.push(data);
    // console.log(jaName, "\n", jaGenus, "\n", jaFlavor_text);
  }

  return allPokeData;
};

// export const loadPokemon = async (data: ToPokemonsJsonData[]) => {
//   let _pokemonData = await Promise.all(
//     data.map((pokemon) => {
//       // console.log(pokemon);
//       let pokemonRecord = getEachPokemon(pokemon.url);
//       return pokemonRecord;
//     })
//   );
//   // setPokemonData(_pokemonData);
// };

// lib切り出し
// export const loadPokemonName = async (pokemonURL: any, setPokemonName: any) => {
//   let response = await fetch(pokemonURL);
//   let result = await response.json();
//   let jaName = result.names.find(
//     (name: any) => name.language.name === "ja"
//   ).name;
//   setPokemonName(jaName);
// };

// export const loadPokemonName = async (pokemonURL: any => {
//   let response = await fetch(pokemonURL);
//   let result = await response.json();
//   let jaName = result.names.find(
//     (name: any) => name.language.name === "ja"
//   ).name;
//   // setPokemonName(jaName);
//   return jaName;
// };
