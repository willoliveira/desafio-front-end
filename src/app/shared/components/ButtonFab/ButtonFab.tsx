import React, { FC } from 'react';
import { Button, TouchableNativeFeedback, Animated, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

export interface IButtonFabProps {
	path: string;
	title: string;
	back?: boolean;
}

export type IButtonFab = NavigationInjectedProps & IButtonFabProps;

const ButtonFabWrapper: FC<IButtonFab> = (props: IButtonFab) => (
	<TouchableOpacity style={styles.fab} onPress={onPress.bind(this, props)}>
		<Text style={styles.text}>{props.title}</Text>
	</TouchableOpacity>
);

const onPress = ({ back, navigation, path }: IButtonFab) => {
	if (back) {
		navigation.goBack();
	} else {
		navigation.navigate(path);
	}
}

const styles = StyleSheet.create({
	fab: {
		height: 50,
		width: 50,
		borderRadius: 200,
		position: 'absolute',
		bottom: 10,
		right: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#30a7d7',
	},
	text: {
		fontSize:30,
		color:'white'
	},
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',
	},
});

export const ButtonFab = withNavigation(ButtonFabWrapper);
