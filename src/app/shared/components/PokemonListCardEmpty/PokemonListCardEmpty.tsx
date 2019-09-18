import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface IPokedexListCardEmptyProps {
	pokemonId: number;
}

export const PokedexListCardEmpty: FC<IPokedexListCardEmptyProps> = ({ pokemonId }: IPokedexListCardEmptyProps) => (
	<View key={`pokedex-card-${pokemonId}`} style={styles.pokedexListCardEmpty} >
		<Text style={styles.pokedexListCardEmptyText}>{pokemonId}</Text>
	</View>
)
const styles = StyleSheet.create({
	pokedexListCardEmpty: {
		width: 100,
		height: 100,
		borderRadius: 8,
		marginBottom: 4,
		marginTop: 4,
		backgroundColor: '#DCDCDC'
	},
	pokedexListCardEmptyText: {
		lineHeight: 100,
		textAlign: "center",
		fontSize: 42
	}
});
