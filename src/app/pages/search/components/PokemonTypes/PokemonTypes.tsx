import React, { FC } from 'react';
import { IPokemonTypes } from '../../../../shared/model/pokemon.model';
import { View, StyleSheet, Text } from 'react-native';

export interface IPokemonTypeProps {
	types: IPokemonTypes[];
}

export const PokemonType: FC<IPokemonTypeProps> = ({ types }: IPokemonTypeProps) => (
	<View style={styles.typesContainer}>
		{
			types.map((type: IPokemonTypes) => (
				<View key={`key-${type.type.name}`} style={{ ...styles.typeContainer, backgroundColor: colorsTranspile[type.type.name]}}>
					<Text style={styles.typeNameText}>{type.type.name}</Text>
				</View>
			))
		}
	</View>
)

const styles = StyleSheet.create({
	typesContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: 24
	},
	typesContainerTitle: {
		fontSize: 18
	},
	typeContainer: {
		borderRadius: 8,
		padding: 8,
		minWidth: 56,
		margin: 2,
		textAlign: "center"
	},
	typeNameText: {
		color: '#FFFFFF',
		textAlign: 'center'
	},
});

const colorsTranspile = {
	'normal': '#a4acaf',
	'fighting': '#3dc7ef',
	'flying': '#8e6feb',
	'poison': '#b97fc9',
	'ground': '#f7de3f',
	'rock': '#a38c21',
	'bug': '#729f3f',
	'ghost': '#7b62a3',
	'steel': '#9eb7b8',
	'fire': '#fd7d24',
	'water': '#4592c4',
	'grass': '#9bcc50',
	'electric': '#eed535',
	'psychic': '#f366b9',
	'ice': '#51c4e7',
	'dragon': '#53a4cf',
	'dark': '#707070',
	'fairy': '#fdb9e9',
	'unknown': '#000000',
	'shadow': '#000000'
}
