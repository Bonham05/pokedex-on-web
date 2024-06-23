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
