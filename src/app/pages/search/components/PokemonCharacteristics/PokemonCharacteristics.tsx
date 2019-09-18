import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IPokemon, IPokemonAbilities } from '../../../../shared/model/pokemon.model';

export interface IPokemonCharacteristicsProps {
	pokemon: IPokemon
}

export const PokemonCharacteristics: FC<IPokemonCharacteristicsProps> = ({ pokemon }: IPokemonCharacteristicsProps) => (
	<View style={styles.characteristicsContainer}>
		<View style={styles.columnContainer}>
			<View style={styles.textContainer}>
				<Text style={styles.nameCharacteristics}>Height</Text>
				<Text style={styles.valueCharacteristics}>{pokemon.height}</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.nameCharacteristics}>Weight</Text>
				<Text style={styles.valueCharacteristics}>{pokemon.weight}</Text>
			</View>
		</View>
		<View style={styles.columnContainer}>
			<View style={styles.textContainer}>
				<Text style={styles.nameCharacteristics}>Category</Text>
				<Text style={styles.valueCharacteristics}>-</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.nameCharacteristics}>Abilities</Text>
				<Text style={styles.valueCharacteristics}>{getAbilities(pokemon.abilities)}</Text>
			</View>
		</View>
	</View>
);

export const getAbilities = (abilities: IPokemonAbilities[]): string => (
	abilities.reduce((acc, ability, index) => {
		if (index === 0) {
			return `${acc}${ability.ability.name}`;
		}
		else if (index + 1 === abilities.length) {
			return `${acc} e ${ability.ability.name}`;
		}
		return `${acc}, ${ability.ability.name}`;
	}, '')
)

const styles = StyleSheet.create({
	characteristicsContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 12,
		marginBottom: 12,
		backgroundColor: '#30a7d7',
		borderRadius: 8,
		justifyContent: 'space-between'
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	textContainer: {

	},
	nameCharacteristics: {
		color: '#FFFFFF',
		fontWeight: 'bold'
	},
	valueCharacteristics: {
		color: '#212121'
	}
})
