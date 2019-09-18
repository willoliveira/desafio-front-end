import React, { FC } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export interface IPokemonActionsProps {
	pokemonData: any;
	onAddPokemon: () => void;
	onRemovePokemon: () => void;
}

export const PokemonActions: FC<IPokemonActionsProps> = ({ pokemonData, onAddPokemon, onRemovePokemon }: IPokemonActionsProps) => (
		<View style={styles.pokemonActionContainer}>
			{
				pokemonData
					? (
						<Button
							title="Remover"
							onPress={onRemovePokemon} />
					)
					: (
						<Button
							title="Adicionar"
							onPress={onAddPokemon} />
					)
			}
		</View>
)


const styles = StyleSheet.create({
	pokemonActionContainer: {
		position: 'absolute',
		top: 12,
		right: 0
	}
});
