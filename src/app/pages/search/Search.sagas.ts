import { POKEMON_GET, POKEMON_GET_SUCCESS, POKEMON_GET_ERROR, POKEMONS_GET_SUCCESS, POKEMONS_GET_ERROR, POKEMONS_GET } from "./Search.action";
import { get } from "../../shared/service/Http";
import { call, put, takeLatest } from 'redux-saga/effects'
import axios, { AxiosRequestConfig } from 'axios';

function fetchPokemonGetApi(pokemon: string) {
	if (pokemon)
		return get(`pokemon/${pokemon}`);
	return get(`pokemon/`);
}

function* fetchPokemonGet(state) {
	try {
		const payload = yield call(fetchPokemonGetApi, state.payload);
		yield put({
			type: POKEMON_GET_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: POKEMON_GET_ERROR
		});
	}
}


function fetchPokemonsGetApi(options?: any) {
	return get(`pokemon/`);
}

function* fetchPokemonsGet(state: any) {
	try {
		const payload = yield call(fetchPokemonsGetApi, state.payload);
		yield put({
			type: POKEMONS_GET_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: POKEMONS_GET_ERROR
		});
	}
}

export const SearchSagas = [
	takeLatest(POKEMON_GET, fetchPokemonGet),
	takeLatest(POKEMONS_GET, fetchPokemonsGet)
];
