import { call, put, takeLatest } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage';
import { POKEMON_DATA_GET_SUCCESS, POKEMON_DATA_GET_ERROR, POKEMON_DATA_GET, POKEMON_DATA_SET, POKEMON_DATA_SET_SUCCESS, POKEMON_DATA_SET_ERROR, POKEMONS_DATA_GET, POKEMONS_DATA_GET_SUCCESS, POKEMONS_DATA_GET_ERROR, POKEMON_DATA_REMOVE_SUCCESS, POKEMON_DATA_REMOVE_ERROR, POKEMON_DATA_REMOVE } from "./Pokedex.actions";

function fetchPokemonsDataGetApi() {
	return AsyncStorage.getItem('pokemons');
}

function* fetchPokemonsDataGet() {
	try {
		const payload = yield call(fetchPokemonsDataGetApi);
		let pokemonData = '';
		if (payload) {
			pokemonData = JSON.parse(payload)
		}
		yield put({
			type: POKEMONS_DATA_GET_SUCCESS,
			payload: pokemonData
		});
	} catch (error) {
		yield put({
			type: POKEMONS_DATA_GET_ERROR
		});
	}
}

function fetchPokemonDataGetApi() {
	return AsyncStorage.getItem('pokemons');
}

function* fetchPokemonDataGet(state) {
	try {
		const { payload: pokemonId } = state;
		const payload = yield call(fetchPokemonDataGetApi);
		let pokemonData = '';
		if (payload) {
			pokemonData = JSON.parse(payload)[pokemonId]
		}
		yield put({
			type: POKEMON_DATA_GET_SUCCESS,
			payload: pokemonData
		});
	} catch (error) {
		yield put({
			type: POKEMON_DATA_GET_ERROR
		});
	}
}


function fetchPokemonDataSetApi(pokemonNew: any, pokemonsOld: any) {
	if (pokemonsOld) {
		const jsonPokemonsOld = JSON.parse(pokemonsOld);
		jsonPokemonsOld[pokemonNew.id] = pokemonNew;
		return AsyncStorage.setItem('pokemons', JSON.stringify(jsonPokemonsOld));
	}
	return AsyncStorage.setItem('pokemons', JSON.stringify({ [pokemonNew.id]: pokemonNew }));
}

function* fetchPokemonDataSet(state: any) {
	try {
		const pokemonGet = yield call(fetchPokemonsDataGetApi);
		yield call(fetchPokemonDataSetApi, state.payload, pokemonGet);
		const pokemonGetAfterSet = yield call(fetchPokemonsDataGetApi);

		const payload = pokemonGetAfterSet ? JSON.parse(pokemonGetAfterSet) : null;

		yield put({
			type: POKEMON_DATA_SET_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: POKEMON_DATA_SET_ERROR
		});
	}
}



function fetchPokemonsDataSetApi(pokemons: any) {
	return AsyncStorage.setItem('pokemons', JSON.stringify(pokemons));
}


function* fetchPokemonDataRemove(state: any) {
	try {
		const { payload: pokemonId } = state;
		const pokemonGet = yield call(fetchPokemonsDataGetApi);

		const payload = pokemonGet ? JSON.parse(pokemonGet) : null;
		delete payload[pokemonId];

		yield call(fetchPokemonsDataSetApi, payload);

		yield put({
			type: POKEMON_DATA_REMOVE_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: POKEMON_DATA_REMOVE_ERROR
		});
	}
}

export const PokedexSagas = [
	takeLatest(POKEMONS_DATA_GET, fetchPokemonsDataGet),
	takeLatest(POKEMON_DATA_GET, fetchPokemonDataGet),
	takeLatest(POKEMON_DATA_SET, fetchPokemonDataSet),
	takeLatest(POKEMON_DATA_REMOVE, fetchPokemonDataRemove),
];
