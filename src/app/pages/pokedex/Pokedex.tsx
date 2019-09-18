import React, { Component } from 'react';
import { View, TextInput, ScrollView, Text, Image, Button, Alert, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet } from 'react-native';
import { ButtonFab } from '../../shared/components/ButtonFab/ButtonFab';
import { PokedexList } from './components/PokedexList/PokedexList';

export interface IPokedexProps {
	loading: boolean;
	error: any;
}

export interface IPokedexDispatchProps {

}

export type IPokedex = IPokedexProps & IPokedexDispatchProps;


export class Pokedex extends Component<IPokedex> {

	static navigationOptions = {
		title: "Pokedex",
	};

	render() {
		return (
			<View style={styles.viewPokedex}>
				<PokedexList />
				<ButtonFab
					title={"+"}
					path="Search" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	viewPokedex: {
		padding: 12,
		position: 'relative',
		height: '100%',
		width: '100%'
	}
})
