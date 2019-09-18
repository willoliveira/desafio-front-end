import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface IPokemonNameProps {
	pokemonNumber: number;
	name: string;
}

export const PokemonName: FC<IPokemonNameProps> = ({ pokemonNumber, name }: IPokemonNameProps) => (
	<View style={styles.pokemonNameContainer}>
		<View style={styles.nameContainer}>
			<Text style={styles.textName}>{getName(name)}</Text>
			<Text style={styles.textNumber}>{getNumber(pokemonNumber)}</Text>
		</View>
	</View>
);

export const getName = (name: string): string => `${name[0].toUpperCase()}${name.substring(1)}`;

export const getNumber = (pokemonNumber: number): string => {
	let number = `${pokemonNumber}`
	if (pokemonNumber.toString().length === 1) {
		number = `00${number}`;
	} else if (pokemonNumber.toString().length === 2) {
		number = `0${number}`;
	}

	return `Nº${number}`;
}

const styles = StyleSheet.create({
	pokemonNameContainer: {
		width: '100%',
		marginBottom: 16,
		marginTop: 16
	},
	nameContainer: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
	},
	textName: {
		fontSize: 20,
	},
	textNumber: {
		fontSize: 20,
		marginLeft: 4,
		color: '#616161'
	}
})
