/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { PokemonName, getName, getNumber } from './PokemonName';

describe('<PokemonName />', () => {

	describe('Rendering', () => {

		it('should match to snapshot - Bulbassaur Nº001', () => {
			const component = shallow(<PokemonName name='Bulbassaur' pokemonNumber={1} />);
			expect(component).toMatchSnapshot("PokemonName snapshot");
		});

		it('should match to snapshot - Pikachu Nº025', () => {
			const component = shallow(<PokemonName name='Bulbassaur' pokemonNumber={1} />);
			expect(component).toMatchSnapshot("PokemonName snapshot");
		});

		it('should match to snapshot - Mewtwo Nº150', () => {
			const component = shallow(<PokemonName name='Bulbassaur' pokemonNumber={1} />);
			expect(component).toMatchSnapshot("PokemonName snapshot");
		});
	});

	describe('getName()', () => {

		it('CamelCase correct', () => {
			expect(getName('bulbassaur')).toEqual('Bulbassaur');
		});
	});

	describe('getNumber()', () => {

		it('Format number one digits - 1', () => {
			expect(getNumber(1)).toEqual('Nº001');
		});

		it('Format number two digits - 25', () => {
			expect(getNumber(25)).toEqual('Nº025');
		});

		it('Format number three digits - 125', () => {
			expect(getNumber(150)).toEqual('Nº150');
		});
	});
});
