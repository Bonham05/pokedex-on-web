type ToPokemonsJsonData = {
  name: string;
  url: string;
};

type PokemonDetailData = {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {};
  stats: [];
  types: [];
  weight: number;
};

type InitialData = {
  count: number;
  next: string;
  previous: null;
  results: PokeName[];
};

type PokeName = {
  name: string;
  url: string;
};

type JaHrktPokeData = {
  jaName: string;
  jaGenus: string;
  jaFlavor_text: string;
  id: string;
  imageSourceURL: string;
};
