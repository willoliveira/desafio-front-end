import { all } from 'redux-saga/effects';
import { SearchSagas } from './pages/search/Search.sagas';
import { PokedexSagas } from './pages/pokedex/Pokedex.sagas';
export function* rootSagas() {
	yield all([
		...SearchSagas,
		...PokedexSagas
	]);
}
