import { POKEMON_GET, POKEMON_GET_SUCCESS, POKEMON_GET_ERROR, SET_SEARCH_TEXT } from "./Search.action";
import { POKEMONS_DATA_GET, POKEMONS_DATA_GET_SUCCESS, POKEMONS_DATA_GET_ERROR, POKEMON_DATA_SET, POKEMON_DATA_SET_SUCCESS, POKEMON_DATA_SET_ERROR } from "../pokedex/Pokedex.actions";
import { Alert } from "react-native";

const initialState = {
	loading: false,
	error: false,
	pokemon: null,
	searchable: true
}

export function SearchReducer(state: any = initialState, action: any) {
	switch (action.type) {
		case SET_SEARCH_TEXT:
			return {
				searchText: action.payload,
				searchable: !action.payload
			}
		case POKEMON_GET:
			return {
				...state,
				loading: true
			}
		case POKEMON_GET_SUCCESS:
			return {
				...state,
				pokemon: action.payload,
				loading: false
			}
		case POKEMON_GET_ERROR:
			return {
				...state,
				error: true,
				loading: false
			}

		case POKEMONS_DATA_GET:
			return {
				...state
			}
		case POKEMONS_DATA_GET_SUCCESS:
			return {
				...state,
				pokemonsData: action.payload
			}
		case POKEMONS_DATA_GET_ERROR:
			return {
				...state,
				error: true
			}

		case POKEMON_DATA_SET:
			return {
				...state,
				loading: true
			}
		case POKEMON_DATA_SET_SUCCESS:
			return {
				...state,
				pokemons: action.payload,
				pokemon: null,
				loading: false
			}
		case POKEMON_DATA_SET_ERROR:
			return {
				...state,
				error: true,
				pokemons: {error: 'teste'},
				loading: false
			}
		default:
			return state;
	}
}
