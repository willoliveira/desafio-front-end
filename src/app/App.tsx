import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { Search } from './pages/search/Search';
import { Provider } from 'react-redux';
import { store } from './store';
import { Pokedex } from './pages/pokedex/Pokedex';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
	Pokedex: {
		screen: Pokedex,
	},
	Search: {
		screen: Search
	}
},{
	initialRouteName: 'Pokedex',
});

const Navigation = createAppContainer(RootStack);

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
