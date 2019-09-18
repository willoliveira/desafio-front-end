/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { PokemonStats, calcStatsFillPercent, statsTranspile } from './PokemonStats';
import { IPokemonStats } from '../../../../shared/model/pokemon.model';

describe('<PokemonStats />', () => {
	let stats: IPokemonStats[];
	beforeAll(() => {
		stats = [
			{
				"base_stat": 100,
				"effort": 0,
				"stat": { "name": "speed", "url": "https://pokeapi.co/api/v2/stat/6/" }
			},
			{
				"base_stat": 65,
				"effort": 0,
				"stat": { "name": "special-defense", "url": "https://pokeapi.co/api/v2/stat/5/" }
			},
			{
				"base_stat": 65,
				"effort": 1,
				"stat": { "name": "special-attack", "url": "https://pokeapi.co/api/v2/stat/4/"
				}
			},
			{
				"base_stat": 49,
				"effort": 0,
				"stat": { "name": "defense", "url": "https://pokeapi.co/api/v2/stat/3/" }
			},
			{
				"base_stat": 49,
				"effort": 0,
				"stat": { "name": "attack", "url": "https://pokeapi.co/api/v2/stat/2/" }
			},
			{
				"base_stat": 45,
				"effort": 0,
				"stat": { "name": "hp", "url": "https://pokeapi.co/api/v2/stat/1/" }
			}
		]
	});

	describe('Rendering', () => {

		it('should match to snapshot - one type - electric', () => {
			const component = shallow(<PokemonStats stats={stats} />);
			expect(component).toMatchSnapshot("PokemonStats snapshot");
		});
	});

	describe('calcStatsFillPercent()', () => {

		it('Calc stats fill bar', () => {
			expect(calcStatsFillPercent(stats[0])).toEqual(50)
		});
	});

	describe('stats transpile', () => {

		it('speed => Spd', () => {
			expect(statsTranspile['speed']).toEqual('Spd')
		});

		it('special-defense => Sp Def', () => {
			expect(statsTranspile['speed']).toEqual('Spd')
		});

		it('special-attack => Sp Atk', () => {
			expect(statsTranspile['speed']).toEqual('Spd')
		});

		it('defense => Def', () => {
			expect(statsTranspile['speed']).toEqual('Spd')
		});

		it('attack => Atk', () => {
			expect(statsTranspile['speed']).toEqual('Spd')
		});

		it('hp => HP', () => {
			expect(statsTranspile['speed']).toEqual('Spd')
		});
	});
});
