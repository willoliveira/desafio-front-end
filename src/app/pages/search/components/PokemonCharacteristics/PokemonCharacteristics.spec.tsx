/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { PokemonCharacteristics, getAbilities } from './PokemonCharacteristics';
import { IPokemon, IPokemonAbilities } from '../../../../shared/model/pokemon.model';

describe('<PokemonCharacteristics />', () => {
	let pokemon: IPokemon;
	beforeAll(() => {
		pokemon = {
			"abilities": [
				{
					"ability": {
						"name": "chlorophyll",
						"url": "https://pokeapi.co/api/v2/ability/34/"
					},
					"is_hidden": true,
					"slot": 3
				},
				{
					"ability": {
						"name": "overgrow",
						"url": "https://pokeapi.co/api/v2/ability/65/"
					},
					"is_hidden": false,
					"slot": 1
				}
			],
			"base_experience": 64,
			"height": 7,
			"id": 1,
			"name": "bulbasaur",
			"sprites": {
				"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
				"back_female": null,
				"back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
				"back_shiny_female": null,
				"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
				"front_female": null,
				"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
				"front_shiny_female": null
			},
			"stats": [
				{
					"base_stat": 45,
					"effort": 0,
					"stat": {
						"name": "speed",
						"url": "https://pokeapi.co/api/v2/stat/6/"
					}
				},
				{
					"base_stat": 65,
					"effort": 0,
					"stat": {
						"name": "special-defense",
						"url": "https://pokeapi.co/api/v2/stat/5/"
					}
				},
				{
					"base_stat": 65,
					"effort": 1,
					"stat": {
						"name": "special-attack",
						"url": "https://pokeapi.co/api/v2/stat/4/"
					}
				},
				{
					"base_stat": 49,
					"effort": 0,
					"stat": {
						"name": "defense",
						"url": "https://pokeapi.co/api/v2/stat/3/"
					}
				},
				{
					"base_stat": 49,
					"effort": 0,
					"stat": {
						"name": "attack",
						"url": "https://pokeapi.co/api/v2/stat/2/"
					}
				},
				{
					"base_stat": 45,
					"effort": 0,
					"stat": {
						"name": "hp",
						"url": "https://pokeapi.co/api/v2/stat/1/"
					}
				}
			],
			"types": [
				{
					"slot": 2,
					"type": {
						"name": "poison",
						"url": "https://pokeapi.co/api/v2/type/4/"
					}
				},
				{
					"slot": 1,
					"type": {
						"name": "grass",
						"url": "https://pokeapi.co/api/v2/type/12/"
					}
				}
			],
			"weight": 69
		}
	})

	describe('Rendering', () => {

		it('should match to snapshot', () => {
			const component = shallow(<PokemonCharacteristics pokemon={pokemon} />);
			expect(component).toMatchSnapshot("PokemonType snapshot");
		});
	});

	describe('getAbilities()', () => {

		it('one abilities', () => {
			const abilities: IPokemonAbilities[] = [
				{
					"ability": {
						"name": "synchronize",
						"url": "https://pokeapi.co/api/v2/ability/28/"
					},
					"is_hidden": false,
					"slot": 1
				}
			];
			expect(getAbilities(abilities)).toEqual('synchronize');
		});

		it('two abilities', () => {
			expect(getAbilities(pokemon.abilities)).toEqual('chlorophyll e overgrow');
		});

		it('three abilities', () => {
			const abilities: IPokemonAbilities[] = [
				{
					"ability": {
						"name": "defiant",
						"url": "https://pokeapi.co/api/v2/ability/128/"
					},
					"is_hidden": true,
					"slot": 3
				},
				{
					"ability": {
						"name": "anger-point",
						"url": "https://pokeapi.co/api/v2/ability/83/"
					},
					"is_hidden": false,
					"slot": 2
				},
				{
					"ability": {
						"name": "vital-spirit",
						"url": "https://pokeapi.co/api/v2/ability/72/"
					},
					"is_hidden": false,
					"slot": 1
				}
			];
			expect(getAbilities(abilities)).toEqual('defiant, anger-point e vital-spirit');
		});
	})
});
