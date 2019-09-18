import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { pokemonGet, setSearchText } from './Search.action';
import { Dispatch } from 'redux';
import { IPokemon } from '../../shared/model/pokemon.model';
import { Skeleton } from '../../shared/components/Skeleton/Skeleton';
import { pokemonDataSet, pokemonsDataGet, pokemonDataRemove } from '../pokedex/Pokedex.actions';
import { NavigationInjectedProps, withNavigation, ScrollView, NavigationEventSubscription } from 'react-navigation';
import { PokemonStats } from './components/PokemonStats/PokemonStats';
import { PokemonImage } from './components/PokemonImage/PokemonImage';
import { PokemonName } from './components/PokemonName/PokemonName';
import { PokemonCharacteristics } from './components/PokemonCharacteristics/PokemonCharacteristics';
import { PokemonType } from './components/PokemonTypes/PokemonTypes';
import { PokemonActions } from './components/PokemonActions/PokemonActions';

export interface ISearchProps {
	loading: boolean;
	error: any;
	pokemon: IPokemon;
	pokemonsData: any;
	pokemonData: any;
	searchable: boolean;
	searchText: string;
}

export interface ISearchDispatchProps {
	pokemonGet: (filter: string) => void;
	pokemonDataSet: (pokemon: any) => void;
	pokemonsDataGet: () => void;
	pokemonDataRemove: (pokemonId: number) => void;
	setSearchText: (searchText: string) => void;
}

export type ISearch =NavigationInjectedProps & ISearchProps & ISearchDispatchProps;

export interface ISearchState {
	searchText: string;
}

export class SearchWrapped extends Component<ISearch, ISearchState> {

	onWillBlurSubscription: NavigationEventSubscription;

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('titlePage'),
		};
	}

	constructor(props: ISearch) {
		super(props);

		this.state = {
			searchText: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onAddPokemon = this.onAddPokemon.bind(this);
		this.onRemovePokemon = this.onRemovePokemon.bind(this);
		this.onWillBlur = this.onWillBlur.bind(this);
	}

	componentDidMount() {
		const { navigation } = this.props;
		this.props.pokemonsDataGet();

		this.onWillBlurSubscription = navigation.addListener('willBlur', this.onWillBlur);

		if (this.props.searchText) {
			this.props.pokemonGet(this.props.searchText);
		} else {
			navigation.setParams({ titlePage: 'Pesquise um pokemon' });
		}
	}

	componentDidUpdate(prevProps: ISearch) {
		const { navigation } = this.props;
		if (this.props.pokemon !== prevProps.pokemon && this.props.pokemon) {
			navigation.setParams({ titlePage: 'Visualize o pokemon' });
		}
	}

	componentWillUnmount() {
		this.onWillBlurSubscription && this.onWillBlurSubscription.remove();
	}

	onWillBlur() {
		this.props.setSearchText('');
	}

	onChange(searchText: string) {
		this.setState({ searchText });
	}

	onSearch() {
		const { searchText } = this.state;
		if (searchText) {
			this.props.pokemonGet(searchText);
		}
	}

	onAddPokemon() {
		this.props.pokemonDataSet({
			id: this.props.pokemon.id,
			name: this.props.pokemon.name,
			imageUrl: this.props.pokemon.sprites.front_default
		});

		this.props.setSearchText('');
		this.props.navigation.goBack();
	}

	onRemovePokemon() {
		this.props.pokemonDataRemove(this.props.pokemon.id);
		this.props.navigation.goBack();
	}

	onRenderContent() {
		return (
			<Skeleton loading={this.props.loading}>
				{
					this.props.pokemon
						? this.onRenderPokemon()
						: <Text>Pesquise um pokemon!</Text>
				}
			</Skeleton>
		)
	}

	onRenderPokemon() {
		const { pokemon } = this.props;
		const { name, sprites, id, base_experience, types, stats } = pokemon;
		return (
			<Skeleton loading={this.props.loading}>
				<View style={styles.pokemonInfos}>

					<PokemonActions
						pokemonData={this.props.pokemonsData[this.props.pokemon.id]}
						onAddPokemon={this.onAddPokemon}
						onRemovePokemon={this.onRemovePokemon} />

					<PokemonName
						name={name}
						pokemonNumber={id} />

					<PokemonType types={types} />

					<PokemonImage
						pokemonNumber={id}
						sprites={sprites} />
					<PokemonStats
						stats={stats}
						base_experience={base_experience} />

					<PokemonCharacteristics pokemon={pokemon} />

				</View>
			</Skeleton>
		)
	}

	render() {
		const { searchable } = this.props;
		const displaySearch = searchable ? 'flex' : 'none';

		return (
			<ScrollView style={styles.searchContainer}>

				<View style={{ ...styles.searchInputContainer, display: displaySearch }}>
					<TextInput
						style={styles.searchInput}
						editable
						onChangeText={this.onChange}
						placeholder='Pesquisar'
						numberOfLines={1} />
					<Button
						title='Buscar'
						onPress={this.onSearch}
						disabled={!this.state.searchText} />
				</View>

				{this.onRenderContent()}

			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	searchContainer: {
		paddingLeft: 24,
		paddingRight: 24,
		flex: 1
	},
	pokemonInfos: {
		width: '100%',
		position: "relative"
	},
	searchInputContainer: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 12,
		display: "none"
	},
	searchInput: {
		borderColor: '#F2F2F2',
		borderStyle: "solid",
		borderWidth: 1,
		height: 40,
		padding: 8,
		flex: 5
	},
	searchInputButton: {
		flex: 1
	}
});

const mapStateToProps = (state: any) => {
	const { SearchReducer } = state;
	const { loading, pokemon, pokemonsData, searchable, searchText } = SearchReducer;
	return {
		loading, pokemon, pokemonsData, searchable, searchText
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	pokemonGet(filter?: string | number) {
		dispatch(pokemonGet(filter));
	},
	pokemonDataSet(pokemon: any) {
		dispatch(pokemonDataSet(pokemon));
	},
	pokemonsDataGet() {
		dispatch(pokemonsDataGet());
	},
	pokemonDataRemove(pokemonId: number) {
		dispatch(pokemonDataRemove(pokemonId));
	},
	setSearchText(searchText: string) {
		dispatch(setSearchText(searchText));
	}
});

export const Search = connect(mapStateToProps, mapDispatchToProps)(withNavigation(SearchWrapped));
