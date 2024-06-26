// ポケモンデータ取得
const initialURL = "https://pokeapi.co/api/v2/pokemon";
const allPokemonURLFirstGen =
  "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";

export const fetchAllPokemonData = async () => {
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
