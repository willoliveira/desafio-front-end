import React, { FC } from 'react';
import { IPokemonStats } from '../../../../shared/model/pokemon.model';
import { View, StyleSheet, Text } from 'react-native';

export interface IPokemonStatsProps {
	stats: IPokemonStats[];
}

export const PokemonStats: FC<IPokemonStatsProps> = ({ stats }: IPokemonStatsProps) => (
	<View style={styles.statsContainer}>
		<Text>Stats</Text>
		<View style={styles.statsParent}>
			{
				stats.map((stat: IPokemonStats) => (
					<View key={`key-${stat.stat.name}`} style={styles.bar}>
						<View style={styles.statsBar} />
						<View style={{ ...styles.statsFillBar, height: `${calcStatsFillPercent(stat)}%` }}>
							<Text style={styles.statsFillText}>{stat.base_stat}</Text>
						</View>
						<Text style={styles.statsName}>{statsTranspile[stat.stat.name]}</Text>
					</View>
				))
			}
		</View>
	</View>
);

export const calcStatsFillPercent = (stat: IPokemonStats, base_stats: number = 200): number => {
	return Math.round((stat.base_stat / base_stats) * 100);
}

export const statsTranspile = {
	'speed': 'Spd',
	'special-defense': 'Sp Def',
	'special-attack': 'Sp Atk',
	'defense': 'Def',
	'attack': 'Atk',
	'hp': 'HP'
}


const styles = StyleSheet.create({
	statsContainer: {
		backgroundColor: '#a4a4a4',
		borderRadius: 10,
		minHeight: 250,
		width: '100%',
		paddingTop: 18,
		paddingBottom: 42,
		paddingLeft: 12,
		paddingRight: 12,
		marginBottom: 12,
		flex: 1,
		flexDirection: "column"
	},
	statsParent: {
		display: "flex",
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '90%'
	},
	bar: {
		height: '100%',
		flex: 1,
		flexGrow: 1,
		margin: 2
	},
	statsBar: {
		backgroundColor: '#FFFFFF',
		position: 'absolute',
		height: '100%',
		width: '100%'
	},
	statsFillBar: {
		backgroundColor: '#30a7d7',
		position: 'absolute',
		zIndex: 999,
		width: '100%',
		bottom: 0
	},
	statsFillText: {
		position: 'absolute',
		color: '#FFFFFF',
		textAlign: 'center',
		bottom: 4,
		left: 0,
		width: '100%'
	},
	statsName: {
		position: 'absolute',
		bottom: -20,
		textAlign: 'center',
		width: '100%',
		fontWeight: 'bold'
	}
});
