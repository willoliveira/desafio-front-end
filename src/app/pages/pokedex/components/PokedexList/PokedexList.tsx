import React, { Component } from 'react';
import { View, TextInput, ScrollView, Text, Image, Button, Alert, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet, FlatList, Switch } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { pokemonsGet, setSearchText } from '../../../search/Search.action';
import { IPokemon } from '../../../../shared/model/pokemon.model';
import { pokemonsDataGet } from '../../Pokedex.actions';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { Skeleton } from '../../../../shared/components/Skeleton/Skeleton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PokedexListCard } from '../PokedexListCard/PokedexListCard';

export interface IPokedexListProps {
	loading: boolean;
	error: any;
	pokemons: number[];
	pokemonsData: any[];
}

export interface IPokedexListDispatchProps {
	pokemonsGet: () => void;
	pokemonsDataGet: () => void;
	setSearchText: (searchText: string) => void;
}

export type IPokedexList = NavigationInjectedProps & IPokedexListProps & IPokedexListDispatchProps;

export interface IPokedexListState {
	filterCatch: boolean;
}

export class PokedexListWrapper extends Component<IPokedexList, IPokedexListState> {

	constructor(props: IPokedexList) {
		super(props);

		this.state = {
			filterCatch: false
		};

		this.onFilterChange = this.onFilterChange.bind(this);
	}

	componentDidMount(){
		this.props.pokemonsGet();
		this.props.pokemonsDataGet();
	}

	onFilterChange(filterCatch: boolean) {
		this.setState({ filterCatch });
	}

	onNavigate(pokemonId: number) {
		const { setSearchText, navigation } = this.props;
		setSearchText(`${pokemonId}`);
		navigation.navigate('Search', {
			onGoBack: () => setSearchText('')
		});
	}

	render() {
		const { pokemonsData } = this.props;
		const { filterCatch } = this.state;
		return (
			<View style={styles.viewPokedexList}>
				<View style={styles.pokemonFilter}>
					<Switch
						value={this.state.filterCatch}
						onValueChange={this.onFilterChange} />
					<Text>Somente capturados</Text>
				</View>
				<Skeleton loading={this.props.loading}>
					<ScrollView>
						<View style={styles.viewPokedexListScrollView}>
							{this.props.pokemons.map((p) => (
								<PokedexListCard
									key={`pokedexListCard-${p}`}
									pokemonId={p}
									pokemonData={pokemonsData[p]}
									filterCatch={filterCatch}
									onPress={this.onNavigate.bind(this, p)} />
							))}
						</View>
					</ScrollView>
				</Skeleton>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	viewPokedexList: {
		marginBottom: 24
	},
	pokemonFilter: {
		display: "flex",
		flexDirection: 'row'
	},
	viewPokedexListScrollView: {
		display: "flex",
		flex: 1,
		flexDirection: 'row',
		flexWrap: "wrap",
		justifyContent: 'space-around'
	},
	viewPokedexListItemImage: {
		width: 100,
		height: 100,
	},
	viewPokedexListItem: {
		width: 100,
		height: 100,
		borderRadius: 8,
		marginBottom: 4,
		marginTop: 4,
		backgroundColor: '#DCDCDC'
	},
	viewPokedexListItemText: {
		lineHeight: 100,
		textAlign: "center",
		fontSize: 42
	}
})


const mapStateToProps = (state: any) => {
	const { PokedexReducer } = state;
	const { loading, error, pokemons, pokemonsData } = PokedexReducer;

	return {
		loading, error, pokemons, pokemonsData
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	pokemonsGet() {
		dispatch(pokemonsGet());
	},
	pokemonsDataGet() {
		dispatch(pokemonsDataGet());
	},
	setSearchText(searchText: string) {
		dispatch(setSearchText(searchText));
	}
});

export const PokedexList = connect(mapStateToProps, mapDispatchToProps)(withNavigation(PokedexListWrapper));
