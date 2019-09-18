/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { PokemonImage, getUrl, getPokemonCompanyImageUrl, pokemonCompanyImageExt, pokemonCompanyImageUrl } from './PokemonImage';
import { IPokemonSprites } from '../../../../shared/model/pokemon.model';

describe('<PokemonImage />', () => {

	let sprites: IPokemonSprites;

	beforeEach(() => {
		sprites = {
			"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
			"back_female": null,
			"back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
			"back_shiny_female": null,
			"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			"front_female": null,
			"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
			"front_shiny_female": null
		};
	});

	describe('Rendering', () => {

		it('should match to snapshot', () => {
			const component = shallow(<PokemonImage sprites={sprites} pokemonNumber={1} />);
			expect(component).toMatchSnapshot("PokemonImage snapshot");
		});
	});

	describe('getPokemonCompanyImageUrl()', () => {
		it('Image pokemon number 1', () => {
			const number: string = '001';
			expect(getPokemonCompanyImageUrl('001')).toEqual(`${pokemonCompanyImageUrl}${number}.${pokemonCompanyImageExt}`);
		});

		it('Image pokemon number 25', () => {
			const number: string = '025';
			expect(getPokemonCompanyImageUrl('025')).toEqual(`${pokemonCompanyImageUrl}${number}.${pokemonCompanyImageExt}`);
		});

		it('Image pokemon number 125', () => {
			const number: string = '150';
			expect(getPokemonCompanyImageUrl('150')).toEqual(`${pokemonCompanyImageUrl}${number}.${pokemonCompanyImageExt}`);
		});
	})

	describe('getUrl()', () => {
		it('Image pokemon number 1', () => {
			expect(getUrl(1, sprites)).toEqual(getPokemonCompanyImageUrl('001'));
		});

		it('Image pokemon number 25', () => {
			expect(getUrl(25, sprites)).toEqual(getPokemonCompanyImageUrl('025'));
		});

		it('Image pokemon number 125', () => {
			expect(getUrl(150, sprites)).toEqual(getPokemonCompanyImageUrl('150'));
		});
	});
});
