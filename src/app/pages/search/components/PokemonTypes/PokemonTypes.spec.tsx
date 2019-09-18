/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { PokemonType } from './PokemonTypes';
import { IPokemonTypes } from '../../../../shared/model/pokemon.model';

describe('<PokemonTypes />', () => {

	describe('Rendering', () => {

		it('should match to snapshot - one type - electric', () => {
			const types: IPokemonTypes[] = [{
				slot: 1, type: { name: 'electric', url: '' }
			}];
			const component = shallow(<PokemonType types={types} />);
			expect(component).toMatchSnapshot("PokemonType snapshot");
		});

		it('should match to snapshot - two type - poison and ', () => {
			const types: IPokemonTypes[] = [
				{ slot: 1, type: { name: 'poison', url: '' } },
				{ slot: 2, type: { name: 'grass', url: '' } },
			];
			const component = shallow(<PokemonType types={types} />);
			expect(component).toMatchSnapshot("PokemonType snapshot");
		});
	});
});
