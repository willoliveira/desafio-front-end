import React, { FC } from 'react';
import {  IPokemonSprites } from '../../../../shared/model/pokemon.model';
import { View, StyleSheet, Image } from 'react-native';

export interface IPokemonImageProps {
	sprites: IPokemonSprites;
	pokemonNumber: number;
}

export const pokemonCompanyImageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';
export const pokemonCompanyImageExt = 'png';

export const getPokemonCompanyImageUrl = (number: string): string => `${pokemonCompanyImageUrl}${number}.${pokemonCompanyImageExt}`

export const PokemonImage: FC<IPokemonImageProps> = ({ pokemonNumber, sprites }: IPokemonImageProps) => (
	<View style={styles.imageContainer}>
		<Image
			style={styles.image}
			source={{ uri: getUrl(pokemonNumber, sprites) }} />
	</View>
);

export const getUrl = (pokemonNumber: number, sprites: IPokemonSprites) => {
	let number = `${pokemonNumber}`
	if (pokemonNumber.toString().length === 1) {
		number = `00${number}`;
	} else if (pokemonNumber.toString().length === 2) {
		number = `0${number}`;
	}
	return getPokemonCompanyImageUrl(number);
	// return sprites && sprites.front_default;
}

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: '#F2F2F2',
		borderRadius: 4,
		height: 300,
		width: '100%',
		padding: 24,
		flex: 1,
		alignContent: 'center',
		marginBottom: 12
	},
	image: {
		width: '100%',
		height: '100%'
	}
});
