/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { PokemonActions, IPokemonActionsProps } from './PokemonActions';

describe('<PokemonActions />', () => {

	let actionsProps;
	beforeAll(() => {
		actionsProps = {
			onAddPokemon: () => jest.fn(),
			onRemovePokemon: () =>  jest.fn()
		}
	});

	describe('Rendering', () => {

		it('should match to snapshot - add button', () => {
			const component = shallow(<PokemonActions pokemonData={true} {...actionsProps} />);
			expect(component).toMatchSnapshot("PokemonActions snapshot");
		});

		it('should match to snapshot - remove button', () => {
			const component = shallow(<PokemonActions pokemonData={false} {...actionsProps} />);
			expect(component).toMatchSnapshot("PokemonActions snapshot");
		});
	});
});
