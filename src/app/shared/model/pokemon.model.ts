import { IRessource } from "./ressource.model";

export enum EnumPokemonTypes {
	'normal',
	'fighting',
	'flying',
	'poison',
	'ground',
	'rock',
	'bug',
	'ghost',
	'steel',
	'fire',
	'water',
	'grass',
	'electric',
	'psychic',
	'ice',
	'dragon',
	'dark',
	'fairy',
	'unknown',
	'shadow'
}

export interface IPokemonAbilities {
	ability: IRessource;
	is_hidden: boolean;
	slot: number;
}

export interface IPokemonStats {
	base_stat: number;
	effort: number;
	stat: IRessource;
}

export interface IPokemonTypes {
	slot: number;
	type: IRessource;
}

export interface IPokemonSprites {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
}

export interface IPokemon {
	id: number;
	base_experience: number;
	name: string;
	sprites: IPokemonSprites;
	weight: number;
	height: number;
	types: IPokemonTypes[];
	abilities: IPokemonAbilities[];
	stats: IPokemonStats[];
}
