import { action } from 'typesafe-actions';

export const POKEMONS_GET = 'POKEMONS_GET';
export const POKEMONS_GET_SUCCESS = 'POKEMONS_GET_SUCCESS';
export const POKEMONS_GET_ERROR = 'POKEMONS_GET_ERROR';

export const POKEMON_GET = 'POKEMON_GET';
export const POKEMON_GET_SUCCESS = 'POKEMON_GET_SUCCESS';
export const POKEMON_GET_ERROR = 'POKEMON_GET_ERROR';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const pokemonGet = (filter?: string | number) => action(POKEMON_GET, filter);
export const pokemonsGet = (options?: any) => action(POKEMONS_GET, options);
export const setSearchText = (searchText: string) => action(SET_SEARCH_TEXT, searchText);
