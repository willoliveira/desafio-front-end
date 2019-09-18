import { createStore, combineReducers, applyMiddleware } from 'redux'
import { SearchReducer } from './pages/search/Search.reducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootSagas } from './sagas';
import { PokedexReducer } from './pages/pokedex/Pokedex.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({
	SearchReducer,
	PokedexReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
