import React, { FC } from 'react';
import { PokemonListCard } from '../../../../shared/components/PokemonListCard/PokemonListCard';
import { PokedexListCardEmpty } from '../../../../shared/components/PokemonListCardEmpty/PokemonListCardEmpty';

export interface IPokedexListCardProps {
	pokemonId: number;
	pokemonData: any;
	filterCatch: boolean;
	onPress: () => void
}

export const PokedexListCard: FC<IPokedexListCardProps> = ({ filterCatch, pokemonId, pokemonData, onPress }: IPokedexListCardProps) => (
	pokemonData
		? (
			<PokemonListCard
				onPress={onPress}
				pokemonData={pokemonData} />
		)
		: !filterCatch
			? (
				<PokedexListCardEmpty pokemonId={pokemonId} />
			)
			: null
);
