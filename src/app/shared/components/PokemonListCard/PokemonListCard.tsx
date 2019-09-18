import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface IPokemonListCardProps {
	pokemonData: any;
	onPress: () => void
}

export const PokemonListCard: FC<IPokemonListCardProps> = ({ pokemonData, onPress }: IPokemonListCardProps) => (
	<TouchableOpacity
		onPress={onPress}
		key={`pokedex-card-${pokemonData}`}
		style={styles.pokemonListCard} >
		<Image
			style={styles.pokemonListCardImage}
			source={{ uri: pokemonData.imageUrl }} />
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	pokemonListCard: {
		width: 100,
		height: 100,
		borderRadius: 8,
		marginBottom: 4,
		marginTop: 4,
		backgroundColor: '#DCDCDC'
	},
	pokemonListCardImage: {
		width: '100%',
		height: '100%',
	}
});
