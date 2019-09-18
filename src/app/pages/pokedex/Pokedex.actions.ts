import { action } from 'typesafe-actions';

export const POKEMONS_DATA_GET = 'POKEMONS_DATA_GET';
export const POKEMONS_DATA_GET_SUCCESS = 'POKEMONS_DATA_GET_SUCCESS';
export const POKEMONS_DATA_GET_ERROR = 'POKEMONS_DATA_GET_ERROR';

export const POKEMON_DATA_GET = 'POKEMON_DATA_GET';
export const POKEMON_DATA_GET_SUCCESS = 'POKEMON_DATA_GET_SUCCESS';
export const POKEMON_DATA_GET_ERROR = 'POKEMON_DATA_GET_ERROR';

export const POKEMON_DATA_SET = 'POKEMON_DATA_SET';
export const POKEMON_DATA_SET_SUCCESS = 'POKEMON_DATA_SET_SUCCESS';
export const POKEMON_DATA_SET_ERROR = 'POKEMON_DATA_SET_ERROR';

export const POKEMON_DATA_REMOVE = 'POKEMON_DATA_REMOVE';
export const POKEMON_DATA_REMOVE_SUCCESS = 'POKEMON_DATA_REMOVE_SUCCESS';
export const POKEMON_DATA_REMOVE_ERROR = 'POKEMON_DATA_REMOVE_ERROR';

export const pokemonsDataGet = () => action(POKEMONS_DATA_GET);
export const pokemonDataGet = (pokemonId: number) => action(POKEMON_DATA_GET, pokemonId);
export const pokemonDataSet = (pokemon: any) => action(POKEMON_DATA_SET, pokemon);
export const pokemonDataRemove = (pokemonId: number) => action(POKEMON_DATA_REMOVE, pokemonId);
