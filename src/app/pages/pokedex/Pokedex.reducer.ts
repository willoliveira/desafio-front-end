import { POKEMONS_GET, POKEMONS_GET_SUCCESS, POKEMONS_GET_ERROR } from "../search/Search.action";
import { POKEMONS_DATA_GET_SUCCESS, POKEMONS_DATA_GET_ERROR, POKEMONS_DATA_GET, POKEMON_DATA_SET_SUCCESS, POKEMON_DATA_REMOVE_SUCCESS } from "./Pokedex.actions";

const initialState = {
	loading: false,
	error: false,
	pokemons: [ ]
}

export function PokedexReducer(state: any = initialState, action: any) {
	switch (action.type) {
		case POKEMONS_GET:
			return {
				...state,
				loading: true
			}
		case POKEMONS_GET_SUCCESS:
			return {
				...state,
				pokemons: Array.from(new Array(action.payload.count)).map((a, i) => i + 1),
				loading: false
			}
		case POKEMONS_GET_ERROR:
			return {
				...state,
				error: true,
				loading: false
			}
		case POKEMONS_DATA_GET:
			return {
				...state,
				loading: true
			}
		case POKEMON_DATA_SET_SUCCESS:
		case POKEMON_DATA_REMOVE_SUCCESS:
		case POKEMONS_DATA_GET_SUCCESS:
			return {
				...state,
				pokemonsData: action.payload,
				loading: false
			}
		case POKEMONS_DATA_GET_ERROR:
			return {
				...state,
				error: true,
				loading: false
			}
		default:
			return state;
	}
}
